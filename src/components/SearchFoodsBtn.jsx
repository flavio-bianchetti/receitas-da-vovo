import PropTypes from 'prop-types';
import React from 'react';

function SearchFoodsBtn({ title, testid, searchFoodsBtnOnClick, page }) {
  return (
    <button
      type="button"
      data-testid={ testid }
      name={ page }
      onClick={ (e) => searchFoodsBtnOnClick(e) }
      className="profileBtn"
    >
      {title}
    </button>
  );
}

SearchFoodsBtn.propTypes = {
  page: PropTypes.string.isRequired,
  searchFoodsBtnOnClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchFoodsBtn;
