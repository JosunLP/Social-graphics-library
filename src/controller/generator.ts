import { Elevate_Template } from "../template/elevate-title.template";
import { False_Template } from "../template/false.template";
import { Logo_Template } from "../template/logo.template";
import { Twitch_Template } from "../template/twitch-title.template";
import { Twitter_Template } from "../template/twitter-title.template";
import { Youtube_Template } from "../template/youtube-title.template";
import { ImageRenderer } from "./imageRenderer";
import { Template } from "../model/templateBase";
import { TemplateInjector } from "./templateInjector";
import { StringCleaner } from "./stringCleaner";
import { Const } from "../model/const";

/**
 * Generator
 */
export class Generator {

	/**
	 * Runs generator
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public static run(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, templateInjector: TemplateInjector, generateLink?: boolean): void {

		let svgString: string,
			width: number,
			height: number,
			tempTemplate: Template,
			container: HTMLDivElement;

		if (teamName === "") {
			teamName = "Community";
		}

		if (playerName === "") {
			playerName = "Player";
		}

		teamName = StringCleaner.run(teamName);
		playerName = StringCleaner.run(playerName);

		switch (mode) {
			case "youtube-title":
				svgString = Youtube_Template.template(teamName, playerName);
				width = Youtube_Template.width;
				height = Youtube_Template.height;
				break;

			case "twitch-title":
				svgString = Twitch_Template.template(teamName, playerName);
				width = Twitch_Template.width;
				height = Twitch_Template.height;
				break;

			case "twitter-title":
				svgString = Twitter_Template.template(teamName, playerName);
				width = Twitter_Template.width;
				height = Twitter_Template.height;
				break;

			case "elavate-title":
				svgString = Elevate_Template.template(teamName, playerName);
				width = Elevate_Template.width;
				height = Elevate_Template.height;
				break;

			case "logo":
				svgString = Logo_Template.template(playerName);
				width = Logo_Template.width;
				height = Logo_Template.height;
				break;

			default:
				svgString = False_Template.template();
				width = False_Template.width;
				height = False_Template.height;
				break;
		}

		if (templateInjector.call(mode) !== null) {
			tempTemplate = templateInjector.call(mode)!.template
			svgString = tempTemplate.template(teamName, playerName)
			width = tempTemplate.width
			height = tempTemplate.height
		}

		const imgDataUrl = ImageRenderer.renderImage(svgString, width, height, imgMode)

		if (imgDataUrl === Const.empty) {
			throw new Error("The rendering process has failed!");
		}

		try {
			container = <HTMLDivElement>document.getElementById(containerId);
		} catch (error) {
			throw new Error("The container "+ containerId +" is not defined!");
		}

		let img2 = new Image();
		width = width / 4;
		height = height / 4;
		img2.setAttribute('src', imgDataUrl);
		img2.setAttribute('width', width.toString());
		img2.setAttribute('height', height.toString());

		container.innerHTML = "";

		container.appendChild(img2);

		if (generateLink) {

			let downloadLink = document.createElement('a')

			downloadLink.setAttribute('href', imgDataUrl);
			downloadLink.setAttribute('download', 'image.' + imgMode);
			downloadLink.innerHTML = 'Download Link';

			container.appendChild(downloadLink);
		}

	}
}
