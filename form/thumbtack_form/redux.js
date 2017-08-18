import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action 実装
const SEND = 'SEND';

// Action Creator
function send(value) {
  return {
    type: SEND,
    value,
  };
}

// Reducer
// Reducer は 1つだけStore に登録可能. 複数あるならば、combineReducers 利用
// 新しい状態を返す
function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });

    default:
      return state;
  }
}

// Store 実装
const initialState = {
  value: null,
};
const store = createStore(formReducer, initialState);
//store.dispatch(actionCreators());

// Viewの実装
// View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
}

// View (Presentational Components)
// 入力フォームと送信ボタン
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return(
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

// View
// テキスト表示
class FormDisplay extends React.Component {
 render() {
  return (
    <div>{this.props.data}</div>
  );
 }
}
FormDisplay.propTypes = {
  data: React.PropTypes.string
};

// Connect to Redux
function mapStateToProps(state) {
  return {
    value: state.value
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    }
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);
