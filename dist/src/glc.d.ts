import { Call } from "./model/call";
import { ImportTemplate } from "./model/importTemplate";
/**
 * Social graphics library
 */
export default class SocialGraphicsLibrary {
    /**
     * Creates an instance of social graphics library.
     */
    constructor();
    private templateInject;
    /**
     * Generators social graphics library
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     */
    generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void;
    /**
     * Multis generator
     * @param teamName
     * @param playerName
     * @param calls
     */
    multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void;
    /**
     * Infos social graphics library
     * @returns info
     */
    static info(): object;
    /**
     * Injects templates into social graphics library
     * @param importedTemplates
     */
    inject(importedTemplates: Array<ImportTemplate>): void;
    /**
     * Version of social graphics library
     */
    static readonly VERSION: string;
}
