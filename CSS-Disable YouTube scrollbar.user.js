// ==UserScript==
// @name        CSS-Disable YouTube scrollbar
// // @description This is your new file, start writing code
// @match       *://*.youtube.com/*
// ==/UserScript==
// Your CSS as text
var styles = `
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
