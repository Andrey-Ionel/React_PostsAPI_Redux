import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Albums from './containers/Albums';
import Post from './components/Post/Post';
import Posts from './containers/Posts';
import ScrollToTop from './Hooks/ScrollToTop';
import Photos from './containers/Photos';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/Albums" component={Albums} />
        <Route exact path="/Photos" component={Photos} />
        <Route exact path="/Post/:id" component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(App);
