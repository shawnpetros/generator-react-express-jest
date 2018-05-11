import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Example } from '../../components';
import { exampleAction } from '../../redux/actions/example';

class AppContainer extends Component {
  componentDidMount() {
    this.props.exampleAction();
  }

  render() {
    return (
      <main>
        <h1>App Container</h1>
        <p>If the redux extension is installed, you should see that an action was called and that the reducer was triggered.</p>
        <Example />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    example: state.exampleReducer
  };
};

export default connect(mapStateToProps, { exampleAction })(AppContainer);
