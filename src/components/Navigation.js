import FavoritePosts from "./Favorite/FavoritePosts";
import FavoriteAlbums from "./Favorite/FavoriteAlbums";
import React from "react";
import { connect } from "react-redux";

function Navigation(props) {
  const { posts, albums,
    toggleFavoritePosts,
    toggleFavoriteAlbums } = props;

  const favoritePosts = posts.filter((post) => {
    if (post.favoritePost === true) {
      return post.favoritePost;
    }
  })

  const favoriteAlbums = albums.filter((album) => {
    if (album.favoriteAlbum === true) {
      return album.favoriteAlbum;
    }
  })

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
                    <FavoritePosts
                      key={post.id}
                      title={post.title}
                      id={post.id}
                      toggleFavoritePosts={toggleFavoritePosts}
                    />
                  ))}
                  {favoriteAlbums?.map((album) => (
                    <FavoriteAlbums
                      key={album.id}
                      title={album.title}
                      id={album.id}
                      toggleFavoriteAlbums={toggleFavoriteAlbums}
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