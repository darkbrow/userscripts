// ==UserScript==
// @name            pipKeyboardShortcut
// @version         1.0.0
// @description     Add keyboard shortcut to Youtube
// @match           *://*.youtube.com/*
// @match           *://youtu.be/*
// @match           *://dprime.kr/*
// @match           *://clien.net/*
// @match           *://*.coupangplay.com/*
// @match           *://*.coupangstreaming.com/*
// @run-at          document-end
// @grant           none
// @inject-into     auto
// @noframes
// ==/UserScript==
//var video = document.getElementsByTagName('video')
const video = document.querySelector('video');

function stopPropagation(event) {
  event.stopPropagation();
}

function togglePictureInPictureMode() {
  const vidMode = video.webkitPresentationMode;
  if (!video.paused) {
    if (vidMode === 'picture-in-picture') {
      video.webkitSetPresentationMode('inline');
    } else {
      video.webkitSetPresentationMode('picture-in-picture');
    }
  }
}

video.addEventListener('webkitpresentationmodechanged', stopPropagation, true);

document.body.addEventListener('keyup', event => {
  if (event.ctrlKey && event.key === 'p') {
    togglePictureInPictureMode();
  }
});
