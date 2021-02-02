/**
 * Error respose
 */
export class ErrorRespose {

	/**
	 * Prefix  of error respose
	 */
	private static readonly _prefix = "[sgl-error] "

	/**
	 * Blob state of error respose
	 */
	public static readonly blobState = ErrorRespose._prefix + "Blob state is invalide!"

	/**
	 * Deprecation of error respose
	 */
	public static readonly deprecation = ErrorRespose._prefix + "The called attribute or the called method is deprecated!"

	/**
	 * Wrong type of error respose
	 */
	public static readonly wrongType = ErrorRespose._prefix + "The type returned does not match the expected result!"

	/**
	 * Wrong template property of error respose
	 */
	public static readonly wrongTemplateProperty = ErrorRespose._prefix + "One of the injected templates is missing a property!"
}
