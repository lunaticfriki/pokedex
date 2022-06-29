import { html } from 'lit';
import '../src/pokedex-app.js';

export default {
  title: 'PokedexApp',
  component: 'pokedex-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <pokedex-app
      style="--pokedex-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </pokedex-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
