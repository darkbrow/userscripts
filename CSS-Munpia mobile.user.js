// ==UserScript==
// @name        CSS-Munpia mobile
// @description This is your new file, start writing code
// @match       *://*.mm.munpia.com/*
// ==/UserScript==
// Your CSS as text
var styles = `
#NOVEL {
  font-family: 'NanumMyeongjo';
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSerifKR-Medium.woff2') format('woff2');
  font-display: swap;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
