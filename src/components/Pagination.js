export function Pagination({
  totalPosts,
  paginate,
  currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPosts; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if ((parseInt(currentPage) + 1) <= totalPosts) {
      return (parseInt(currentPage) + 1);
    }
    return currentPage;
  }

  const previousPage = () => {
    if ((parseInt(currentPage) - 1) >= 1) {
      return (parseInt(currentPage) - 1);
    }
    return currentPage;
  }
  return (
    totalPosts > 0 && <ul
      className="uk-pagination uk-flex-center uk-flex-middle"
      uk-margin="true"
    >
      <li onClick={() => paginate(previousPage)}>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <span uk-pagination-previous="true"></span>
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}
          onClick={() => paginate(number)}
          className={(number === currentPage)
            ? "uk-active" : ""}>
          {(number === currentPage)
            ? <span >{number}</span>
            : <a href="#"
              onClick={(e) => e.preventDefault()}>{number}</a>}
        </li>
      ))
      }
      {/* <li className="uk-disabled"><span>...</span></li> */}
      <li onClick={() => paginate(nextPage)} >
        <a href="#" onClick={(e) => e.preventDefault()}>
          <span uk-pagination-next="true"></span>
        </a>
      </li>
    </ul >
  )
}
