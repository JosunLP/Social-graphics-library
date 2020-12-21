import { False_Template } from "../template/false.template";
import { createCanvas } from "canvas"

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
			inlineSVG = result.getElementsByTagName('svg')[0];

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			canvas
			;

		if (typeof window === "undefined") {

			canvas = createCanvas(width, height)

			const ctx = canvas.getContext('2d')

			img.onload = async () => {
				ctx.drawImage(img, 0, 0)
			}

			img.onerror = err => { throw err }

			img.src = data
			img.width = width
			img.height = height

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

			img.onload = async () => {
				ctx.drawImage(img, 0, 0)
			}

			img.onerror = err => { throw err }

			img.src = data
			img.width = width
			img.height = height

			canvas.remove()
		}

		window.dispatchEvent(new Event('load'))

		console.log(canvas.toDataURL("image/png"))

		switch (imgMode) {
			case 'svg':
				return data

			case 'png':
				return canvas.toDataURL("image/png")

			case 'jpeg':
				return canvas.toDataURL("image/jpeg", 1.0)

			case 'webp':
				return canvas.toDataURL("image/png")

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
