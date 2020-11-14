export class Twitch_Template {

	//#region setup
	/**
	 * Width  of twitch template
	 */
	static readonly width: number = 1920;

	/**
	 * Height  of twitch template
	 */
	static readonly height: number = 480;
	//#endregion

	//#region template
	/**
	 * Templates twitch template
	 * @param teamName
	 * @param playerName
	 * @returns template
	 */
	static template(teamName: string, playerName:string): string {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 1920 480">\n' +
			'  <defs/>\n' +
			'  <path fill="#e3e5e8" d="M0 0h1920v480H0z"/>\n' +
			'  <g fill="#2e4263">\n' +
			'    <path d="M688.502 302.716c-.001 0-.002 0-.004-.001-.561-.2-1.283-.434-2.141-.664-2.702-.726-5.491-1.094-8.291-1.094-4.552 0-8.93.985-13.013 2.929-2.569 1.005-4.884 2.492-6.882 4.418-4.123 3.975-6.394 9.309-6.394 15.019 0 2.022.289 3.978.828 5.828-.599.603-1.198 1.241-1.794 1.912h-.001c-.698.788-1.391 1.621-2.069 2.503-.018-.04-.035-.081-.053-.122-1.356-3.206-2.044-6.612-2.044-10.121 0-3.509.688-6.914 2.044-10.121 1.31-3.097 3.184-5.877 5.571-8.264 2.387-2.387 5.167-4.261 8.264-5.571 3.206-1.356 6.612-2.044 10.121-2.044 3.509 0 6.915.688 10.121 2.044 2.055.87 3.979 1.993 5.737 3.349z"/>\n' +
			'    <path d="M672.644 344.19c-6.349 0-12.044-2.85-15.873-7.337l-.001-.001 3.939-2.474h.001c.759.845 1.592 1.59 2.491 2.229 1.663 1.18 3.603 2.029 5.768 2.524 1.294.296 2.579.447 3.818.447 1.454 0 2.89-.207 4.27-.614 1.381-.408 2.745-1.029 4.054-1.845 1.373-.856 2.587-1.881 3.607-3.044 1.019-1.165 1.875-2.502 2.542-3.975.666-1.471 1.107-2.99 1.311-4.513.154-1.148.176-2.323.068-3.508-1.459 5.02-4.973 7.825-7.766 9.319-2.848 1.522-5.488 2.01-6.218 2.122v.003l-.115.015-.011.011-.085.001c-.146.016-1.276.139-2.124.139-.154 0-.293-.004-.411-.012-1.575-.11-3.041-.545-4.355-1.293l-.017-.011-.017-.013c-.392-.334-.585-.708-.576-1.113.013-.566.436-1.009.618-1.174l4.293-2.696.043-.027 11.284-7.036.054-.034.335-.209 4.015-2.503-.002-.005.148-.092 2.099-1.311.328-.205.006-.004.007-.003c.249-.134.626-.293 1.012-.293.384 0 .904.156 1.202.905l.003.01c.011.03.035.105.062.188.038.119.09.28.107.324l.003.011c.63 2.01.95 4.107.95 6.23 0 11.506-9.361 20.867-20.867 20.867zm23.956-30.988c-.492-1.164-1.072-2.298-1.723-3.369-.004-.004-.006-.009-.009-.014-.039-.064-.078-.128-.118-.192-.002-.002-.003-.005-.005-.008-.028-.045-.056-.089-.084-.134-.464-.706-1.112-1.063-1.927-1.063-.819 0-1.639.352-2.185.65l-.578.356c-.002.001-.003.002-.003.002l-.003.002-.004.002-3.363 2.074-.552.34v.001l-.009.004-1.248.77-.159.099-.043-.048-.013-.015-.068-.076c-1.076-1.204-2.315-2.216-3.683-3.01-1.368-.794-2.905-1.392-4.567-1.778-1.291-.3-2.574-.451-3.815-.451-1.452 0-2.89.208-4.274.618-1.386.411-2.757 1.036-4.076 1.859-1.867 1.164-3.414 2.596-4.599 4.257-1.186 1.661-2.045 3.599-2.552 5.761-.459 1.953-.576 3.871-.349 5.712 1.043-.844 2.038-1.578 2.944-2.206.146-.1.289-.198.429-.293 1.011-.682 1.898-1.225 2.608-1.635.129-.611.316-1.218.559-1.817.832-2.044 2.195-3.666 4.05-4.823 1.639-1.022 3.439-1.54 5.349-1.54.251 0 .508.009.764.026 1.233.086 2.401.372 3.474.848l.014.007.013.009c.872.545 1.329 1.106 1.356 1.669.01.205-.037.405-.138.596-.108.206-.279.401-.51.579l-.006.004-.013.009-.4.25-11.227 7-.244.152c-.001 0-.001.001-.002.002-.008.005-.016.01-.024.014-2.96 1.854-5.517 3.77-7.709 5.638-1.312 1.116-2.492 2.216-3.549 3.274-1.191 1.191-2.226 2.33-3.115 3.384-.173.204-.34.403-.501.6-.59.721-1.11 1.396-1.564 2.013-.453.618-.84 1.178-1.164 1.669-.795 1.203-1.213 1.989-1.314 2.184 0 .002-.001.003-.002.004-.013.026-.02.04-.022.043l5.685-3.571.033-.02.012-.008c.289.359.588.712.898 1.057.318.354.646.7.984 1.039 2.387 2.387 5.167 4.261 8.264 5.571 3.206 1.356 6.612 2.044 10.121 2.044 3.509 0 6.915-.688 10.121-2.044 3.097-1.31 5.877-3.184 8.264-5.571 2.387-2.387 4.261-5.167 5.571-8.264 1.356-3.206 2.044-6.612 2.044-10.121 0-3.509-.688-6.914-2.044-10.121z"/>\n' +
			'  </g>\n' +
			'  <g fill="#2e4263" font-size="60.109">\n' +
			'    <text font-family="\'BremenBT-Bold\',\'Bremen Bd BT\',fantasy" transform="translate(923.172 338.537) scale(.8034)">\n' +
			'      /\n' +
			'    </text>\n' +
			'    <text x="15.321" font-family="\'Arial-Black\',\'Arial\',sans-serif" font-weight="900" transform="translate(923.172 338.537) scale(.8034)">\n' +
			teamName +
			'    </text>\n' +
			'  </g>\n' +
			'  <path fill="#2e4263" fill-rule="nonzero" d="M778.569 304.836c-.851-3.203-3.357-5.725-6.539-6.581-5.767-1.555-28.894-1.555-28.894-1.555s-23.126 0-28.894 1.555c-3.182.856-5.688 3.378-6.538 6.581-1.546 5.805-1.546 17.916-1.546 17.916s0 12.112 1.546 17.917c.85 3.202 3.356 5.619 6.538 6.475 5.768 1.556 28.894 1.556 28.894 1.556s23.127 0 28.894-1.556c3.182-.856 5.688-3.273 6.539-6.475 1.545-5.805 1.545-17.917 1.545-17.917s0-12.111-1.545-17.916zm-42.997 28.913v-21.993l19.33 10.997-19.33 10.996zm80.551-24.384c-7.378 0-13.329 5.951-13.329 13.329 0 7.378 5.951 13.329 13.329 13.329 7.378 0 13.329-5.951 13.329-13.329 0-7.378-5.951-13.329-13.329-13.329zm0 21.995c-4.768 0-8.666-3.886-8.666-8.666 0-4.779 3.887-8.666 8.666-8.666 4.78 0 8.666 3.887 8.666 8.666 0 4.78-3.898 8.666-8.666 8.666zm16.984-22.54c0 1.728-1.392 3.109-3.109 3.109-1.729 0-3.109-1.392-3.109-3.109s1.392-3.109 3.109-3.109 3.109 1.392 3.109 3.109zm8.828 3.155c-.197-4.165-1.149-7.854-4.2-10.893-3.039-3.039-6.728-3.991-10.893-4.199-4.292-.244-17.157-.244-21.449 0-4.154.197-7.843 1.148-10.894 4.187-3.051 3.04-3.99 6.729-4.199 10.894-.244 4.292-.244 17.157 0 21.449.197 4.165 1.148 7.854 4.199 10.893 3.051 3.04 6.729 3.991 10.894 4.2 4.292.243 17.157.243 21.449 0 4.165-.197 7.854-1.149 10.893-4.2 3.04-3.039 3.991-6.728 4.2-10.893.243-4.292.243-17.146 0-21.438zm-5.545 26.044c-.905 2.273-2.657 4.025-4.942 4.942-3.423 1.357-11.543 1.044-15.325 1.044s-11.914.301-15.324-1.044c-2.274-.905-4.026-2.657-4.942-4.942-1.358-3.422-1.044-11.543-1.044-15.325s-.302-11.914 1.044-15.324c.905-2.274 2.656-4.026 4.942-4.942 3.422-1.358 11.542-1.044 15.324-1.044s11.914-.302 15.325 1.044c2.273.905 4.025 2.656 4.942 4.942 1.357 3.422 1.044 11.542 1.044 15.324s.313 11.914-1.044 15.325zm74.89-28.36c.04.569.04 1.138.04 1.706 0 17.347-13.203 37.335-37.334 37.335-7.434 0-14.341-2.154-20.15-5.891 1.056.122 2.072.162 3.169.162 6.134 0 11.781-2.071 16.29-5.606-5.768-.122-10.603-3.9-12.268-9.1.812.122 1.625.203 2.478.203 1.178 0 2.356-.162 3.453-.446-6.013-1.219-10.522-6.501-10.522-12.879v-.162c1.747.975 3.778 1.584 5.931 1.665-3.534-2.356-5.85-6.378-5.85-10.928 0-2.437.65-4.672 1.788-6.622 6.459 7.963 16.168 13.163 27.056 13.732-.203-.975-.325-1.991-.325-3.007 0-7.231 5.85-13.121 13.122-13.121 3.778 0 7.19 1.584 9.587 4.143 2.966-.568 5.81-1.665 8.328-3.168-.975 3.047-3.047 5.606-5.768 7.231 2.64-.284 5.2-1.016 7.556-2.031-1.787 2.6-4.022 4.915-6.581 6.784z"/>\n' +
			'  <text fill="#2e4263" font-family="\'Arial-BoldMT\',\'Arial\',sans-serif" font-size="182.371" font-weight="700" transform="translate(644.147 264.636) scale(.84548)">\n' +
			playerName +
			'  </text>\n' +
			'  <path fill="#2d8ec9" d="M434.95271231 244.8341659c-1.7943567 6.48575028-2.75336519 13.3204175-2.75336519 20.37726273 0 17.28832154 5.75610338 33.243062 15.45240267 46.04677456-46.84425502-7.48734717-82.68551678-48.1197517-82.68551678-97.05689266 0-54.2482213 44.0427085-98.2909298 98.29082717-98.2909298 52.88144178 0 96.06504493 41.85089435 98.20780547 94.20860153-13.72731625-13.18187695-32.36615161-21.2890648-52.88400735-21.2890648-4.19008203 0-8.30217085.33814156-12.3059928.98825593-5.75251159-18.39561973-22.93769738-31.76160169-43.21952107-31.76160169-24.98758443 0-45.27392352 20.28633909-45.27392352 45.27392352 0 18.55263236 11.18422482 34.51404328 27.1712914 41.50367068z"/>\n' +
			'  <path fill="#2d8ec9" fill-rule="nonzero" d="M393.04126244 347.85995768l13.67594056-.84660584c.32561763 2.2141999.91172937 3.90741158 1.82345874 5.07963506 1.4978411 1.88858227 3.58179396 2.86543516 6.3821056 2.86543516 2.01882931 0 3.64691747-.5209882 4.75401742-1.4978411 1.10709995-.91172937 1.62808817-2.08395285 1.62808817-3.32129985 0-1.237347-.52098822-2.27932343-1.56296464-3.25617633-1.04197642-.9768529-3.51667043-1.82345874-7.35895849-2.67006458-6.31698206-1.43271758-10.87562892-3.32129985-13.5456935-5.6657468-2.73518811-2.40957048-4.03765864-5.4052527-4.03765864-9.05217018 0-2.34444695.65123526-4.62377038 2.08395284-6.77284675 1.36759406-2.14907637 3.4515469-3.77716454 6.25185854-5.01451154 2.80031164-1.237347 6.57747618-1.82345874 11.46174066-1.82345874 5.9262409 0 10.48488776 1.10709995 13.61081703 3.32129985 3.12592927 2.2141999 5.01451154 5.73087033 5.60062328 10.55001129l-13.61081703.84660584c-.32561764-2.14907637-1.10709995-3.64691748-2.27932343-4.62377038-1.17222348-.91172937-2.73518811-1.43271758-4.75401743-1.43271758-1.69321169 0-2.9305587.39074116-3.77716454 1.10709995-.84660584.7163588-1.30247052 1.56296463-1.30247052 2.53981753 0 .78148232.32561763 1.43271758 1.04197642 2.01882932.71635879.65123527 2.27932342 1.17222348 4.81914096 1.75833522 6.31698206 1.30247052 10.81050539 2.67006458 13.5456935 4.10278216 2.73518811 1.36759406 4.6888939 3.12592927 5.99136443 5.1447586 1.237347 2.08395284 1.82345874 4.36327627 1.82345874 6.9030938 0 2.99568221-.84660584 5.73087033-2.474694 8.27068786-1.62808816 2.53981753-3.97253512 4.4283998-6.9030938 5.73087032-2.99568222 1.30247053-6.70772323 1.9537058-11.26637008 1.9537058-7.94507023 0-13.41544645-1.49784111-16.4762522-4.55864685-3.06080574-3.06080575-4.75401743-6.96821733-5.14475859-11.65711124zM465.99060167 346.4272401v-9.70340544h22.27224605v19.86267557c-4.29815275 2.93055869-8.01019376 4.88426448-11.3314936 5.9262409-3.25617633 1.04197643-7.16358792 1.56296464-11.65711124 1.56296464-5.53549975 0-10.02902308-.91172937-13.48056998-2.80031164-3.51667043-1.88858227-6.18673501-4.6888939-8.1404408-8.46605844-1.88858227-3.712041-2.86543517-8.01019375-2.86543517-12.82933471 0-5.07963506 1.04197642-9.50803486 3.12592927-13.2851994 2.08395285-3.77716453 5.20988212-6.57747617 9.24754076-8.53118196 3.12592927-1.49784111 7.42408201-2.27932343 12.76421118-2.27932343 5.1447586 0 8.98704665.45586469 11.52686419 1.36759406 2.53981753.9768529 4.6888939 2.40957048 6.38210559 4.36327627 1.69321169 1.9537058 2.93055869 4.4283998 3.77716453 7.48920554l-13.87131113 2.474694c-.58611174-1.7583352-1.56296464-3.12592926-2.9305587-4.03765863-1.36759405-.9768529-3.12592926-1.43271759-5.2098821-1.43271759-3.1910528 0-5.66574681 1.10709995-7.55432908 3.32129985-1.88858227 2.14907638-2.80031164 5.6657468-2.80031164 10.41976424 0 5.01451153.91172937 8.59630549 2.80031164 10.81050539 1.88858227 2.14907637 4.55864685 3.1910528 7.94507023 3.1910528 1.62808816 0 3.12592927-.19537058 4.62377038-.65123527 1.43271758-.45586468 3.12592927-1.30247053 5.01451154-2.40957048v-4.36327627h-9.63828192zM496.79484373 316.6657885h14.39229934v35.1667043h22.53274016v11.46174065h-36.9250395v-46.62844494z"/>\n' +
			'</svg>';
	}
	//#endregion
}
