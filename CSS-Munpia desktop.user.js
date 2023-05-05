// ==UserScript==
// @name        CSS-Munpia desktop
// @description This is your new file, start writing code
// @match       *://*.munpia.com/*
// ==/UserScript==
// Your CSS as text
var styles = `
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby6FmXiEBPT4ITbgNA5CgmOsn7u.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOelzI7g.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm20A.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOIl3I7g.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOalvI7g.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOUlnI7g.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTihC8O0.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTkxB8O0.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3Jn7SDn90Gmq2mr3blnHaTZXduY.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXThRA8O0.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTjhH8O0.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTlxG8O0.otf) format('opentype');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTmRE8O0.otf) format('opentype');
}
@font-face {
  font-family: 'NanumGothic';
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NanumGothic.woff2') format('woff2');
  font-display: swap;
}
@font-face {
  font-family: 'NanumMyeongjo';
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSerifKR-Medium.woff2') format('woff2');
  font-display: swap;
}
@font-face {
  font-family: 'Malgun Gothic';
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MalgunGothic.woff2') format('woff2');
  font-display: swap;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
