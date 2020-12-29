import { Const } from "../model/const";
import { ErrorRespose } from "../model/error";
import { False_Template } from "../template/false.template";

/**
 * Image renderer
 */
export class ImageRenderer {

	/**
	 * Renders image
	 * @param svgString
	 * @param width
	 * @param height
	 * @param imgMode
	 * @returns image
	 */
	public static async renderImage(svgString: string, width: number, height: number, imgMode: string): Promise<string> {

		let xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, 'text/xml'),
			inlineSVG = result.getElementsByTagName('svg')[0]

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			canvas: OffscreenCanvas


		canvas = new OffscreenCanvas(width, height)

		img.width = width
		img.height = height

		return await this.renderImageUrl(imgMode, data, canvas, xml, result, parser, inlineSVG, width, height, img)

	}

	/**
	 * Renders image url
	 * @param imgMode
	 * @param data
	 * @param canvas
	 * @param xml
	 * @param result
	 * @param parser
	 * @param inlineSVG
	 * @param width
	 * @param height
	 * @param img
	 * @returns image url
	 */
	private static async renderImageUrl(imgMode: string, data: string, canvas: OffscreenCanvas, xml: string, result: XMLDocument, parser: DOMParser, inlineSVG: SVGSVGElement, width: number, height: number, img: HTMLImageElement): Promise<string> {

		const ctx = <OffscreenCanvasRenderingContext2D>canvas.getContext('2d')

		img.onload = () => {
			ctx.drawImage(img, 0, 0, width, height)
		}

		img.src = data

		switch (imgMode) {
			case 'svg':
				return data

			case 'png':

				return await this.handleBlob(imgMode, canvas);

			case 'jpeg':

				return await this.handleBlob(imgMode, canvas);

			case 'webp':

				throw new Error(ErrorRespose.deprecation);

			default:

				xml = False_Template.template();
				result = parser.parseFromString(xml, 'text/xml');
				inlineSVG = result.getElementsByTagName('svg')[0];
				inlineSVG.setAttribute('width', width.toString());
				inlineSVG.setAttribute('height', height.toString());
				data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(False_Template.template());

				return data
		}
	}

	/**
	 * Handles blob
	 * @param dataType
	 * @param canvas
	 * @returns fileUrl
	 */
	private static async handleBlob(dataType: string, canvas: OffscreenCanvas): Promise<string> {

		let blob: Blob,
			blobURL: string,
			dataURL: string = "",
			done: boolean = false


		if (dataType == "jpeg") {
			blob = await canvas.convertToBlob({
				type: "image/" + dataType,
				quality: 1
			})
		} else {
			blob = await canvas.convertToBlob({
				type: "image/" + dataType
			})
		}

		blobURL = URL.createObjectURL(this.getWorkerURL);

		const worker = new Worker(blobURL)

		worker.addEventListener("message", (e) => {
			done = true
			dataURL = e.data
		})

		worker.postMessage(blob)

		while (done) {
			Const.sleep(100)
		}

		return dataURL
	}

	private static getWorkerURL() {
		let entire = this.workerScript.toString(),
			body = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"))

		return URL.createObjectURL(
			new Blob([body])
		)
	}

	private static workerScript() {
		onmessage = (ev) => {
			const dataURL = new FileReaderSync().readAsDataURL(ev.data);
			postMessage(dataURL);
		}
	}

}
