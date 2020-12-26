import { TemplateInjector } from "./templateInjector";
/**
 * Generator
 */
export declare class Generator {
    /**
     * Runs generator
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     */
    static run(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, templateInjector: TemplateInjector, generateLink?: boolean): Promise<void>;
}
