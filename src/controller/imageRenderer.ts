import { False_Template } from "../template/false.template";
import { Canvas, createCanvas } from "canvas"
import { Const } from "../model/const";
import { domain } from "process";

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
	public static renderImage(svgString: string, width: number, height: number, imgMode: string): string {

		let xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, 'text/xml'),
			inlineSVG = result.getElementsByTagName('svg')[0],
			returnString: string = Const.empty

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			cEntity.canvas: Canvas | HTMLCanvasElement

		if (typeof window === "undefined") {

			canvas = createCanvas(width, height)

			const ctx = canvas.getContext('2d')

			img.onload = async () => {
				ctx.drawImage(img, 0, 0)

				returnString = this.switchImageMode(canvas, data, imgMode, width, height, xml, result, parser, inlineSVG)

			}

			img.onerror = err => { throw err }

			img.src = data
			img.width = width
			img.height = height

			img.dispatchEvent(new Event('load'))

			return returnString

		} else {
			cEntity.canvas = document.createElement("canvas")

			canvas.id = Const.renderFrame
			canvas.width = width
			canvas.height = height

			const ctx = <CanvasRenderingContext2D>canvas.getContext('2d')

			img.src = data
			img.width = width
			img.height = height

			img.onload = async () => {

				ctx.drawImage(img, 0, 0)

				returnString = this.switchImageMode(canvas, data, imgMode, width, height, xml, result, parser, inlineSVG)

			}

			img.onerror = err => { throw err }

			img.dispatchEvent(new Event('load'))

			return returnString
		}

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
