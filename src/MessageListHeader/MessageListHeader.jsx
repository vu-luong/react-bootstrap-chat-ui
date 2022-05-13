import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

function MessageListHeader(props) {
  const { data } = props;
  return (
    <div className="d-flex flex-row bg-white p-3 justify-content-between">
      <div className="d-flex align-items-center">
        {
          data.avatarUrl
            ? (
              <img
                className="w-50px h-50px bg-light-blue rounded-circle border-0 img-fluid"
                alt="avatar"
                src={data.avatarUrl}
              />
            )
            : (
              <button type="button" className="btn btn-success rounded-circle border-0 w-40px h-40px">
                <i className="fas fa-users" />
              </button>
            )
        }
      </div>
      <div className="d-none d-sm-flex flex-1 flex-column justify-content-center ml-1 overflow-hidden">
        {data.title}
      </div>
      <div className="d-flex flex-row align-items-center">
        <button type="button" className="btn btn-outline-primary rounded-circle border-0 w-40px h-40px">
          <i className="fas fa-phone" />
        </button>
        <button type="button" className="btn btn-outline-primary rounded-circle border-0 w-40px h-40px">
          <i className="fas fa-video" />
        </button>
        <button type="button" className="btn btn-outline-primary rounded-circle border-0 w-40px h-40px">
          <i className="fas fa-ellipsis-h" />
        </button>
      </div>
    </div>
  );
}

MessageListHeader.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

MessageListHeader.defaultProps = {
  data: {},
};

export default MessageListHeader;
