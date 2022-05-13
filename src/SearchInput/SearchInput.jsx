import React from 'react';
import './SearchInput.css';
import '../style.css';
import PropTypes from 'prop-types';

function SearchInput(props) {
  const {
    onChange,
    onKeyUp,
    style,
    placeholder,
    onSubmit,
    defaultValue,
    onKeyDown,
    onFilterClick,
    showFilter,
    onSearchClick,
  } = props;
  return (
    <div className="w-100">
      <div className="input-group">
        <div className="input-group-prepend d-none d-sm-block">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onSearchClick}
          >
            <i className="fas fa-search" />
          </button>
        </div>
        <input
          className="form-control ezychat-search-input--input"
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={style}
          onChange={onChange}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
        {
          showFilter
            ? (
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={onFilterClick}
                >
                  <i className="fas fa-sliders-h" />
                </button>
              </div>
            )
            : null
        }
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  showFilter: PropTypes.bool,
  onSearchClick: PropTypes.func,
  onFilterClick: PropTypes.func,
  style: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
};

SearchInput.defaultProps = {
  placeholder: 'Search',
  showFilter: false,
  onSearchClick: null,
  onFilterClick: null,
  style: null,
  defaultValue: null,
  onChange: null,
  onSubmit: null,
  onKeyDown: null,
  onKeyUp: null,
};

export default SearchInput;
