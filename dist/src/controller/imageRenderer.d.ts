/**
 * Image renderer
 */
export declare class ImageRenderer {
    /**
     * Renders image
     * @param svgString
     * @param width
     * @param height
     * @param imgMode
     */
    static renderImage(svgString: string, width: number, height: number, imgMode: string): string;
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
