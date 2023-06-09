// ==UserScript==
// @name        CSS-All sites
// @description This is your new file, start writing code
// @match       *://*/*
// ==/UserScript==
// Your CSS as text
var styles = `
@font-face {
    font-family : 'AppleGothic';
    src : local('Apple SD Gothic Neo'), local('ui-sans-serif');
}

@font-face {
    font-family : 'NanumGothic';
    src : local('나눔고딕'), local('ui-sans-serif');
}

@font-face {
    font-family: 'NanumMyeongjo';
    src : local('나눔명조'), local('ui-serif');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family : 'AppleMyungjo';
    src : local('나눔명조'), local('ui-serif');
}

@font-face {
    font-family : 'Gulim';
    src : local('ui-rounded');
}

@font-face {
    font-family : '굴림';
    src : local('ui-rounded');
}

@font-face {
    font-family : 'Dotum';
    src : local('Apple SD Gothic Neo'), local('ui-sans-serif');
}

@font-face {
    font-family : '돋움';
    src : local('Apple SD Gothic Neo'), local('ui-sans-serif');
}

@font-face {
    font-family : 'Batang';
    src : local('NanumMyeongjo'), local('ui-serif');
}

@font-face {
    font-family : '바탕';
    src : local('NanumMyeongjo'), local('ui-serif');
}

@font-face {
    font-family : 'Gungsuh';
    src : local('GungSeo'), local('ui-serif');
}

@font-face {
    font-family : '궁서';
    src : local('GungSeo'), local('ui-serif');
}

@font-face {
    font-family : 'GulimChe';
    src : local('ui-monospace');
}

@font-face {
    font-family : '굴림체';
    src : local('ui-monospace');
}

@font-face {
    font-family : 'DotumChe';
    src : local('ui-monospace');
}

@font-face {
    font-family : '돋움체';
    src : local('ui-monospace');
}

@font-face {
    font-family : 'BatangChe';
    src : local('Courier New'), local('NanumMyeongjo'), local('ui-monospace');
}

@font-face {
    font-family : '바탕체';
    src : local('Courier New'), local('NanumMyeongjo'), local('ui-monospace');
}

@font-face {
    font-family : 'GungsuhChe';
    src : local('Courier'), local('GungSeo'), local('ui-monospace');
}

@font-face {
    font-family : '궁서체';
    src : local('Courier'), local('GungSeo'), local('ui-monospace');
}

@font-face {
    font-family: '맑은고딕 Semilight';
    src: local('AppleSDGothicNeo-Light'), local('ui-sans-serif');
    font-weight: light;
    font-style: normal;
}

@font-face {
    font-family: '맑은고딕';
    src: local('AppleSDGothicNeo-Medium'), local('ui-sans-serif');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: '맑은 고딕';
    src: local('AppleSDGothicNeo-Bold'), local('ui-sans-serif');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: '맑은 고딕 Semilight';
    src: local('AppleSDGothicNeo-Light'), local('ui-sans-serif');
    font-weight: light;
    font-style: normal;
}

@font-face {
    font-family: '맑은 고딕';
    src: local('AppleSDGothicNeo-Medium'), local('ui-sans-serif');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: '맑은 고딕';
    src: local('AppleSDGothicNeo-Bold'), local('ui-sans-serif');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Malgun Gothic Semilight';
    src: local('AppleSDGothicNeo-Light'), local('ui-sans-serif');
    font-weight: light;
    font-style: normal;
}

@font-face {
    font-family: 'Malgun Gothic';
    src: local('AppleSDGothicNeo-Medium'), local('ui-sans-serif');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Malgun Gothic';
    src: local('AppleSDGothicNeo-Bold'), local('ui-sans-serif');
    font-weight: bold;
    font-style: normal;
}

/* @font-face { */
/*   font-family: 'Jua'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/jua/v13/co3KmW9ljjAjcw.ttf) format('truetype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans JP'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosansjp/v42/-F62fjtqLzI2JPCgQBnw7HFowA.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 100; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby6FmXiEBPT4ITbgNA5CgmOsn7u.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 300; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOelzI7g.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm20A.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 500; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOIl3I7g.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 700; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOalvI7g.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Sans KR'; */
/*   font-style: normal; */
/*   font-weight: 900; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notosanskr/v27/Pby7FmXiEBPT4ITbgNA5CgmOUlnI7g.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif JP'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifjp/v21/xn7mYHs72GKoTvER4Gn3b5eMXNg.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 200; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTihC8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 300; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTkxB8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3Jn7SDn90Gmq2mr3blnHaTZXduY.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 500; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXThRA8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 600; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTjhH8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 700; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTlxG8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Noto Serif KR'; */
/*   font-style: normal; */
/*   font-weight: 900; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTmRE8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'NanumMyeongjo'; */
/*   font-style: normal; */
/*   font-weight: 500; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXThRA8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'NanumMyeongjo'; */
/*   font-style: normal; */
/*   font-weight: 600; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTjhH8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'NanumMyeongjo'; */
/*   font-style: normal; */
/*   font-weight: 700; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTlxG8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'NanumMyeongjo'; */
/*   font-style: normal; */
/*   font-weight: 900; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/notoserifkr/v20/3JnmSDn90Gmq2mr3blnHaTZXTmRE8O0.otf) format('opentype'); */
/* } */
/* @font-face { */
/*   font-family: 'Yeon Sung'; */
/*   font-style: normal; */
/*   font-weight: 400; */
/*   font-display: swap; */
/*   src: url(https://fonts.gstatic.com/s/yeonsung/v20/QldMNTpbohAGtsJvUn6xSQ.ttf) format('truetype'); */
/* } */

@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/Monaco-D2Coding-H1024.woff2') format('woff2');
}

@font-face {
  font-family: 'Consolas';
  font-style: normal;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/ConsolasPL.woff2') format('woff2');
}

pre, code, .blob-code, .blob-code-marker{
    font-family : 'Monaco', 'ui-monospace' !important;
    font-size : 90%;
}

/* @font-face {
  font-family: 'YouTube Noto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm20A.otf') format('opentype');
} */

@font-face {
  font-family: 'YouTube Noto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSansKR-Regular.woff2') format('woff2');
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
