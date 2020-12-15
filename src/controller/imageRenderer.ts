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
	public static renderImage(svgString: string, width: number, height: number, containerId: string, imgMode: string): string {

		let xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, 'text/xml'),
			inlineSVG = result.getElementsByTagName('svg')[0],
			exportString: string = "empty";

		const jsdom = require("jsdom");
		const { JSDOM } = jsdom;
		const vdom = new JSDOM(`<!DOCTYPE html><body><div id="`+ containerId +`"></div><body>`);
		const vdocument = vdom.window;

		inlineSVG.setAttribute('width', width.toString());
		inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			canvas = vdocument.createElement('canvas'),
			imgAtr: string,
			container = vdocument.getElementById(containerId)!
			;

		switch (imgMode) {
			case 'svg':
				return data;

			case 'png':
				imgAtr = 'image/png';
				break;

			case 'jpeg':
				imgAtr = 'image/jpeg';
				break;

			case 'webp':
				imgAtr = 'image/webp';
				break;

			default:
				data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(False_Template.template());
				width = False_Template.width;
				height = False_Template.height;
				imgAtr = 'image/png';
				break;
		}

		canvas.setAttribute('width', width.toString());
		canvas.setAttribute('height', height.toString());
		canvas.setAttribute('id', 'render-canvas' + containerId);
		canvas.setAttribute('display', 'none');

		img.setAttribute('src', data);
		img.setAttribute('width', width.toString());
		img.setAttribute('height', height.toString());

		try {
			container.appendChild(canvas);
		} catch (error) {
			throw new Error("The Container " + containerId + " is not defined!");
		}

		let renderCanvas = <HTMLCanvasElement>vdocument.getElementById('render-canvas' + containerId)!;

		let ctx: CanvasRenderingContext2D | null;
		let imgDataUrl: string;

		ctx = renderCanvas.getContext('2d');

		img.onload = async () => {

			ctx!.drawImage(img, 0, 0);

			imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);

			exportString = imgDataUrl;
		}

		dispatchEvent(new Event('load'));

		return exportString;
	}

}
