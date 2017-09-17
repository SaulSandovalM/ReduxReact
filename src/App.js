import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from './actions/peopleActions';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.people.map((p,i)=><li key={i}>){p.name}</li>)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return{
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators (peopleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
