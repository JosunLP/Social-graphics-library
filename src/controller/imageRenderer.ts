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

		const { createCanvas, loadImage } = require('canvas')
		const canvas = createCanvas(width, height)
		const ctx = canvas.getContext('2d')

		loadImage(this.renderImgObj(img, data, width, height)).then((image: HTMLImageElement) => {
			ctx.drawImage(image)
		})

		switch (imgMode) {
			case 'svg':
				return data;

			case 'png':
				return canvas.toDataUrl("image/png", 1.0)

			case 'jpeg':
				return canvas.toDataUrl("image/jpeg", 1.0)

			case 'webp':
				return canvas.toDataUrl("image/webp", 1.0)

			default:
				data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(False_Template.template());
				width = False_Template.width;
				height = False_Template.height;

				loadImage(this.renderImgObj(img, data, width, height)).then((image: HTMLImageElement) => {
					ctx.drawImage(image)
				})

				return canvas.toDataUrl("image/webp", 1.0)
		}
	}

	/**
	 * Renders img obj
	 * @param img
	 * @param data
	 * @param width
	 * @param height
	 * @returns img obj
	 */
	private static renderImgObj(img: HTMLImageElement, data: string, width: number, height: number): HTMLImageElement {
		img.setAttribute('src', data);
		img.setAttribute('width', width.toString());
		img.setAttribute('height', height.toString());
		return img;
	}

}
