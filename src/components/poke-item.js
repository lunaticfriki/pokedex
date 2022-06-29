import { LitElement, html, css } from 'lit';

export class PokeItem extends LitElement {
  static get styles() {
    return css`
      li {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        list-style: none;
        padding: 1rem;
        border-bottom: 1px solid magenta;
        margin: 1rem;
        width: 150px;
      }

      span {
        text-transform: uppercase;
        padding-inline-end: 0.5rem;
        color: magenta;
      }
    `;
  }

  static get properties() {
    return {
      pokemon: { type: Object },
      index: { type: Number },
      pokeInfo: { type: Object },
    };
  }

  constructor() {
    super();
    this.pokemon = {};
    this.pokeInfo = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.index + 1}`
    );
    this.pokeInfo = await res.json();
  }

  render() {
    if (!this.pokemon) {
      return html`<p>Loading...</p>`;
    }

    return html`<li>
      <img
        src=${this.pokeInfo.sprites?.front_default}
        alt=${this.pokemon.name}
      />
      <span>${this.pokemon.name}</span> #${this.index + 1}
    </li>`;
  }
}
