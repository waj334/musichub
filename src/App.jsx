import React, { Component } from 'react';
import {Segment, Container} from 'semantic-ui-react';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducers';
import ControlBar from './components/ControlBar.jsx';
import ContentArea from './components/ContentArea.jsx';

const createStoreWithMiddleware = compose(applyMiddleware(reduxThunk))(createStore);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{minHeight:'100vh'}}>
          <Segment>
            <ControlBar/>
          </Segment>
          <Container fluid style={{height:'100%', display:'block'}}>
            <ContentArea/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
