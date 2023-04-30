import React from 'react';
import { connect } from 'react-redux';
import Favorite from './Favorite/Favorite';

function Navigation(props) {
  const { posts, albums,
    toggleFavorite } = props;

  const favoritePosts = posts.filter((post) => post.favoritePost);

  const favoriteAlbums = albums.filter((album) => album.favoriteAlbum);

  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className={location.pathname === "/"
            || location.pathname === "/Postsgrid"
            ? "uk-active" : ""}>
            <a href="/">Posts</a>
          </li>
          <li className={location.pathname === "/Albums"
            ? "uk-active" : ""}>
            <a href="/Albums">Albums</a>
          </li>
          <li className={location.pathname === "/Photos"
              ? "uk-active" : ""}>
            <a href="/Photos">Photos</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className={favoritePosts.length || favoriteAlbums.length
              ? "uk-button favorite-active" : "uk-button"}
            type="button"
            uk-icon="icon: heart; ratio: 2"
          ></button>
          <div className="uk-width-large" uk-dropdown="mode: click">
            <div
              className="uk-dropdown-grid uk-child-width-1-1@m"
              uk-grid="true"
            >
              <div>
                <table className="uk-table uk-table-divider uk-table-justify">
                  <thead>
                    <tr>
                      <th>Favorite</th>
                      <th>Title</th>
                      <th className="uk-text-right">Delete</th>
                    </tr>
                  </thead>
                  {favoritePosts?.map((post) => (
                    <Favorite
                      key={post.id}
                      title={post.title}
                      id={post.id}
                      toggleFavorite={toggleFavorite}
                      favoritePosts={favoritePosts}
                    />
                  ))}
                  {favoriteAlbums?.map((album) => (
                    <Favorite
                      key={album.id}
                      title={album.title}
                      id={album.id}
                      toggleFavorite={toggleFavorite}
                    />
                  ))
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    albums: state.albumsReducer.albums,
  }
}


export default React.memo(connect(mapStateToProps)(Navigation));
