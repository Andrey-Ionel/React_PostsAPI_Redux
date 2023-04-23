import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { Pagination } from '../components/Pagination';
import Filters from '../components/Filters';
import { LMButton } from '../components/LMButton';
import Navigation from '../components/Navigation';
import { PostslistsView } from '../components/PostslistsView';
import { PostsgridView } from '../components/PostsgridView';
import { getPostsRequest, toggleFavoritePostsRequest } from '../store/actions'
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';
import { viewStatus } from '../utils/enums'

function Posts(props) {
  const [viewType, setViewType] = useState(viewStatus.list)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsQuantityPage, setPostsQuantityPage] = useState(6);
  const {error, isLoading} = useSelector(state => state?.postsReducer);
  const statusCode = (error + '').replace(/\D/g, '');

  const { posts, getPostsRequest, toggleFavoritePostsRequest } = props;
  const indexOfLastPost = currentPage * postsQuantityPage;
  const indexOfFirstPost = indexOfLastPost - postsQuantityPage;
  const totalPosts = Math.ceil(posts.length / postsQuantityPage);
  const currentPageCards = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    if (location.pathname === "/") {
      getPostsRequest().catch(error => console.log(error));
    }
  }, []);

  const addMoreCards = (value) => {
    const addCards = (parseInt(value) + 6);
    setPostsQuantityPage(addCards);
  }

  const setQuantityPosts = (value) => {
    setPostsQuantityPage(value);
  }

  const toggleFavoritePosts = (id) => {
    posts?.map((post) => {
      if (post.id === id && !post.favoritePost) {
        toggleFavoritePostsRequest(id, true);
      }  else if (post.id === id && !!post.favoritePost) {
        toggleFavoritePostsRequest(id, false);
      }
      return post;
    })
  }

  return (
    <main className="uk-main">
      <Navigation
        toggleFavorite={toggleFavoritePosts}
      />
      {isLoading &&
      <div className="uk-cover">
        <p className="uk-logo">Loading...</p>
      </div>}
      {!!error &&
        <Result
          status={statusCode}
          title={<p>Sorry, something went wrong.</p>}
          subTitle={<p>{error}</p>}
        />
      }
      {!isLoading && !error &&
      <div className="uk-section">
        <div className="uk-container">
          <Filters
            setQuantityPosts={setQuantityPosts}
            viewType={viewType}
            setViewType={setViewType}
            postsQuantityPage={postsQuantityPage}
          />
          {!!currentPageCards.length ?
            viewType === viewStatus.list ?
              <PostslistsView
                currentPageCards={currentPageCards}
                toggleFavorite={toggleFavoritePosts}
              /> :
              <PostsgridView
                currentPageCards={currentPageCards}
                toggleFavorite={toggleFavoritePosts}
              />
            : <div className="uk-align-center">
              <Result
                icon={<FrownTwoTone />}
                title="Sorry, posts not found."
              />
            </div>
          }
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
      }
    </main >
  )
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  getPostsRequest,
  toggleFavoritePostsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
