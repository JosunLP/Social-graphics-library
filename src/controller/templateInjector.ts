import { ErrorRespose } from "../class/error";
import { ImportTemplate } from "../model/importTemplate";

/**
 * Template injector
 */
export class TemplateInjector {

	/**
	 * Inject list of template injector
	 */
	private injectList: Array<ImportTemplate>

	/**
	 * Creates an instance of template injector.
	 */
	constructor() {
		this.injectList = []
	}

	/**
	 * Injectors template injector
	 * @param importedTemplates
	 */
	public injector(importedTemplates: Array<ImportTemplate>): void {

		importedTemplates.forEach(template => {
			if (!template.callName || !template.template) {
				throw new Error(ErrorRespose.wrongTemplateProperty);
			}
			this.injectList.push(template)
		})

	}

	/**
	 * Calls template injector
	 * @param templateName
	 * @returns call
	 */
	public call(templateName: string): ImportTemplate | null {

		let result: ImportTemplate | null = null;

		this.injectList.forEach( template => {
			if ( template.callName == templateName ) {
				result = template
			}
		});

		return result;
	}
}
