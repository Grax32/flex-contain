function () {

  class FlexContain extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      var shadow = this.attachShadow({
        mode: 'open'
      });
      const slot = document.createElement('slot');
      shadow.appendChild(slot);
    }
  }

  // Define the new element
  customElements.define('flexcontain', FlexContain);
  
}();
