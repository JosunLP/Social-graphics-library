import { False_Template } from "../template/false.template";
import { Canvas, createCanvas } from "canvas"

/**
 * Image renderer
 */
export class ImageRenderer {

	/**
	 * Temp storage of image renderer
	 */
	public static tempStorage = "img";

	/**
	 * Renders image
	 * @param svgString
	 * @param width
	 * @param height
	 * @param imgMode
	 */
	public static async renderImage(svgString: string, width: number, height: number, imgMode: string): Promise<void> {

		let xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, 'text/xml'),
			inlineSVG = result.getElementsByTagName('svg')[0]

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			canvas: Canvas | HTMLCanvasElement
			;

		if (typeof window === "undefined") {

			canvas = createCanvas(width, height)

			const ctx = canvas.getContext('2d')

			img.onload = async () => {
				ctx.drawImage(img, 0, 0)

				let store = this.switchImageMode(canvas, data, imgMode, width, height, xml, result, parser, inlineSVG)
				sessionStorage.setItem(this.tempStorage, store)
			}

			img.onerror = err => { throw err }

			img.src = data
			img.width = width
			img.height = height

			img.dispatchEvent(new Event('load'))

		} else {
			const cElement = document.createElement("canvas"),
			renderFrame = "renderFrame"

			cElement.id = renderFrame
			cElement.width = width
			cElement.height = height
			cElement.style.display = "hidden"

			document.getElementsByTagName("body")[0].appendChild(cElement)

			canvas = <HTMLCanvasElement>document.getElementById(renderFrame)

			const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

			img.src = data
			img.width = width
			img.height = height

			img.onload = async () => {

				ctx.drawImage(img, 0, 0)

				let store = this.switchImageMode(canvas, data, imgMode, width, height, xml, result, parser, inlineSVG)
				sessionStorage.setItem(this.tempStorage, store)

			}

			img.onerror = err => { throw err }

			if (document.dispatchEvent(new Event('load'))) {
				console.log("Load event...");
			} else {
				throw new Error("Firing load event failed!");
			}

			canvas.remove()
		}

		console.log(canvas.toDataURL("image/png"))

	}

	/**
	 * Switchs image mode
	 * @param canvas
	 * @param data
	 * @param imgMode
	 * @param width
	 * @param height
	 * @param xml
	 * @param result
	 * @param parser
	 * @param inlineSVG
	 * @returns image mode
	 */
	private static switchImageMode(canvas: Canvas | HTMLCanvasElement, data: string, imgMode: string, width: number, height: number, xml: string, result: XMLDocument, parser: DOMParser, inlineSVG: SVGSVGElement): string {
		switch (imgMode) {
			case 'svg':
				return data

			case 'png':
				return canvas.toDataURL("image/png")

			case 'jpeg':
				return canvas.toDataURL("image/jpeg", 1.0)

			case 'webp':
				return canvas.toDataURL("image/webp")

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

}
