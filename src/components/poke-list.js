import { LitElement, html, css } from 'lit';

export class PokeList extends LitElement {
  static get styles() {
    return css`
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0;
      }
    `;
  }

  static get properties() {
    return {
      pokemons: { type: Array },
    };
  }

  constructor() {
    super();
    this.pokemons = [];
  }

  render() {
    if (!this.pokemons) {
      return html`<p>Loading...</p>`;
    }

    return html`<ul>
      ${this.pokemons.map(
        (pokemon, idx) =>
          html`<poke-item .pokemon=${pokemon} .index=${idx}></poke-item>`
      )}
    </ul>`;
  }
}
