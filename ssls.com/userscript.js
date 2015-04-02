// ==UserScript==
// @name         Lastpass fix SSLs.com
// @namespace    http://github.com/lauripiisang/lastpass-fixes-tampermonkey/ssls.com
// @downloadURL  https://raw.githubusercontent.com/lauripiisang/lastpass-fixes-tampermonkey/master/ssls.com/userscript.js
// @updateURL    https://raw.githubusercontent.com/lauripiisang/lastpass-fixes-tampermonkey/master/ssls.com/userscript.js
// @version      0.1.1
// @description  removes bullshit element that blocks lastpass
// @author       Lauri Piisang
// @match        https://www.ssls.com/login-page.htm*
// @grant        none
// ==/UserScript==

var bsel = document.getElementsByClassName("recPassHideCheckBox"); 
if(bsel.length)
  bsel[0].remove() ;
