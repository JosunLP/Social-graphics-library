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

	/**
	 * Default string of const
	 */
	public static readonly _defaultString = "DEFAULT"

	/**
	 * Default int of const
	 */
	public static readonly _defaultInt = 42

	/**
	 * Default bool of const
	 */
	public static readonly _defaultBool = false

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
