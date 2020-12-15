/**
 * Image renderer
 */
export declare class ImageRenderer {
    /**
     * Renders image
     * @param svgString
     * @param width
     * @param height
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     * @returns image
     */
    static renderImage(svgString: string, width: number, height: number, imgMode: string): string;
    /**
     * Renders img obj
     * @param img
     * @param data
     * @param width
     * @param height
     * @returns img obj
     */
    private static renderImgObj;
}
