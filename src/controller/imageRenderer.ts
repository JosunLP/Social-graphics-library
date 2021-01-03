import { Const } from "../class/const";
import { ErrorRespose } from "../class/error";
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

				console.warn(ErrorRespose.deprecation);
				return await this.handleBlob(imgMode, canvas);


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
			workerURL: string = this.getWorkerURL(),
			dataURL: string = ""
			// fileReader = new FileReader()

		const worker = new Worker(workerURL)

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

		// dataURL = await new Promise(() => {

		// 	console.log("Pomise");

		// 	let result

		// 	fileReader.onloadend = () => {
		// 		result = <>fileReader.result
		// 		const temp = document.createElement("div")
		// 		temp.innerHTML = result;
		// 	}

		// 	fileReader.readAsDataURL(blob)

		// 	if (typeof (result) !== typeof (Const._defaultString)) {
		// 		throw new Error(ErrorRespose.wrongType);
		// 	}

		// 	return result

		// })

		dataURL = await new Promise(() => {

			let result: string = Const._defaultString

			worker.onerror = err => { throw new Error(err.message) }

			worker.onmessage = msg => {
				result = msg.data
			}

			worker.postMessage(blob)

			while (true) {

				if (result !== Const._defaultString) {

					break;

				}

			}

			return result

		})

		worker.terminate()

		return dataURL
	}

	/**
	 * Gets worker url
	 * @returns worker url
	 */
	private static getWorkerURL(): string {

		let body = "this.addEventListener('message', (ev) => {const dataURL = new FileReaderSync().readAsDataURL(ev.data);postMessage(dataURL);})"

		return URL.createObjectURL(
			new Blob([body])
		)
	}

}
