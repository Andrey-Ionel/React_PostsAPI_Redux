import React,
{ useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Albums from "./containers/Albums";
import Post from "./components/Post/Post";
import Posts from "./containers/Posts";
import ScrollToTop from "./Hooks/ScrollToTop";
import {
  getPostsRequest,
  getAlbumsRequest,
  toggleFavoritePostsRequest,
  toggleFavoriteAlbumsRequest
} from "./store/actions/index";
import { Result } from 'antd';

function App(props) {
  const [errorFetch, setErrorFetch] = useState(null);
  const { getPostsRequest,
    getAlbumsRequest,
    toggleFavoritePostsRequest,
    toggleFavoriteAlbumsRequest } = props;

  useEffect(() => {
    if (location.pathname === "/") {
      getPostsRequest()
        .catch(error => setErrorFetch(error));
    }
    return () => {
      [];
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/Albums") {
      getAlbumsRequest()
        .catch(error => setErrorFetch(error));
    }
    return () => {
      [];
    }
  }, []);


  useEffect((favorite) => {
    if (favorite !== favorite) {
      toggleFavoritePostsRequest(id);
      toggleFavoriteAlbumsRequest(id);
    }
  }, []);

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
const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    albums: state.albumsReducer.albums,
  }
}

const mapDispatchToProps = {
  getPostsRequest,
  getAlbumsRequest,
  toggleFavoritePostsRequest,
  toggleFavoriteAlbumsRequest
}


export default React.memo(connect(mapStateToProps,
  mapDispatchToProps)(App));