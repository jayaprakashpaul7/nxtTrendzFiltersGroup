import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    onChangeSearch,
    onChangeCategory,
    onChangeRating,
    activeCategoryid,
    activeRatingId,
    onEnter,
    clearFilters,
  } = props

  const onChangeInput = event => {
    onChangeSearch(event.target.value)
  }

  const enter = event => {
    if (event.key === 'Enter') {
      onEnter()
    }
  }

  const onClickCategoryId = () => {
    onChangeCategory(activeCategoryid)
  }

  const onClickRatingId = () => {
    onChangeRating(activeRatingId)
  }

  const onClickClear = () => {
    clearFilters()
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return (
      <div>
        {categoryOptions.map(each => (
          <li key={each.categoryId} onClick={onClickCategoryId}>
            <p>{each.name}</p>
          </li>
        ))}
      </div>
    )
  }

  const renderRatingList = () => {
    const {ratingsList} = props
    return (
      <ul>
        {ratingsList.map(each => (
          <li key={each.ratingId} onClick={onClickRatingId}>
            <img
              src={each.imageUrl}
              className="image"
              alt={`rating ${each.ratingId}`}
            />
            <p className="p1">& up</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <input
        type="search"
        onChange={onChangeInput}
        value={searchInput}
        onKeyDown={enter}
        placeholder="Search"
      />
      <div>
        <h1>Category</h1>
        {renderCategoryList()}
      </div>
      <div>
        <h1>Rating</h1>
        {renderRatingList()}
      </div>
      <button onClick={onClickClear}>Clear</button>
    </div>
  )
}

export default FiltersGroup
