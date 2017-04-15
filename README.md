# webcomponents-v1-talk
> Materiale per il lightning talk @ MilanoJS - The good party 02/05/2017

### Installazione e avvio demo
* clona il repo
* apri il terminale e installa le dipendenze con ```yarn``` o ```npm install```
* avvia il progetto con ```yarn start``` o ```npm start```
* apri un browser all'url ```http://localhost:8081```

---

### Specifica Web Components v1

### Supporto dei browser (aprile 2017)

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

### Polyfill

### Librerie
* Polymer (Google)
* SkateJS
* X-Tag (Mozilla)
* Slim.js

---

### Licenza
Tutto il materiale è rilasciato sotto la [licenza MIT](LICENSE).
