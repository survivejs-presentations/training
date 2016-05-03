import React from "react";
import {Heading} from "spectacle";

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.sawCat = this.sawCat.bind(this);
  }
  render() {
    return (
      <div>
        <Heading size={5} textColor="black">
          I've seen {this.state.count} cats
        </Heading>
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
