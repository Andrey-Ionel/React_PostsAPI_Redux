import React from "react";
import PostscardPostsLists
  from "./PostscardPostsLists/PostscardPostsLists";
import { Result } from 'antd';
import { FrownTwoTone } from '@ant-design/icons';

export function PostslistsView({
  currentPageCards,
  toggleFavoritePosts }) {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
      {currentPageCards.length > 0 ?
        currentPageCards?.map((post) => {
          return <PostscardPostsLists key={post.id}
            title={post.title}
            id={post.id}
            body={post.body}
            toggleFavoritePosts={toggleFavoritePosts}
            favoritePost={post.favoritePost}
          />
        })
        : <div className="uk-align-center">
          <Result
            icon={<FrownTwoTone />}
            title="Sorry, posts not found."
          />
        </div>
      }
    </div>
  )
}