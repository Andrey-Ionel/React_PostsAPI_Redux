import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Albums from './containers/Albums';
import Post from './components/Post/Post';
import Posts from './containers/Posts';
import ScrollToTop from './Hooks/ScrollToTop';
import { Result } from 'antd';

function App() {
  const [errorFetch] = useState(null);

  if (errorFetch) {
    return <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
    />
  } else {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/Albums" component={Albums} />
          <Route exact path="/Post/:id" component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default React.memo(App);
