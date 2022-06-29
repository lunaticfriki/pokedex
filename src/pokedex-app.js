import { LitElement, html, css } from 'lit';

export class PokedexApp extends LitElement {
  static get styles() {
    return css`
      .container {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 5rem 1fr 5rem;
        padding: 1rem;
        background-color: black;
        color: grey;
        font-family: Arial, sans-serif;
        line-height: 1.5;
        font-size: 16px;
      }
      span {
        font-size: 1.5rem;
        color: purple;
      }
      main {
        display: flex;
        flex-direction: column;
        align-items: center;
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

  connectedCallback() {
    super.connectedCallback();
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    this.pokemons = await res.json();
  }

  render() {
    return html`<div class="container">
      <header-component></header-component>
      <main>
        <title-component tag="h2">
          <span>Total:</span> ${this.pokemons.results?.length}
        </title-component>
        <poke-list .pokemons=${this.pokemons.results}></poke-list>
      </main>
      <footer-component></footer-component>
    </div>`;
  }
}

customElements.define('pokedex-app', PokedexApp);
