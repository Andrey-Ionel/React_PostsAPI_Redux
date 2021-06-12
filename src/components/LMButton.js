export function LMButton(props) {
  const { addMoreCards,
    postsQuantityPage,
    postsOrAlbums } = props;
  return (
    postsOrAlbums.length > 0 && <div className="uk-margin">
      <button className="uk-button uk-button-primary 
      uk-width-1-1 uk-margin-small-bottom"
        onClick={() => addMoreCards(postsQuantityPage)}>
        Load more{" "}
        {postsOrAlbums < 1 && <div
          className="uk-margin-small-left"
          uk-spinner="ratio: 0.6"
        >
        </div>}
      </button>
    </div>
  )
}