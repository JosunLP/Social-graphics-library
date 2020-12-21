/**
 * Image renderer
 */
export declare class ImageRenderer {
    /**
     * Temp storage of image renderer
     */
    static tempStorage: string;
    /**
     * Renders image
     * @param svgString
     * @param width
     * @param height
     * @param imgMode
     */
    static renderImage(svgString: string, width: number, height: number, imgMode: string): Promise<void>;
    /**
     * Switchs image mode
     * @param canvas
     * @param data
     * @param imgMode
     * @param width
     * @param height
     * @param xml
     * @param result
     * @param parser
     * @param inlineSVG
     * @returns image mode
     */
    private static switchImageMode;
}
