import React, { useState } from "react"
import { connect } from "react-redux";
import { Pagination } from "../components/Pagination";
import Filters from "../components/Filters";
import { LMButton } from "../components/LMButton";
import Navigation from "../components/Navigation";
import { PostslistsView } from "../components/PostslistsView";
import { PostsgridView } from "../components/PostsgridView";
import { toggleFavoritePostsRequest } from "../store/actions/index"

function Posts(props) {
  const [pageListView, setPageListView] = useState(true);
  const [pageGridView, setPageGridView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsQuantityPage, setPostsQuantityPage] = useState(6);

  const { posts, toggleFavoritePostsRequest } = props;
  const indexOfLastPost = currentPage * postsQuantityPage;
  const indexOfFirstPost = indexOfLastPost - postsQuantityPage;
  const totalPosts = Math.ceil(posts.length / postsQuantityPage);
  const currentPageCards = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const addMoreCards = (value) => {
    const addCards = (parseInt(value) + 6);
    setPostsQuantityPage(addCards);
  }

  const setQuantityPosts = (value) => {
    setPostsQuantityPage(value);
  }

  const toggleFavoritePosts = (id) => {
    posts?.map((post) => {
      if (post.id === id && post.favoritePost === undefined) {
        post.favoritePost = true;
        toggleFavoritePostsRequest(id, post.favoritePost);
      } else if (post.id === id && post.favoritePost === false) {
        post.favoritePost = true;
        toggleFavoritePostsRequest(id, post.favoritePost);
      } else if (post.id === id && post.favoritePost === true) {
        post.favoritePost = false;
        toggleFavoritePostsRequest(id, post.favoritePost);
      }
      return post;
    })
  }

  return (
    <main className="uk-main">
      <Navigation
        toggleFavoritePosts={toggleFavoritePosts}
      />
      <div className="uk-section">
        <div className="uk-container">
          <Filters
            setQuantityPosts={setQuantityPosts}
            pageListView={pageListView}
            setPageListView={setPageListView}
            pageGridView={pageGridView}
            setPageGridView={setPageGridView}
            postsQuantityPage={postsQuantityPage}
          />
          {pageListView ?
            <PostslistsView
              currentPageCards={currentPageCards}
              toggleFavoritePosts={toggleFavoritePosts}
            /> :
            <PostsgridView
              currentPageCards={currentPageCards}
              toggleFavoritePosts={toggleFavoritePosts}
            />}
          <LMButton
            postsOrAlbums={posts}
            postsQuantityPage={postsQuantityPage}
            addMoreCards={addMoreCards}
          />
          <Pagination
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div >
    </main >
  )
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  toggleFavoritePostsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)