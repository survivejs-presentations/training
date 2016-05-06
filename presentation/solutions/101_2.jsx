import React from 'react';

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    const amounts = [1, 2, 4];

    return (
      <div>
        <h2>I've seen {this.state.amount} cats</h2>
        {amounts.map((amount, i) =>
          <button key={i} type="button" className="cat-button"
            onClick={this.sawCat.bind(null, amount)}>
            Saw {amount} cats
          </button>
        )}
      </div>
    );
  }
  sawCat(amount) {
    this.setState({ amount: this.state.amount + amount });
  }
}
