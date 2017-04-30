'use strict';

const gh = document.querySelector('github-user');
const sf = document.querySelector('search-field');

sf.addEventListener('search', evt => {
  console.log(evt.detail);
  gh.name = evt.detail.data;
});
