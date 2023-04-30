import React from 'react';
import PostscardPostsgrid
  from './PostscardPostsgrid/PostscardPostsgrid';

export function PostsgridView({
  currentPageCards,
  toggleFavorite }) {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      {currentPageCards?.map((post) => (
        <PostscardPostsgrid key={post.id}
          title={post.title}
          id={post.id}
          body={post.body}
          thumbnailUrl={post.thumbnailUrl}
          toggleFavorite={toggleFavorite}
          favoritePost={post.favoritePost}
        />
      ))}
    </div>
  )
}
