export class Logo_Template {

	//#region setup
	/**
	 * Width  of logo template
	 */
	static readonly width: number = 1000;

	/**
	 * Height  of logo template
	 */
	static readonly height: number = 1000;
	//#endregion

	//#region template
	/**
	 * Templates logo template
	 * @param playerName
	 * @returns template
	 */
	static template(playerName:string): string {
		return '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 5000 5000">\n' +
			'  <defs/>\n' +
			'  <path fill="#2d8ec9" d="M2134.11693971 2214.50666625c-23.22948693 83.9636016-35.64467454 172.4442324-35.64467454 263.80114797 0 223.81215417 74.51769642 430.35995703 200.04460935 596.1150006-606.4390694-96.93013248-1070.43495151-622.9514682-1070.43495151-1256.48474157 0-702.28976475 570.17064626-1272.46041102 1272.45908248-1272.46041102 684.5956314 0 1243.6444218 541.79573166 1271.38429524 1219.61116938-177.71188557-170.6507061-419.00759982-275.6052081-684.62884485-275.6052081-54.24420654 0-107.4787242 4.37753271-159.31163427 12.79382094-74.47119759-238.14707919-296.94817107-411.18118246-559.5137787-411.18118246-323.48571762 0-586.10978092 262.6240633-586.10978092 586.10978092 0 240.17974233 144.78938539 446.81390016 351.75567772 537.30062334z"/>\n' +
			'  <path fill="#2d8ec9" fill-rule="nonzero" d="M1591.53147875 3548.2661455l177.0468-10.96004c4.2154 28.66472 11.80312 50.5848 23.60624 65.76024 19.39084 24.44932 46.3694 37.09552 82.62184 37.09552 26.13548 0 47.21248-6.74464 61.54484-19.39084 14.33236-11.80312 21.077-26.97856 21.077-42.99708 0-16.01852-6.74464-29.5078-20.23392-42.154-13.48928-12.6462-45.52632-23.60624-95.26804-34.56628-81.77876-18.54776-140.79436-42.99708-175.36064-73.34796-35.40936-31.19396-52.27096-69.97564-52.27096-117.18812 0-30.35088 8.4308-59.85868 26.97856-87.68032 17.70468-27.82164 44.68324-48.89864 80.93568-64.91716 36.25244-16.01852 85.15108-23.60624 148.38208-23.60624 76.72028 0 135.73588 14.33236 176.20372 42.99708 40.46784 28.66472 64.91716 74.19104 72.50488 136.57896l-176.20372 10.96004c-4.2154-27.82164-14.33236-47.21248-29.5078-59.85868-15.17544-11.80312-35.40936-18.54776-61.54484-18.54776-21.92008 0-37.9386 5.05848-48.89864 14.33236-10.96004 9.27388-16.8616 20.23392-16.8616 32.88012 0 10.11696 4.2154 18.54776 13.48928 26.13548 9.27388 8.4308 29.5078 15.17544 62.38792 22.76316 81.77876 16.8616 139.95128 34.56628 175.36064 53.11404 35.40936 17.70468 60.70176 40.46784 77.56336 66.60332 16.01852 26.97856 23.60624 56.48636 23.60624 89.36648 0 38.78168-10.96004 74.19104-32.03704 107.07116-21.077 32.88012-51.42788 57.32944-89.36648 74.19104-38.78168 16.8616-86.83724 25.2924-145.85284 25.2924-102.85576 0-173.67448-19.39084-213.29924-59.0156-39.62476-39.62476-61.54484-90.20956-66.60332-150.91132zM2535.9233485 3529.7183855v-125.61892h288.33336v257.1394c-55.64328 37.9386-103.69884 63.231-146.69592 76.72028-42.154 13.48928-92.7388 20.23392-150.91132 20.23392-71.6618 0-129.83432-11.80312-174.51756-36.25244-45.52632-24.44932-80.0926-60.70176-105.385-109.6004-24.44932-48.05556-37.09552-103.69884-37.09552-166.08676 0-65.76024 13.48928-123.08968 40.46784-171.98832 26.97856-48.89864 67.4464-85.15108 119.71736-110.44348 40.46784-19.39084 96.11112-29.5078 165.24368-29.5078 66.60332 0 116.34504 5.90156 149.22516 17.70468 32.88012 12.6462 60.70176 31.19396 82.62184 56.48636 21.92008 25.2924 37.9386 57.32944 48.89864 96.9542l-179.57604 32.03704c-7.58772-22.76316-20.23392-40.46784-37.9386-52.27096-17.70468-12.6462-40.46784-18.54776-67.4464-18.54776-41.31092 0-73.34796 14.33236-97.79728 42.99708-24.44932 27.82164-36.25244 73.34796-36.25244 134.8928 0 64.91716 11.80312 111.28656 36.25244 139.95128 24.44932 27.82164 59.0156 41.31092 102.85576 41.31092 21.077 0 40.46784-2.52924 59.85868-8.4308 18.54776-5.90156 40.46784-16.8616 64.91716-31.19396v-56.48636h-124.77584zM2934.710727 3144.4308255h186.32068v455.2632h291.70568v148.38208h-478.02636v-603.64528z"/>\n' +
			'  <g>\n' +
			'     <text text-anchor="middle" alignment-baseline="central" y="4504.82" font-family="Arial"\n' +
			'                    font-size="700" fill="#1c0100">\n' +
			'                <tspan x="2500" dy="0" id="textRoot">' + playerName + '</tspan>\n' +
			'            </text>\n' +
			'  </g>\n' +
			'</svg>\n';
	}
	//#endregion
}
