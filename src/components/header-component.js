import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {
  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  render() {
    return html`<header>
      <title-component tag="h1">Pokedex</title-component>
    </header>`;
  }
}
