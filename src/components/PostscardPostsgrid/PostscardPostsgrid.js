import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './PostscardPostsgrid.css';

function PostscardPostsgrid({
  body,
  title,
  id,
  toggleFavorite,
  favoritePost }) {
  const onClickFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(id);
  }
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {title && `${title.slice(0, 13)}...`}
            <a href="/" className={favoritePost
              ? "uk-icon-link favorite-active"
              : "uk-icon-link"}
              uk-icon="heart"
              onClick={onClickFavorite}></a>
          </h3>
        </div>
        <div className="uk-card-body">
          <p>
            {body?.length > 120 ? `${body.slice(0, 120)} ...` : body}
          </p>
        </div>
        <div className="uk-card-footer">
          <NavLink to={{ pathname: "/Post/" + id, postTitle: title, postBody: body }}
            className="uk-button uk-button-text" >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  )
}

PostscardPostsgrid.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  favoritePost: PropTypes.bool,
  toggleFavoritePosts: PropTypes.func
}

export default React.memo(PostscardPostsgrid);
