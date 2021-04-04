function () {
  
  const template = `<div class="relativeParent"><div class="absoluteParent"><slot></slot></div></div>`;
  const style = `
    div {
      margin: 0;
      padding: 0;
      border: 0 none;
    }
    relativeParent {
      position: relative;
    }

    absoluteParent {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;

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
