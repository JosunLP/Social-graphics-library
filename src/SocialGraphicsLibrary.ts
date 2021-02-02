import { Call } from "./model/call";
import { Info } from "./class/info";
import { Generator } from "./controller/generator";
import { TemplateInjector } from "./controller/templateInjector";
import { ImportTemplate } from "./model/importTemplate";

/**
 * Social graphics library
 */
export default class SocialGraphicsLibrary {

	//#region properties
	private readonly templateInject: TemplateInjector;
	//#endregion

	/**
	 * Creates an instance of social graphics library.
	 */
	constructor() {
		this.templateInject = new TemplateInjector()
	}

	//#region generator
	/**
	 * Generators social graphics library
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void {

		Generator.run(teamName, playerName, mode, containerId, imgMode, this.templateInject, generateLink);

	}
	//#endregion

	//#region multiGenerator
	/**
	 * Multis generator
	 * @param teamName
	 * @param playerName
	 * @param calls
	 */
	public multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void {

		calls.forEach(async element => {
			this.generator(teamName, playerName, element.mode, element.containerId, element.imgMode, element.generateLink);
		});

	}
	//#endregion

	//#region info
	/**
	 * Infos social graphics library
	 * @returns info
	 */
	public static info(): object {

		return { "SGL Info": new Info() }

	}
	//#endregion

	//#region injector
	/**
	 * Injects templates into social graphics library
	 * @param importedTemplates
	 */
	public inject(importedTemplates: Array<ImportTemplate>): void {

		this.templateInject.injector(importedTemplates)

	}
	//#endregion

	//#region version
	/**
	 * Version of social graphics library
	 */
	public static readonly VERSION: string = new Info()._version
	//#endregion
}
