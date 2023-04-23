import PropTypes from 'prop-types';

function Comments({ author, email, commentTitle }) {
  return (
    <div className="uk-comments">
      <article className="uk-comment">
        <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
          <div className="uk-width-expand">
            <h4 className="uk-comment-title uk-margin-remove">
              <a className="uk-link-reset"
                href="#"
                onClick={(e) => e.preventDefault()}>
                Author: {author}
              </a>
            </h4>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li>
                <a href="#"
                  onClick={(e) => e.preventDefault()}>
                  Email: {email}</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="uk-comment-body">
          <p>
            {commentTitle}
          </p>
        </div>
      </article>
    </div>
  )
}

Comments.propTypes = {
  author: PropTypes.string,
  email: PropTypes.string,
  commentTitle: PropTypes.string,
}

export default Comments;
