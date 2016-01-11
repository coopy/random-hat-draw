import React from 'react';
import { StyleRoot } from 'radium';

import getRandomArrayIndex from 'js/lib/random-array-index';

// Components
import GridRow from './grid-row';
import Header from './header';
import ItemDisplay from './item-display';
import ItemInput from './item-input';
import ItemList from './item-list';
import ItemPickButton from './item-pick-button';

require('css/main');

const App = React.createClass({
  getInitialState() {
    return {
      items: [],
      loading: false,
      selectedItem: null
    };
  },

  onItemEntered(item) {
    const { items } = this.state;
    if (items.indexOf(item) === -1) {
      this.setState({
        items: items.concat([item])
      });
    }
  },

  onItemRemoved(itemIndex) {
    this.setState({
      items: this.state.items.filter((item, index) => {
        return index !== itemIndex;
      })
    });
  },

  onModalClose() {
    this.setState({
      selectedItem: null
    });
  },

  pickRandomItem() {
    const { items } = this.state;
    this.setState({ loading: true });

    return getRandomArrayIndex(items.length)
      .then((randomIndex) => {
        this.setState({
          loading: false,
          selectedItem: items[randomIndex]
        });
      });
  },

  renderItemPickButton({ items, loading }) {
    if (!items.length) {
      return null;
    }

    return (
      <GridRow>
        <ItemPickButton
          loading={loading}
          onClick={this.pickRandomItem}
          buttonText="Click to Pick!" />
      </GridRow>
    );
  },

  render() {
    const { selectedItem, items } = this.state;

    return (
      <StyleRoot>
        <ItemDisplay
          modalIsOpen={!!selectedItem}
          onModalClose={this.onModalClose}
          item={selectedItem} />

        <Header />

        <GridRow>
          <ItemInput
            onItemEntered={this.onItemEntered} />
        </GridRow>

        <GridRow>
          <ItemList
            items={items}
            onItemRemoved={this.onItemRemoved} />
        </GridRow>

        {this.renderItemPickButton(this.state)}

      </StyleRoot>
    );
  }
});

export default App;
