import React, { useState } from "react";
import { connect } from "react-redux";
import { Pagination } from "../components/Pagination";
import AlbumsCard from "../components/AlbumsCard/AlbumsCard";
import { LMButton } from "../components/LMButton";
import Navigation from "../components/Navigation";
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';
import { toggleFavoriteAlbumsRequest } from "../store/actions/index"

function Albums(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsQuantityPage, setPostsQuantityPage] = useState(6);

  const { albums, toggleFavoriteAlbumsRequest } = props;
  const indexOfLastPost = currentPage * postsQuantityPage;
  const indexOfFirstPost = indexOfLastPost - postsQuantityPage;
  const totalPosts = Math.ceil(albums.length / postsQuantityPage);
  const currentPageCards = albums.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const addMoreCards = (value) => {
    const addCards = (parseInt(value) + 6);
    setPostsQuantityPage(addCards);
  }

  const toggleFavoriteAlbums = (id) => {
    albums?.map((album) => {
      if (album.id === id && album.favoriteAlbum === undefined) {
        album.favoriteAlbum = true;
        toggleFavoriteAlbumsRequest(id, album.favoriteAlbum);
      } else if (album.id === id && album.favoriteAlbum === false) {
        album.favoriteAlbum = true;
        toggleFavoriteAlbumsRequest(id, album.favoriteAlbum);
      } else if (album.id === id && album.favoriteAlbum === true) {
        album.favoriteAlbum = false;
        toggleFavoriteAlbumsRequest(id, album.favoriteAlbum);
      }
      return album;
    })
  }
  return (
    <main className="uk-main">
      <Navigation
        toggleFavorite={toggleFavoriteAlbums} />
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            {currentPageCards.length > 0 ?
              currentPageCards?.map((album) => (
                <AlbumsCard key={album.id}
                  id={album.id}
                  title={album.title}
                  toggleFavorite={toggleFavoriteAlbums}
                  favoriteAlbum={album.favoriteAlbum}
                />
              ))
              : <div className="uk-align-center">
                <Result
                  icon={<FrownTwoTone />}
                  title="Sorry, albums not found."
                />
              </div>}
          </div>
          <LMButton
            postsOrAlbums={albums}
            postsQuantityPage={postsQuantityPage}
            addMoreCards={addMoreCards} />
          <Pagination
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage} />
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  albums: state.albumsReducer.albums,
});

const mapDispatchToProps = {
  toggleFavoriteAlbumsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)