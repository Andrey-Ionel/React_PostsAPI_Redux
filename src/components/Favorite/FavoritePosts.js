import PropTypes from "prop-types";
import "./Favorite.css";

function FavoritePosts({ title, id, toggleFavoritePosts }) {
  return (
    <tbody>
      <tr>
        <th>Post</th>
        <td>{title}</td>
        <td className="uk-text-right">
          <button
            className="uk-button"
            type="button"
            uk-icon="icon: close;"
            onClick={() => toggleFavoritePosts(id)}
          ></button>
        </td>
      </tr>
    </tbody>
  )
}

FavoritePosts.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  toggleFavoritePosts: PropTypes.func
}

export default FavoritePosts;