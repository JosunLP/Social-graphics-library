import { False_Template } from "../template/false.template";
import { createCanvas, loadImage } from "canvas"

/**
 * Image renderer
 */
export class ImageRenderer {

	/**
	 * Renders image
	 * @param svgString
	 * @param width
	 * @param height
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
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
			img = new Image()
			;

		const canvas = createCanvas(width, height)
		const ctx = canvas.getContext('2d')

		img.onload = async () => {
			loadImage(data).then((image) => {
				ctx.drawImage(image, 0, 0, width, height)
			})
		}

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

				ctx.drawImage(data)

				return canvas.toDataURL("image/png")
		}
	}

	// /**
	//  * Renders img obj
	//  * @param img
	//  * @param data
	//  * @param width
	//  * @param height
	//  * @returns img obj
	//  */
	// private static renderImgObj(img: HTMLImageElement, data: string, width: number, height: number): HTMLImageElement {
	// 	img.setAttribute('src', data);
	// 	img.setAttribute('width', width.toString());
	// 	img.setAttribute('height', height.toString());
	// 	return img;
	// }

}
