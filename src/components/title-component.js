import { LitElement, html, css } from 'lit';

export class TitleComponent extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: purple;
        font-size: 3rem;
      }
      h2 {
        color: yellow;
        font-size: 2.5rem;
      }
      h3 {
        color: magenta;
        font-size: 2rem;
      }
      h4,
      h5,
      h6 {
        color: blueviolet;
      }
      h4 {
        font-size: 1.5rem;
      }
      h5 {
        font-size: 1rem;
      }
      h6 {
        font-size: 0.8rem;
      }
    `;
  }

  static get properties() {
    return {
      tag: { type: String },
      validTags: { type: Array },
    };
  }

  constructor() {
    super();
    this.validTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  }

  render() {
    if (this.validTags.find(tag => this.tag === tag)) {
      switch (this.tag) {
        case 'h1':
          return html`<h1><slot></slot></h1>`;
        case 'h2':
          return html`<h2><slot></slot></h2>`;
        case 'h3':
          return html`<h3><slot></slot></h3>`;
        case 'h4':
          return html`<h4><slot></slot></h4>`;
        case 'h5':
          return html`<h5><slot></slot></h5>`;
        case 'h6':
          return html`<h6><slot></slot></h6>`;
        default:
          return html`<slot></slot>`;
      }
    } else {
      return html`<p>invalid tag</p>`;
    }
  }
}
