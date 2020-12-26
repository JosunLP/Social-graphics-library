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

		if (typeof window === "undefined") {

			canvas = new OffscreenCanvas(width, height)

			img.src = data
			img.width = width
			img.height = height

			img.onerror = err => { throw err }

			img.dispatchEvent(new Event('load'))

			return this.renderImageUrl(imgMode, data, canvas, xml, result, parser, inlineSVG, width, height, img)

		} else {

			canvas = new OffscreenCanvas(width, height)

			img.src = data
			img.width = width
			img.height = height

			img.onerror = err => { throw err }

			return this.renderImageUrl(imgMode, data, canvas, xml, result, parser, inlineSVG, width, height, img)

		}
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
	private static async renderImageUrl(imgMode: string, data: string, canvas: OffscreenCanvas, xml: string, result: XMLDocument, parser: DOMParser, inlineSVG: SVGSVGElement, width: number, height: number, img: HTMLImageElement): string {

		const ctx = <OffscreenCanvasRenderingContext2D>canvas.getContext('2d')
		let blob: Blob,
			url

		ctx.drawImage(img, 0, 0, width, height)

		switch (imgMode) {
			case 'svg':
				return data

			case 'png':

				blob = await canvas.convertToBlob({
					type: "image/png",
					quality: 1
				})

				url = this.blobToDataURL(blob, (e:string): string => {
					return e
				})

				return url;

			case 'jpeg':

				blob = canvas.convertToBlob({
					type: "image/jpeg",
					quality: 1
				})

				url = <string>this.createObjectURL(blob)

				return url

			case 'webp':

				blob = canvas.convertToBlob({
					type: "image/webp",
					quality: 1
				})

				url = <string>this.createObjectURL(blob)

				return url

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

	private static blobToDataURL(blob: Blob, callback: Function): string | void {
		let a = new FileReader();
		a.onload = function (e) { callback(e.target!.result); }
		a.readAsDataURL(blob);
	}
}
