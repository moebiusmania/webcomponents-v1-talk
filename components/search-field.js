'use strict';

class SearchField extends HTMLElement {

  constructor(){
    super();
    this.SD = this.attachShadow({mode: 'open'});
    this.SD.innerHTML = `
      <style>
        input{
          width: 100%;
          padding: 13px 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          outline: none;
          box-sizing: border-box;
          transition: all 0.4s ease;
        }
        input:focus{
          border-color: black;
        }
      </style>

      <input type="text" placeholder="Utente Github da cercare">
    `;

    console.log('<search-field> added to the DOM');
  }

}

// Registra il nuovo elemento
customElements.define('search-field', SearchField);