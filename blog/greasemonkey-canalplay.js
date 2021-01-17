// ==UserScript==
// @name         VOD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       RedMonkey
// @match        https://vod.canalplus.com/locations-achats/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==


// Remove footer and mainContent
document.querySelectorAll(".footer___2dyxG").forEach(el => el.remove());
document.querySelectorAll(".application__mainContent___7m7XV").forEach(el => el.remove());


// Fonction to add a search filter (by movie name only)
var logo = document.createElement("div");
logo.innerHTML = '<input type="text" id="myInput" placeholder="Search for names..">';
document.body.insertBefore(logo, document.body.lastChild);

window.addEventListener("load", function(){
  document.getElementById("myInput").addEventListener("keyup", function(){
      var all = document.querySelectorAll(".contentGrid__gridItem___qiNnz .card___1isHQ .card__metainfos___2vH8q .cardTitle___3ZXMW span");
      var search = this.value.toLowerCase();
      for (let i of all) {
          let item = i.innerHTML.toLowerCase();
          console.log(item);
          if (item.indexOf(search) == -1) {
              i.style.display = "none";
              i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
          }
          else {i.style.display = "block";
              i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "block";}
	};
  });
});

// Fonction to edit styles
function addCss(cssString) {
    var head = document.
    getElementsByTagName('head')[0];
    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
}

// Style changes
addCss ('#skipToMainContent {background-color: #0e0f10 !important; color: white;}')
addCss ('.landing__heading___1NsOb {margin:0 !important; padding:0 !important; padding-top: 30px !important; background-color: #0e0f10;}')
addCss ('h2 {color: white !important;}')
addCss ('span {color: white !important;}')
addCss ('.card__poster___3KIxI {border-radius: 16px !important;}')
addCss ('.card__content___18SCa img {border-radius: 14px !important;}')
addCss ('.card__poster___3KIxI:hover {border: solid 2px white;}')
addCss ('.cardSubtitle___2G0SH {display:none !important;}')
addCss ('.cardSubtitle___2G0SH {display:none !important;}')
addCss ('.contentGrid__gridItem___qiNnz {width:10% !important}')
addCss ('.cardLogoChannel___2-NLu {display:none !important}')
addCss ('.horizontalScroller___33W0p {display:none !important}')
addCss ('.contentGrid {display:flex !important}')
addCss ('#myInput {background-position: 10px 12px; background-repeat: no-repeat; width: 320px; font-size: 16px; padding: 12px 20px 12px 12px; border: 1px solid #ddd; margin-bottom: 12px; position: absolute; z-index: 2; top: 130px; right: 40px;}')
addCss ('#myInput:focus {color: #000;outline: none !important; border: 2px solid #91278f; background-color: white;}')
addCss ('#myInput:hover {color: #000; outline: none !important; border: 1px solid #d9ddff; background-color: white; cursor: pointer;}')

