import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PostscardPostsLists.css';

function PostscardPostsLists({
  body,
  title,
  id,
  thumbnailUrl,
  toggleFavorite,
  favoritePost
}) {
  const onClickFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(id);
  }

  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom
        uk-child-width-1-2@s uk-grid-collapse uk-margin"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="" uk-cover="true" />
          <canvas width="600" height="400"></canvas>
        </div>
        {!!thumbnailUrl &&
          <div className="uk-card-media-left uk-cover-container">
            <img src={thumbnailUrl} alt="" uk-cover="true"/>
            <canvas width="600" height="400"></canvas>
          </div>
        }
        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom
             uk-flex uk-flex-middle uk-flex-between">
              {title && `${title.slice(0, 13)}...`}
              <a href="/" className={favoritePost
                ? "uk-icon-link favorite-active"
                : "uk-icon-link"}
                uk-icon="heart"
                onClick={onClickFavorite}></a>
            </h3>
            <p>
              {body?.length > 120 ? `${body.slice(0, 120)} ...` : body}
            </p>
            <NavLink to={{ pathname: "/Post/" + id, postTitle: title, postBody: body }}
              className="uk-button uk-button-text" >
              Read more
            </NavLink>
          </div>
        </div>
      </div>
    </div >
  );
}

PostscardPostsLists.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  favoritePost: PropTypes.bool,
  toggleFavoritePosts: PropTypes.func
}

export default React.memo(PostscardPostsLists);
