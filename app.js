'use strict';

// window.addEventListener('WebComponentsReady', () => {
//   const script = document.createElement('script');
//   script.src = './components/github-user.js';
//   document.body.appendChild(script);


  const gh = document.querySelector('github-user');
  const input = document.querySelector('input');

  input.addEventListener('keyup', evt => {
    evt.keyCode === 13 ? gh.name = input.value : null;
  });
// });