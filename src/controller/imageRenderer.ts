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

		const sharp = require('sharp');

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image()
			;

		switch (imgMode) {
			case 'svg':
				return data;

			case 'png':
				return sharp(this.renderImgObj(img, data, width, height)).png()

			case 'jpeg':
				return sharp(this.renderImgObj(img, data, width, height)).jpg()

			case 'webp':
				return sharp(this.renderImgObj(img, data, width, height)).webp()

			default:
				data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(False_Template.template());
				width = False_Template.width;
				height = False_Template.height;
				return sharp(this.renderImgObj(img, data, width, height)).png()
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
