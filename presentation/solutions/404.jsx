import React from 'react';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

const amountTypes = {'SAW_CATS': 'SAW_CATS'};

function amountReducer(state={ amount: 0 }, action) {
  switch (action.type) {
    case amountTypes.SAW_CATS:
      return {
        amount: state.amount + action.amount
      };

    default:
      return state;
  }
}

// Action creator
function sawCats(amount) {
  return {
    type: amountTypes.SAW_CATS,
    amount
  };
}

const store = createStore(amountReducer);

export default () => (
  <Provider store={store}>
    <CatCounter />
  </Provider>
);

const CatCounter = connect(({amount}) => ({
  amount
}), {
  sawCats
})(({amount, sawCats, ...props}) => {
  return (
    <div>
      <CatsSeen amount={amount} />
      <button type="button" className="cat-button"
        onClick={() => sawCats(1)}>
        Saw a cat
      </button>
      <button type="button" className="cat-button"
        onClick={() => sawCats(2)}>
        Saw two cats
      </button>
    </div>
  );
});

const CatsSeen = ({amount}) => <h2>I've seen {amount} cats</h2>;
CatsSeen.propTypes = {
  amount: React.PropTypes.number
};
