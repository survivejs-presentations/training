import React from 'react';
import CatsSeen from './CatsSeen';
import SawCat from './SawCat';

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <CatsSeen amount={this.state.count} />
        <SawCat className="cat-button"
          count={this.state.count} onClick={this.sawCats} />
      </div>
    );
  }
  // Experimental syntax - property initializer
  sawCats(count) => {
    this.setState({ count: count + 1 });
  };
}
