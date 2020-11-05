import Template from "../model/templateBase";
export declare class Twitter_Template extends Template {
    /**
     * Width  of twitter template
     */
    static width: number;
    /**
     * Height  of twitter template
     */
    static height: number;
    /**
     * Templates twitter template
     * @param teamName
     * @param playerName
     * @returns template
     */
    static template(teamName: string, playerName: string): string;
}
