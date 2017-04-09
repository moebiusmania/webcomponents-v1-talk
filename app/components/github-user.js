'use strict';

class GithubUser extends HTMLElement {

  get name() {
    return this.getAttribute('name');
  }

  set name(input) {
    this.setAttribute('name', input);
    this.searchUser(input);
  }

  constructor(){
    super();
    this.SD = this.attachShadow({mode: 'open'});

    console.log('<github-user> added to dom');
  }

  searchUser(name){
    fetch(`https://api.github.com/users/${name}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const str = JSON.stringify(data,null,2);

        // Credo uno shadow DOM con contenuto e scoped styles
        this.SD.innerHTML = `
          <style>
            pre{ padding: 20px; border: 1px dashed gray }
          </style>
          <pre>${str}</pre>
        `;
      });
  }

  clear(){
    this.SD.innerHTML = null;
  }

}

// Registra il nuovo elemento
customElements.define('github-user', GithubUser);