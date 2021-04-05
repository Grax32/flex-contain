(() => {
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
    
    :host {
        overflow: auto;
    }
  `;
    const template = `<style>${style}</style><div class="relativeParent"><div class="absoluteParent"><slot></slot></div></div>`;

    class FlexContain extends HTMLElement {
        constructor() {
            // Always call super first in constructor
            super();

            // Create a shadow root
            var shadow = this.attachShadow({
                mode: 'open'
            });

            shadow.innerHTML = template;
        }
    }

    // Define the new element
    customElements.define('flex-contain', FlexContain);
})();
