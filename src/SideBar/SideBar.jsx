import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

function SideBar(props) {
  const { top, center, bottom } = props;
  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="">
        {top}
      </div>
      <div className="overflow-auto mt-2 rounded w-100">
        {center}
      </div>
      <div className="mt-auto">
        {bottom}
      </div>
    </div>
  );
}

SideBar.propTypes = {
  top: PropTypes.element,
  center: PropTypes.element,
  bottom: PropTypes.element,
};

SideBar.defaultProps = {
  top: null,
  center: null,
  bottom: null,
};

export default SideBar;
