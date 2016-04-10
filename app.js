"use strict";
var prefix = document.domain.split("-");
var wdomain = '';
if (prefix.length > 1) {
	wdomain += prefix[0] + "-";
}
wdomain += 'dev-api.mydomain.com';

/**
 * Custom configuration values
 */
var themeToUse = "theme1";
var whitelistedDomain = ['localhost', '127.0.0.1', wdomain];
var apiConfiguration = {
	domain: window.location.protocol + '//' + wdomain,
	key: ''
};

