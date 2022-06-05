import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import MessageBubble from '../MessageBubble/MessageBubble';
import '../style.css';

function MessageList(props) {
  const {
    dataSource, triggerScrollToBottom, next, hasMore,
  } = props;

  const messagesEnd = useRef(null);
  const [prevTriggerScroll, setPrevTriggerScroll] = useState(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    if (triggerScrollToBottom !== prevTriggerScroll) {
      scrollToBottom();
      setPrevTriggerScroll(triggerScrollToBottom);
    }
  }, [triggerScrollToBottom]);

  return (
    <div className="overflow-auto mh-100 p-3 d-flex flex-column overflow-auto" id="scrollableDiv">
      <InfiniteScroll
        pageStart={0}
        loadMore={next}
        hasMore={hasMore}
        style={{ display: 'flex', flexDirection: 'column' }}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
        threshold={25}
        initialLoad={false}
        isReverse
      >
        {
          dataSource.map((item, i) => (
            <MessageBubble
              // eslint-disable-next-line react/no-array-index-key
              key={i + 1}
              id={i}
              data={item}
            />
          ))
        }
      </InfiniteScroll>
      <div ref={messagesEnd} />
    </div>
  );
}

MessageList.propTypes = {
  dataSource: PropTypes.arrayOf(MessageBubble.propTypes.data),
  triggerScrollToBottom: PropTypes.bool,
  next: PropTypes.func,
  hasMore: PropTypes.bool,
};

MessageList.defaultProps = {
  dataSource: [],
  triggerScrollToBottom: false,
  next: null,
  hasMore: false,
};

export default MessageList;
