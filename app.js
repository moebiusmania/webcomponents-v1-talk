'use strict';

const gh = document.querySelector('github-user');
const input = document.querySelector('input');

input.addEventListener('keyup', evt => {
  evt.keyCode === 13 ? gh.name = input.value : null;
});
