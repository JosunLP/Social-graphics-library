/**
 * Const
 */
export class Const {

	/**
	 * Empty  of const
	 */
	public static readonly empty = "empty"

	/**
	 * Render frame of const
	 */
	public static readonly renderFrame = "renderFrame"

	/**
	 * Sleep time of const
	 */
	public static readonly sleepTime = 1000

	public static readonly urlStorageKey = "sglImageUrl"

	/**
	 * Sleeps const
	 * @param milliseconds
	 */
	public static sleep(milliseconds: number): void {
		const start = new Date().getTime();
		for (let i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
				break;
			}
		}
	}

}
