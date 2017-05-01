# Web Components v1: cosa c'è da sapere

-

lightning talk di [Salvatore Laisa](http://www.salvatorelaisa.me/) per [MilanoJS](https://milanojs.com/)

---

### Mantra

![1o8pyv.jpg](1o8pyv.jpg)

Non fatevi schiaffeggiare da Batman...

---

### What about v0?
La primissima iterazione della specifica Web Components viene ora referenziata come "v0", in quanto non ha ottenuto l'adozione cross browser (*è supportata solo su Chrome*) ma è servita come dimostrazione delle loro potenzialità e ha permesso ai vari produttori di browser di definire la nuova specifica che stanno attualmente implementando.

**Nota:** è la versione della specifica su cui si basa Polymer 1.x .

---

### Specifica Web Components v1
* **[Custom elements](https://caniuse.com/#feat=custom-elementsv1)**
  * Permette di definire un nuovo tag personalizzato
  * **DEVE** aver un dash nel nome (*es: my-element*)
* **[Shadow DOM](https://caniuse.com/#feat=shadowdomv1)**
  * Crea un nodo del DOM "nascosto" da quello principale
  * I selettori CSS non sono in grado di raggiungerlo
  * Il CSS definito al suo intero... rimane al suo interno!
  * Può essere modificato da codice JS globale solo in maniera esplicita
* **[HTML imports](https://caniuse.com/#feat=imports)**
  * Posso importare blocchi di HTML senza bisogno di Javascript
  * Non è come un ```<iframe>``` che richiede l'intera struttura di una pagina e crea un suo contesto.

---

### Polyfill
Per i browser che non supportano la specifica è possibile utilizzare la [suite di polyfills "ufficiale"](https://github.com/webcomponents) che può essere caricata per intero o a singoli moduli. E' presente anche una versione che carica le polyfill in lazy-loading.

---

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

---

### Librerie
* [Polymer (Google)](https://www.polymer-project.org/)
* [SkateJS](http://skatejs.github.io/)
* [X-Tag (Mozilla)](http://x-tag.github.io/)
* [Slim.js](http://slimjs.com/)

---

# [Live example!](https://moebiusmania.github.io/webcomponents-v1-talk/)

---

# nessun traspilatore o compilatore è stato utilizzato per la demo.

---

# GRAZIE

-

slides built with [Remark](https://remarkjs.com)