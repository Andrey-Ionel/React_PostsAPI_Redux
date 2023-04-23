import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from '../Hooks/UseDebounce';
import {
  getSortPostsRequest,
  getSearchPostsRequest
} from '../store/actions';
import { viewStatus } from '../utils/enums'

function Filters(props) {
  const {
    viewType,
    setViewType,
    setQuantityPosts,
    postsQuantityPage,
    getSortPostsRequest,
    getSearchPostsRequest } = props;
  const [name, setName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [orderValue, setOrderValue] = useState("asc");
  const [, setSearchResults] = useState([]);
  const debouncedValue = useDebounce(name, 500);

  useEffect((value) => {
    if (value !== value) {
      getSortPostsRequest(value);
    }
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      getSearchPostsRequest(debouncedValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results)
        })
    } else if (isSearching === true) {
      setSearchResults([]);
      getSortPostsRequest(orderValue);
      setIsSearching(false);
    }
  },
    [debouncedValue]
  )

  const onPostsOrderChange = (e) => {
    getSortPostsRequest(e.target.value);
    setOrderValue(e.target.value);
  }

  const activeList = viewType === viewStatus.list ? "uk-active" : "";
  const activeGrid = viewType === viewStatus.grid ? "uk-active" : "";

  const onKeyPressDefault = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
    }
  }
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form
        className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span uk-search-icon="true"></span>
        {isSearching && <span
          className="uk-search-icon uk-search-icon-flip"
          uk-spinner="ratio: 0.6"
        ></span>}
        <input
          value={name}
          onKeyPress={onKeyPressDefault}
          onChange={(e) => { setIsSearching(true); setName(e.target.value); }}
          className="uk-search-input"
          type="search"
          placeholder="Search..."
        />
      </form>
      <select value={orderValue}
        className="uk-select uk-width-small uk-margin-auto-left"
        onChange={onPostsOrderChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select value={postsQuantityPage}
        className="uk-select uk-width-small uk-margin-left"
        onChange={(e) => setQuantityPosts(e.target.value)}>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="24">24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <button
          className={`uk-button uk-button-default ${activeList}`}
          onClick={() => { setViewType(viewStatus.list) }}>
          <span uk-icon="icon:  grid"></span>
        </button>
        <button
          className={`uk-button uk-button-default ${activeGrid}`}
          onClick={() => { setViewType(viewStatus.grid) }}>
          <span uk-icon="icon:  list"></span>
        </button>
      </div>
    </div >
  )
}

const mapDispatchToProps = {
  getSearchPostsRequest,
  getSortPostsRequest
}

export default React.memo(connect(null,
  mapDispatchToProps)(Filters));
