/**
 * Info
 */
export class Info {

	//#region vars
	public version: string

	public author: string

	public license: string

	public repository: string

	public homepage: string

	public install: string
	//#endregion

	/**
	 * Creates an instance of info.
	 */
	constructor() {
		this.version = this._version
		this.author = this._author
		this.license = this._license
		this.repository = this._repository
		this.homepage = this._homepage
		this.install = this._install
	}

	//#region const
	/**
	 * Version  of info
	 */
	private readonly _version: string = "1.5.12"

	/**
	 * Author  of info
	 */
	private readonly _author: string = "josunlp"

	/**
	 * License  of info
	 */
	private readonly _license: string = "MIT"

	/**
	 * Repository  of info
	 */
	private readonly _repository: string = "https://github.com/JosunLP/Social-graphics-library"

	/**
	 * Repository  of info
	 */
	private readonly _homepage: string = "https://social-graphics-library.net/"

	/**
	 * Install  of info
	 */
	private readonly _install: string = "npm i social-graphics-library"
	//#endregion

}
