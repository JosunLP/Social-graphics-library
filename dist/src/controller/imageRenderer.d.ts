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
     * @returns image
     */
    static renderImage(svgString: string, width: number, height: number, imgMode: string): Promise<string>;
    /**
     * Renders image url
     * @param imgMode
     * @param data
     * @param canvas
     * @param xml
     * @param result
     * @param parser
     * @param inlineSVG
     * @param width
     * @param height
     * @param img
     * @returns image url
     */
    private static renderImageUrl;
    /**
     * Blobs to data url
     * @param blob
     * @param callback
     * @returns to data url
     */
    private static blobToDataURL;
}
