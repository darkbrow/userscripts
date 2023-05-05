// ==UserScript==
// @name        CSS-Agitoon
// @description This is your new file, start writing code
// @include       *://agit*.xyz/*
// ==/UserScript==
// Your CSS as text
var styles = `
@font-face {
  font-family: 'Batang';
  /* font-style: normal;
  font-weight: 500; */
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSerifKR-Medium.woff2') format('woff2');
  line-height: 180%;
}

@font-face {
  font-family: '바탕';
  /* font-style: normal;
  font-weight: 500; */
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSerifKR-Medium.woff2') format('woff2');
  line-height: 180%;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
