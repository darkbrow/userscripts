// ==UserScript==
// @name            pipKeyboardShortcut
// @description     Add keyboard shortcut to Youtube
// @include         *://*/*
// @run-at          document-end
// @grant           none
// @noframes
// ==/UserScript==
const video = document.querySelector('video');

video.addEventListener('webkitpresentationmodechanged', event => {
  // Prevent the event from propagating to the parent elements.
  event.stopPropagation();
}, true);

document.body.addEventListener('keyup', e => {
  if (e.ctrlKey && e.key === 'p') {
    if (video.paused) {
      // The function completion() is not defined in the code, so it
      // throws an error. I replaced it with console.log().
      console.log(false);
    } else {
      video.webkitSetPresentationMode('picture-in-picture');
      console.log(true);
    }
  }
});

