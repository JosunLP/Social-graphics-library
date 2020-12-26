/**
 * Const
 */
export declare class Const {
    /**
     * Empty  of const
     */
    static readonly empty = "empty";
    /**
     * Render frame of const
     */
    static readonly renderFrame = "renderFrame";
    /**
     * Sleep time of const
     */
    static readonly sleepTime = 1000;
    static readonly urlStorageKey = "sglImageUrl";
    /**
     * Sleeps const
     * @param milliseconds
     */
    static sleep(milliseconds: number): void;
    /**
     * Checks blob state
     * @param blob
     * @returns true if blob state
     */
    static checkBlobState(blob: Blob): boolean;
}
