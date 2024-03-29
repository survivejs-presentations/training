import React from 'react';

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amount: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    return (
      <div>
        <CatsSeen amount={this.state.amount} />
        <button type="button" className="cat-button"
          onClick={this.sawCat.bind(null, 1)}>
          Saw a cat
        </button>
        <button type="button" className="cat-button"
          onClick={this.sawCat.bind(null, 2)}>
          Saw two cats
        </button>
      </div>
    );
  }
  sawCat(amount) {
    this.setState({ amount: this.state.amount + amount });
  }
}

const CatsSeen = ({amount}) => <h2>I've seen {amount} cats</h2>;
CatsSeen.propTypes = {
  amount: React.PropTypes.number
};
