import PropTypes from "prop-types";
import "./AlbumsCard.css";
import React from "react";

function AlbumsCard({ title, id, toggleFavorite, favoriteAlbum }) {
  const onClickFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(id);
  }

  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img
          src="https://picsum.photos/600/400"
          alt=""
          uk-cover="true"
        />
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>
            {title}
          </p>
        </div>

        <div className="uk-position-top-right uk-overlay">
          <a href="" uk-icon="icon: heart; ratio: 2" onClick={onClickFavorite} className={favoriteAlbum ? "uk-icon favorite-active" : "uk-icon"}></a>
        </div>
      </div>
    </div>
  )
}

AlbumsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  favoriteAlbum: PropTypes.bool,
  toggleFavoriteAlbums: PropTypes.func
}

export default React.memo(AlbumsCard);