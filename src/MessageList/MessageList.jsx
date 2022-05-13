import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import MessageBubble from '../MessageBubble/MessageBubble';
import '../style.css';

function MessageList(props) {
  const { dataSource } = props;

  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div>
      <div className="d-flex flex-column">
        {
          dataSource.map((item, i) => (
            <MessageBubble
              key={uuid()}
              id={i}
              data={item}
            />
          ))
        }
      </div>
      <div ref={messagesEnd} />
    </div>
  );
}

MessageList.propTypes = {
  dataSource: PropTypes.arrayOf(MessageBubble.propTypes.data),
};

MessageList.defaultProps = {
  dataSource: [],
};

export default MessageList;
