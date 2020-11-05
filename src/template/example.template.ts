import "../model/template.ts"
import Template from "../model/templateBase";

export class Example_Template extends Template {

	//#region setup
	/**
	 * Width  of example template
	 */
	static width: number = 1000;

	/**
	 * Height  of example template
	 */
	static height: number = 1000;
	//#endregion

	//#region template
	/**
	 * Templates example template
	 * @returns template
	 */
	static template(): string {
		return 'svg string';
	}
	//#endregion
}
