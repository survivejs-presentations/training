import React from "react";

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    return (
      <div>
        <h2>I've seen {this.state.count} cats</h2>
        <button type="button" className="cat-button" onClick={this.sawCat}>
          Saw a Cat
        </button>
      </div>
    );
  }
  sawCat() {
    this.setState({ count: this.state.count + 1 });
  }
}
