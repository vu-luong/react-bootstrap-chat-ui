import React from 'react';
import PropTypes from 'prop-types';
import './ChatItem.css';
import '../style.css';
import classNames from 'classnames';

function ChatItem(props) {
  const {
    data, onItemClick, active,
  } = props;

  const onClick = () => {
    onItemClick(data.id);
  };
  return (
    <div
      role="button"
      className={classNames(
        'list-group-item list-group-item-action d-flex justify-content-center p-0 cursor-pointer',
        (active) ? 'active' : '',
      )}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
    >
      <div className="d-flex p-2">
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
      <div className="flex-1 d-none d-sm-flex flex-column justify-content-center overflow-hidden pr-2">
        <div className="d-flex align-items-center">
          <div className="white-space-nowrap text-overflow-ellipsis fs-100rem font-weight-bold overflow-hidden flex-1">
            {data.title}
          </div>
          <div className="fs-80rem overflow-hidden">
            {data.date}
          </div>
        </div>
        <div className="d-flex">
          <div className="white-space-nowrap text-overflow-ellipsis overflow-hidden flex-1">
            {data.subtitle || 'Chat now'}
          </div>
          <div className="ezychat-chat-item--body-bottom-unread">
            {data.unread > 0 && <span>{data.unread}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

ChatItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatarUrl: PropTypes.string,
    date: PropTypes.string,
    unread: PropTypes.number,
    active: PropTypes.bool,
  }),
  active: PropTypes.bool,
  onItemClick: PropTypes.func,
};

ChatItem.defaultProps = {
  data: {},
  onItemClick: null,
  active: null,
};

export default ChatItem;
