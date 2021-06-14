import React from "react";
import PostscardPostsLists
  from "./PostscardPostsLists/PostscardPostsLists";

export function PostslistsView({
  currentPageCards,
  toggleFavorite }) {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {currentPageCards?.map((post) => {
        return <PostscardPostsLists key={post.id}
          title={post.title}
          id={post.id}
          body={post.body}
          toggleFavorite={toggleFavorite}
          favoritePost={post.favoritePost}
        />
      })}
    </div>
  )
}