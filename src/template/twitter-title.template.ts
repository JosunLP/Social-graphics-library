import Template from "../model/templateBase";

export class Twitter_Template extends Template {

	//#region setup
	/**
	 * Width  of twitter template
	 */
	static width: number = 1500;

	/**
	 * Height  of twitter template
	 */
	static height: number = 500;
	//#endregion

	//#region template
	/**
	 * Templates twitter template
	 * @param teamName
	 * @param playerName
	 * @returns template
	 */
	static template(teamName: string, playerName:string): string {
        return '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 1500 500">\n' +
			'  <defs/>\n' +
			'  <path fill="#e3e5e8" d="M0 0h1500v500.0016H0z"/>\n' +
			'  <path fill="#2e4263" d="M481.17569116 304.37979471c-.00086708 0-.00173416 0-.00346832-.00086708-.486433-.1734164-1.11246621-.37631359-1.85642257-.57574245-2.34285556-.62950153-4.76114726-.9485877-7.18897686-.9485877-3.94695726 0-7.74304226.85407576-11.28333806 2.53968317-2.22753366.87141741-4.2348285 2.16076835-5.96725833 3.83076828-3.57497908 3.44665095-5.5441223 8.07166634-5.5441223 13.02270456 0 1.7532398.2505867 3.4492522.71794389 5.0533539-.51938212.52285044-1.03876424 1.07604875-1.5555451 1.65786078h-.00086709c-.60522324.68326061-1.20611106 1.40553992-1.79399266 2.17030624-.01560747-.03468328-.03034787-.07023364-.04595534-.105784-1.1757632-2.7798649-1.77231561-5.73314619-1.77231561-8.77573692 0-3.04259074.59655241-5.99500495 1.7723156-8.77573693 1.13587743-2.68535295 2.7607891-5.09584091 4.83051383-7.16556564 2.06972473-2.06972474 4.4802127-3.6946364 7.16556565-4.83051383 2.77986489-1.17576319 5.73314618-1.7723156 8.77573692-1.7723156 3.04259074 0 5.99587203.59655241 8.77573692 1.7723156 1.78185351.75436134 3.45011928 1.72809443 4.97444943 2.90385762z"/>\n' +
			'  <path fill="#2e4263" d="M467.4255048 340.34115358c-5.50510361 0-10.4431356-2.4711837-13.76319258-6.36178063l-.00086708-.00086709 3.415436-2.14516086h.00086708c.65811524.73268429 1.38039454 1.37866038 2.15990126 1.93272577 1.44195737 1.02315676 3.12409645 1.75930938 5.00132898 2.18851497 1.1220041.25665627 2.23620448.38758566 3.31051907.38758566 1.26073723 0 2.50586698-.17948598 3.70244014-.53238835 1.19744025-.35376946 2.3801401-.89222738 3.51515043-1.5997663 1.19050359-.74222218 2.24314114-1.63098123 3.12756478-2.6393976.88355655-1.01015053 1.62577875-2.16943916 2.20412244-3.44665095.57747661-1.27547762.95985977-2.59257518 1.1367445-3.91314107.13353063-.99541013.15260643-2.01423148.05896158-3.04172365-1.26507264 4.35275164-4.31199879 6.78491665-6.73375881 8.08033716-2.46944954 1.3196988-4.75854602 1.74283482-5.39151588 1.839948v.00260125l-.09971443.01300623-.0095379.0095379-.07370197.00086708c-.12659397.01387331-1.10639663.1205244-1.84168217.1205244-.13353063 0-.25405503-.00346833-.3563707-.01040499-1.36565415-.09537902-2.63679636-.47255969-3.77614211-1.12113702l-.0147404-.0095379-.01474039-.01127207c-.33989614-.28960539-.50724297-.61389406-.49943923-.96506227.01127206-.4907684.37804775-.87488573.53585667-1.01795426l3.72238303-2.33765308.03728453-.02341121 9.78415328-6.10078895.04682243-.02948079.29047247-.18122014 3.48133423-2.17030624-.00173416-.00433541.12832813-.07977155 1.82000512-1.1367445.2844029-.17775181.00520249-.00346833.00606957-.00260124c.21590342-.116189.54279334-.25405503.87748699-.25405503.33295949 0 .78384213.1352648 1.04223256.78470921l.00260125.00867082c.0095379.02601246.03034787.09104361.05375908.16301142.03294912.10318275.07803738.24278296.09277778.28093456l.00260124.0095379c.54626166 1.74283483.8237279 3.56110578.8237279 5.40192087 0 9.97664549-8.1167546 18.09340009-18.0934001 18.09340009zm20.7718164-26.86913702c-.42660434-1.00928344-.9295119-1.99255443-1.49398229-2.92119925-.00346832-.00346833-.00520249-.00780374-.00780373-.01213915-.0338162-.05549325-.0676324-.1109865-.10231568-.16647975-.00173416-.00173416-.00260125-.0043354-.00433541-.00693665-.0242783-.0390187-.0485566-.0771703-.07283489-.11618899-.40232605-.6121599-.96419518-.92170817-1.67086701-.92170817-.71014016 0-1.4211474.30521287-1.89457417.5636033l-.5011734.3086812c-.00173416.00086708-.00260124.00173416-.00260124.00173416l-.00260125.00173416-.00346833.00173417-2.91599676 1.79832807-.47862927.29480788v.00086708l-.00780374.00346833-1.08211833.66765314-.13786604.08584111-.03728453-.04161993-.01127206-.01300623-.05896158-.06589823c-.93298023-1.04396673-2.00729483-1.92145372-3.193463-2.60991682-1.18616818-.68846311-2.51887321-1.20697815-3.9599635-1.5416718-1.11940286-.2601246-2.23186907-.39105398-3.30791783-.39105398-1.25900306 0-2.50586698.18035305-3.70590847.53585667-1.20177565.3563707-2.39054507.89829696-3.53422623 1.61190544-1.6188421 1.00928345-2.96021795 2.25094487-3.98771012 3.69116808-1.02835925 1.4402232-1.77318269 3.12062811-2.21279326 4.9952594-.39799064 1.69341114-.49943923 3.35647442-.30261162 4.95277238.90436653-.7318172 1.76711312-1.3682554 2.55268941-1.91278289.12659397-.0867082.2505867-.17168224.37197818-.25405503.8766199-.59134992 1.64572163-1.06217545 2.26134985-1.41767907.11185358-.5297871.27399792-1.05610587.48469884-1.57548799.72141223-1.7723156 1.903245-3.17872261 3.5116821-4.18193649 1.4211474-.8861578 2.981895-1.33530628 4.63802162-1.33530628.21763758 0 .44047766.00780374.66245065.02254414 1.0691121.07456905 2.08186388.3225545 3.01224287.73528553l.01213914.00606958.01127207.00780373c.7560955.4725597 1.15235198.9589927 1.1757632 1.44715986.00867081.17775181-.03208204.35116821-.11965732.51678087-.09364486.1786189-.24191588.34769989-.44221182.50204048l-.0052025.00346833-.01127206.00780374-.3468328.2167705-9.73472962 6.069574-.211568.13179646c-.00086709 0-.00086709.00086708-.00173417.00173417-.00693665.0043354-.01387331.00867082-.02080997.01213914-2.56656272 1.60757003-4.78369139 3.26889914-6.68433513 4.88860832-1.13761159.96766351-2.16076835 1.92145371-3.07727402 2.83882647-1.03269466 1.03269466-1.93012453 2.02030106-2.70096043 2.93420549-.15000519.17688472-.29480788.34943404-.43440808.5202492-.51157838.62516612-.96246102 1.21044647-1.35611625 1.74543606-.39278815.53585668-.72834888 1.0214226-1.00928345 1.44715986-.68933019 1.04309965-1.05177047 1.7246261-1.13934575 1.89370709 0 .00173416-.00086708.00260124-.00173416.00346833-.01127207.02254413-.01734164.03468328-.0190758.03728452l4.92936116-3.09634982.02861371-.01734164.01040498-.00693666c.2505867.31128244.50984422.61736239.77863964.91650568.27573208.30694703.56013497.6069574.85320869.9008982 2.06972473 2.06972473 4.4802127 3.6946364 7.16556565 4.83051382 2.77986489 1.17576319 5.73314618 1.7723156 8.77573692 1.7723156 3.04259074 0 5.99587203-.59655241 8.77573692-1.7723156 2.68535295-1.13587742 5.09584091-2.76078909 7.16556565-4.83051382 2.06972473-2.06972474 3.6946364-4.4802127 4.83051382-7.16556565 1.1757632-2.7798649 1.7723156-5.73314619 1.7723156-8.77573692 0-3.04259074-.5965524-5.99500495-1.7723156-8.77573693z"/>\n' +
			'  <g fill="#2e4263" font-size="60.109">\n' +
			'    <text font-family="\'BremenBT-Bold\',\'Bremen Bd BT\',fantasy" transform="matrix(.69661 0 0 .69661 684.654 335.44)">\n' +
			'      /\n' +
			'    </text>\n' +
			'    <text x="15.321" font-family="\'Arial-Black\',\'Arial\',sans-serif" font-weight="900" transform="matrix(.69661 0 0 .69661 684.654 335.44)">\n' +
			teamName +
			'    </text>\n' +
			'  </g>\n' +
			'  <path fill="#2e4263" fill-rule="nonzero" d="M559.27116566 306.21800855c-.73788678-2.77726364-2.91079428-4.96404445-5.6698492-5.70626664-5.0004619-1.34831251-25.0534673-1.34831251-25.0534673-1.34831251s-20.05213834 0-25.05346732 1.34831251c-2.75905492.7422222-4.93196241 2.929003-5.66898211 5.70626664-1.34050877 5.03341101-1.34050877 15.53464111-1.34050877 15.53464111s0 10.50209719 1.34050877 15.5355082c.7370197 2.77639656 2.90992719 4.87213376 5.66898211 5.61435595 5.00132898 1.34917959 25.05346731 1.34917959 25.05346731 1.34917959s20.05300542 0 25.05346731-1.3491796c2.75905492-.74222218 4.93196242-2.83795938 5.6698492-5.61435594 1.33964169-5.03341101 1.33964169-15.5355082 1.33964169-15.5355082s0-10.5012301-1.3396417-15.5346411zm-37.28192476 25.06994187v-19.06973443l16.76069506 9.53530076-16.76069506 9.53443367zm69.84432219-21.14292749c-6.397331 0-11.55733598 5.16000498-11.55733598 11.55733598 0 6.397331 5.16000498 11.55733598 11.55733598 11.55733598 6.397331 0 11.55733597-5.16000499 11.55733597-11.55733598 0-6.397331-5.16000498-11.55733598-11.55733597-11.55733598zm0 19.07146859c-4.13424698 0-7.51413262-3.36948065-7.51413262-7.51413261 0-4.14378488 3.37034774-7.51413261 7.51413262-7.51413261 4.14465196 0 7.5141326 3.37034773 7.5141326 7.5141326 0 4.14465197-3.37988563 7.51413262-7.5141326 7.51413262zm14.72652068-19.54402828c0 1.4983177-1.20697814 2.69575794-2.69575793 2.69575794-1.49918478 0-2.69575794-1.20697815-2.69575794-2.69575794 0-1.4887798 1.20697814-2.69575794 2.69575794-2.69575794 1.48877979 0 2.69575793 1.20697815 2.69575793 2.69575794zm7.6545999 2.73564371c-.17081515-3.61139653-.99627722-6.81006203-3.6417444-9.44512423-2.6350622-2.6350622-5.8337277-3.46052426-9.44512423-3.64087731-3.72151594-.21156801-14.87652587-.21156801-18.59804181 0-3.60185863.17081515-6.80052413.99541013-9.44599131 3.63047233-2.64546718 2.63592928-3.45965718 5.83459478-3.64087732 9.4459913-.211568 3.72151595-.211568 14.87652588 0 18.59804183.17081515 3.61139653.99541014 6.81006202 3.64087732 9.44512422 2.64546718 2.63592928 5.83459478 3.46052426 9.4459913 3.6417444 3.72151595.21070093 14.87652588.21070093 18.59804182 0 3.61139653-.17081515 6.81006203-.99627722 9.44512423-3.6417444 2.63592928-2.6350622 3.46052426-5.8337277 3.6417444-9.44512422.21070093-3.72151595.21070093-14.86698798 0-18.58850392zm-4.80796969 22.5822836c-.78470921 1.9708774-2.30383687 3.49000506-4.28511924 4.28511925-2.96802169 1.17663028-10.00872753.90523361-13.28803165.90523361-3.27930413 0-10.33041495.26099168-13.28716457-.9052336-1.97174447-.78470922-3.49087213-2.30383688-4.28511925-4.28511925-1.17749735-2.9671546-.9052336-10.00872753-.9052336-13.28803165 0-3.27930413-.26185877-10.33041495.9052336-13.28716457.78470921-1.97174447 2.3029698-3.49087213 4.28511925-4.28511924 2.9671546-1.17749736 10.00786044-.90523361 13.28716457-.90523361 3.27930412 0 10.33041494-.26185877 13.28803165.9052336 1.97087738.78470922 3.49000505 2.3029698 4.28511924 4.28511925 1.17663027 2.9671546.9052336 10.00786044.9052336 13.28716457 0 3.27930412.27139667 10.33041495-.9052336 13.28803165zm64.93577098-24.59044551c.03468328.49336966.03468328.98673931.03468328 1.47924189 0 15.04127145-11.44808365 32.37250647-32.37163939 32.37250647-6.44588759 0-12.43482296-1.86769463-17.4717023-5.10798006.9156386.105784 1.7965939.14046728 2.74778286.14046728 5.31868099 0 10.21509304-1.79572682 14.12476578-4.86086169-5.00132898-.105784-9.19367045-3.3816198-10.63736198-7.8904462.70407059.105784 1.40900825.17601765 2.1486292.17601765 1.0214226 0 2.0428452-.14046729 2.99403415-.38671858-5.21376407-1.05697295-9.1234368-5.63690008-9.1234368-11.16714907v-.14046729c1.51479225.84540495 3.27583579 1.37345789 5.14266333 1.44369153-3.06426778-2.04284519-5.0724297-5.530249-5.0724297-9.4754721 0-2.11307883.5636033-4.0510071 1.55034262-5.741817 5.60048264 6.90457397 14.01898178 11.41340037 23.4597706 11.90677003-.17601765-.84540495-.28180166-1.72636027-.28180166-2.60731558 0-6.26986994 5.0724297-11.37698292 11.37785-11.37698292 3.2758358 0 6.23431959 1.37345789 8.31271514 3.59232073 2.57176521-.49250258 5.03774642-1.44369153 7.2210589-2.74691578-.84540495 2.64199885-2.64199886 4.8608617-5.00132898 6.26986994 2.28909648-.24625129 4.5088264-.88095531 6.5516716-1.76104354-1.54947554 2.2544132-3.48740381 4.26170803-5.70626665 5.88228429z"/>\n' +
			'  <text fill="#2e4263" font-family="\'Arial-BoldMT\',\'Arial\',sans-serif" font-size="182.371" font-weight="700" transform="translate(442.716 271.361) scale(.7331)">\n' +
			playerName +
			'  </text>\n' +
			'  <path fill="#2d8ec9" d="M261.32863262 254.1917096c-1.55585612 5.62368355-2.38739604 11.54990706-2.38739604 17.66877731 0 14.99040905 4.99101916 28.82449265 13.39851507 39.92637366-40.61785538-6.49215115-71.69520278-41.72381682-71.69520278-84.15637794 0-47.03770838 38.18868213-85.2263905 85.22630153-85.2263905 45.85259715 0 83.29636367 36.28819741 85.15431482 81.68667322-11.90272203-11.42978091-28.0641386-18.45938536-45.85482172-18.45938536-3.63314873 0-7.19867089.29319679-10.67031668.85689988-4.98790478-15.95052844-19.88888658-27.53994366-37.47491033-27.53994366-21.66630872 0-39.25624769 17.58993898-39.25624769 39.2562477 0 16.0866714 9.69765078 29.92653885 23.55976382 35.98712568z"/>\n' +
			'  <path fill="#2d8ec9" fill-rule="nonzero" d="M224.98792854 343.52361826l11.85817504-.7340775c.2823375 1.919895.790545 3.38805 1.58109 4.404465 1.29875251 1.63755751 3.10571252 2.48457002 5.53381503 2.48457002 1.7504925 0 3.16218-.45174 4.12212751-1.2987525.9599475-.790545 1.4116875-1.80696001 1.4116875-2.87984252 0-1.0728825-.45174-1.9763625-1.35522-2.823375-.90348-.8470125-3.04924501-1.58109001-6.38082752-2.31516751-5.47734752-1.242285-9.43007253-2.87984251-11.74524004-4.91267252-2.371635-2.0892975-3.50098501-4.68680252-3.50098501-7.84898253 0-2.03283.564675-4.00919251 1.80696-5.87262002 1.1858175-1.8634275 2.99277751-3.275115 5.42088002-4.34799751 2.42810251-1.0728825 5.70321752-1.58109 9.93828004-1.58109 5.13854251 0 9.09126753.9599475 11.80170754 2.8798425 2.71044 1.919895 4.34799751 4.96914002 4.85620501 9.14773503l-11.80170754.7340775c-.2823375-1.8634275-.9599475-3.16218-1.9763625-4.0091925-1.016415-.79054501-2.37163501-1.24228501-4.12212752-1.24228501-1.468155 0-2.5410375.338805-3.27511501.9599475-.7340775.6211425-1.12935 1.35522-1.12935 2.2022325 0 .67761001.2823375 1.24228501.90348 1.75049251.6211425.564675 1.9763625 1.016415 4.17859501 1.52462251 5.47734752 1.12935 9.37360504 2.3151675 11.74524004 3.55745251 2.37163501 1.1858175 4.06566002 2.71044001 5.19501002 4.46093252 1.0728825 1.80696 1.58109 3.78332251 1.58109 5.98555502 0 2.597505-.7340775 4.96914001-2.145765 7.17137252-1.4116875 2.20223251-3.44451751 3.83979002-5.98555502 4.96914002-2.59750501 1.12935-5.81615252 1.694025-9.76887753 1.694025-6.88903503 0-11.63230504-1.2987525-14.28627755-3.952725-2.65397251-2.65397252-4.12212752-6.04202253-4.46093252-10.10768254zM288.24105765 342.28133325v-8.41365753h19.31188506v17.22258756c-3.726855 2.54103751-6.94550252 4.23506252-9.82534503 5.13854252-2.82337501.90348-6.21142502 1.35522-10.10768253 1.35522-4.79973752 0-8.69599503-.790545-11.68877254-2.4281025-3.04924501-1.6375575-5.36441252-4.06566002-7.05843753-7.34077503-1.6375575-3.2186475-2.48457-6.94550252-2.48457-11.12409754 0-4.40446501.90348-8.24425502 2.71044-11.51937004 1.80696-3.275115 4.51740002-5.70321751 8.01838503-7.39724252 2.71044-1.2987525 6.43729502-1.9763625 11.06763004-1.9763625 4.46093251 0 7.79251502.3952725 9.99474753 1.1858175 2.2022325.8470125 4.06566002 2.0892975 5.53381502 3.78332251 1.468155 1.694025 2.5410375 3.83979001 3.27511501 6.49376252l-12.02757754 2.145765c-.5082075-1.5246225-1.35522-2.71044-2.5410375-3.500985-1.18581751-.8470125-2.71044002-1.242285-4.51740002-1.242285-2.76690751 0-4.91267252.9599475-6.55023003 2.8798425-1.6375575 1.8634275-2.4281025 4.91267252-2.4281025 9.03480003 0 4.34799752.790545 7.45371003 2.4281025 9.37360504 1.63755751 1.8634275 3.95272502 2.7669075 6.88903503 2.7669075 1.4116875 0 2.71044-.1694025 4.00919251-.564675 1.242285-.3952725 2.71044001-1.12935 4.34799752-2.0892975v-3.78332252h-8.35719003zM314.95089108 316.47568566h12.47931754v30.4924501h19.53775507v9.93828004h-32.0170726v-40.43073014z"/>\n' +
			'</svg>';
	}
	//#endregion
}
