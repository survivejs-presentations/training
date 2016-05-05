import React from 'react';
import CatsSeen from './CatsSeen';
import SawCat from './SawCat';

export default class CatCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.sawCats = this.sawCats.bind(this);
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
  sawCats(count) {
    this.setState({ count: count + 1 });
  }
}
