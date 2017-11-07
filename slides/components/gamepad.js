'use strict';

class GamepadApi extends HTMLElement {
  constructor(){
    super();

    this.pad = (index) => navigator.getGamepads()[index];
    this.polling = null;
  }

  _filter(gamepads){
    const arr = [];
    for(let i = 0; i < gamepads.length; i++){
      gamepads[i] !== null ? arr.push(true) : null;
    }
    return arr.length;
  }

  _checkButtons(){
    const prev = this.pad(0).buttons[14].pressed ? 'prev' : null;
    const next = this.pad(0).buttons[15].pressed ? 'next' : null;
    if(prev || next){ 
      console.log(prev || next);
      this.dispatchEvent(new CustomEvent('button', {
        bubbles: true,
        composed: true,
        detail: {
            button: prev || next
        }
      }));
    }
  }

  removePad(){
    window.addEventListener("gamepaddisconnected", (e) => {
      console.log("Gamepad disconnected from index %d: %s",
          e.gamepad.index, e.gamepad.id);

      this.removeAttribute('connected');
      this.removeAttribute('devices');
      clearInterval(this.polling);
    });

  }

  setPad(){
    this.setAttribute('connected', true);
    this.setAttribute('devices', this._filter(navigator.getGamepads()));
    this.polling = setInterval(this._checkButtons.bind(this), 100);
  }

  detectPad(){
    window.addEventListener("gamepadconnected", (e) => {
      console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          e.gamepad.index, e.gamepad.id,
          e.gamepad.buttons.length, e.gamepad.axes.length);
      this.setPad();
    });
  }

  connectedCallback(){
    this._filter(navigator.getGamepads()) ? this.setPad() : null;
    this.detectPad();
    this.removePad();
  }

}

customElements.define('gamepad-api', GamepadApi);