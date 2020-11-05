import Template from "../model/templateBase";
export declare class Elevate_Template extends Template {
    /**
     * Width  of elevate template
     */
    static readonly width: number;
    /**
     * Height  of elevate template
     */
    static readonly height: number;
    /**
     * Templates elevate template
     * @param teamName
     * @param playerName
     * @returns template
     */
    static template(teamName: string, playerName: string): string;
}
