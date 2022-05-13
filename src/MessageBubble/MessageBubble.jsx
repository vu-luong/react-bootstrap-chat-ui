import React from 'react';
import PropTypes from 'prop-types';
import './MessageBubble.css';
import '../style.css';
import classNames from 'classnames';

function MessageBubble(props) {
  const { data } = props;
  const align = data.isMe ? 'align-self-end' : 'align-self-start';
  const bg = data.isMe ? 'bg-primary' : 'bg-secondary';
  const margin = data.isMe ? 'ms-5' : 'me-5';
  return (
    <div
      className={
        classNames(
          'ezychat-message-bubble--container px-2 py-1 text-light my-1',
          align,
          bg,
          margin,
        )
      }
    >
      <div>{data.message}</div>
    </div>
  );
}

MessageBubble.propTypes = {
  data: PropTypes.shape({
    isMe: PropTypes.bool,
    message: PropTypes.string,
  }),
};

MessageBubble.defaultProps = {
  data: null,
};

export default MessageBubble;
