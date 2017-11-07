'use strict';

// Reveal + code 
Reveal.initialize();
hljs.initHighlightingOnLoad();

// Listening to custom events from gamepad-api element
const gamepad = document.querySelector('gamepad-api');
gamepad.addEventListener('button', evt => {
  evt.detail.button === 'prev' ? Reveal.prev() : Reveal.next();
});