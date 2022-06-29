import { TitleComponent } from './title-component.js';
import { HeaderComponent } from './header-component.js';
import { FooterComponent } from './footer-component.js';
import { PokeList } from './poke-list.js';
import { PokeItem } from './poke-item.js';

customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('poke-list', PokeList);
customElements.define('poke-item', PokeItem);
customElements.define('title-component', TitleComponent);
