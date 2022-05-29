import React, { useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import MessageBubble from '../MessageBubble/MessageBubble';
import '../style.css';

function MessageList(props) {
  const {
    dataSource, triggerScrollToBottom, next,
  } = props;

  const messagesEnd = useRef(null);
  const [prevTriggerScroll, setPrevTriggerScroll] = useState(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  if (triggerScrollToBottom !== prevTriggerScroll) {
    scrollToBottom();
    setPrevTriggerScroll(triggerScrollToBottom);
  }

  return (
    <div className="overflow-auto mh-100 p-3 d-flex flex-column-reverse" id="scrollableDiv">
      <div ref={messagesEnd} />
      <InfiniteScroll
        dataLength={dataSource.length}
        next={next}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        inverse
        hasMore
        loader={<div className="loader" key={0}>Loading ...</div>}
        scrollableTarget="scrollableDiv"
      >
        {
          dataSource.map((item, i) => (
            <MessageBubble
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              id={i}
              data={item}
            />
          ))
        }
      </InfiniteScroll>
    </div>
  );
}

MessageList.propTypes = {
  dataSource: PropTypes.arrayOf(MessageBubble.propTypes.data),
  triggerScrollToBottom: PropTypes.bool,
  next: PropTypes.func,
};

MessageList.defaultProps = {
  dataSource: [],
  triggerScrollToBottom: false,
  next: null,
};

export default MessageList;
