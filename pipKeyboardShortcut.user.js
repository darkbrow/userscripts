// ==UserScript==
// @name            pipKeyboardShortcut
// @description     Add keyboard shortcut to Youtube
// @include         https://*.youtube.com/*
// @include         https://youtube.com/*
// @include         https://youtu.be/*
// @run-at          document-end
// @grant           none
// @noframes
// ==/UserScript==
let video = document.querySelector('video')

video.addEventListener('webkitpresentationmodechanged', function(event) {
    // No, YouTube, we're not entering PIP, look away.
    event.stopPropagation()
}, true)

document.body.addEventListener('keyup', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        if (video.muted) {
            completion(false)
        } else {
            video.webkitSetPresentationMode('picture-in-picture')
            completion(true)
        }
    }
})
