import PropTypes from "prop-types";
import "./Favorite.css";

function FavoriteAlbums({ title, id, toggleFavoriteAlbums }) {
  return (
    <tbody>
      <tr>
        <th>Album</th>
        <td>{title}</td>
        <td className="uk-text-right">
          <button
            className="uk-button"
            type="button"
            uk-icon="icon: close;"
            onClick={() => toggleFavoriteAlbums(id)}
          ></button>
        </td>
      </tr>
    </tbody>
  )
}

FavoriteAlbums.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  toggleFavoriteAlbums: PropTypes.func
}

export default FavoriteAlbums;