# webcomponents-v1-talk
> Materiale per il lightning talk @ MilanoJS - The good party 02/05/2017

### Installazione e avvio demo
* clona il repo
* apri il terminale e installa le dipendenze con ```yarn``` o ```npm install```
* avvia il progetto con ```yarn start``` o ```npm start```
* apri un browser all'url ```http://localhost:8081```

---

### Specifica Web Components v1
* Custom elements
* Shadow DOM
* Templates
* HTML imports

### Supporto dei browser (aprile 2017)

### Polyfill
Per i browser che non supportano la specifica è possibile utilizzare la [suite di polyfills "ufficiale"](https://github.com/webcomponents) che può essere caricata per intero o a singoli moduli. E' presente anche una versione che carica le polyfill in lazy-loading.

### Sintassi base

```javascript
// mycomponent.js
class MyComponent extends HTMLElement {

  constructor(){
    super();
    console.log('<my-componennt> created');
  }

  connectedCallback(){
    console.log('<my-componennt> added to DOM');
  }

}

customElements.define('my-component', MyComponent);
```

```html
<!-- index.html -->
<head>
  <script src="mycomponent.js"></script>
</head>
<body>
  <my-component></my-component>
</body>
```

### Librerie
* Polymer (Google)
* SkateJS
* X-Tag (Mozilla)
* Slim.js

### webcomponents.org
Da fine del 2016 il sito [webcomponents.org](https://www.webcomponents.org/) è stato ripensato come catalogo/store per custom elements. Sono presenti componenti realizzati da Google, IBM, Vaadin e vari aziende e sviluppatori indipendenti.

---

### Licenza
Tutto il materiale è rilasciato sotto la [licenza MIT](LICENSE).
