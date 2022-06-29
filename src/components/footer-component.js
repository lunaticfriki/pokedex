import { LitElement, html, css } from 'lit';

export class FooterComponent extends LitElement {
  static get styles() {
    return css`
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      year: { type: String },
    };
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  render() {
    return html`<footer>
      <p>@lunaticfriki, ${this.year}</p>
    </footer>`;
  }
}
