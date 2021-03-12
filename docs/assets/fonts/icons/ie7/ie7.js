/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-Path-1371': '&#xe948;',
		'i-swap_horiz-24px-1': '&#xe93a;',
		'i-Group-1543': '&#xe93b;',
		'i-Group-1538': '&#xe93c;',
		'i-arrow-drop-up': '&#xe938;',
		'i-arrow-drop-down': '&#xe939;',
		'i-slider': '&#xe901;',
		'i-avatar2': '&#xe900;',
		'i-avatar-main': '&#xe92c;',
		'i-login-24px': '&#xe92b;',
		'i-We_Just_Sent_You_an_Email': '&#xe904;',
		'i-visible': '&#xe905;',
		'i-sports_basketball-24px': '&#xe906;',
		'i-settings-blue': '&#xe907;',
		'i-settings-black': '&#xe908;',
		'i-No_Result_Found': '&#xe909;',
		'i-invisible': '&#xe924;',
		'i-description-24px': '&#xe925;',
		'i-Change_Password': '&#xe926;',
		'i-BG_ball_up': '&#xe927;',
		'i-BG_ball_down': '&#xe928;',
		'i-arrow_drop_up-24px': '&#xe929;',
		'i-arrow_drop_down-24px': '&#xe92a;',
		'i-checkmark1': '&#xe936;',
		'i-checkmark2': '&#xe937;',
		'i-search1': '&#xe903;',
		'i-next': '&#xe93d;',
		'i-previous': '&#xe93e;',
		'i-last': '&#xe93f;',
		'i-first': '&#xe940;',
		'i-forward': '&#xe941;',
		'i-backward': '&#xe942;',
		'i-stop': '&#xe943;',
		'i-pause': '&#xe944;',
		'i-enlarge': '&#xe945;',
		'i-enlarge1': '&#xe946;',
		'i-play': '&#xe947;',
		'i-checkmark': '&#xe933;',
		'i-spinner1': '&#xe932;',
		'i-spinner': '&#xe92d;',
		'i-check-circle-o': '&#xe934;',
		'i-check-circle': '&#xe935;',
		'i-chevron-right': '&#xe92e;',
		'i-chevron-left': '&#xe92f;',
		'i-chevron-down': '&#xe930;',
		'i-chevron-up': '&#xe931;',
		'i-search': '&#xe902;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
