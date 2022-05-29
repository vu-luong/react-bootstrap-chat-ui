import React, { useState } from 'react';
import SideBar from '../src/SideBar/SideBar';
import SearchInput from '../src/SearchInput/SearchInput';
import ChatList from '../src/ChatList/ChatList';
import ChatInput from '../src/ChatInput/ChatInput';
import MessageList from '../src/MessageList/MessageList';
import MessageListHeader from '../src/MessageListHeader/MessageListHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './App.css';

function App() {
  const [activeChannelId, setActiveChannelId] = useState(0);
  const [triggerScrollToBottom, setTriggerScrollToBottom] = useState(false);
  const [messagesModel, setMessagesModel] = useState([
    {
      isMe: true,
      message: 'This is a message',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'This is a reply',
    },
    {
      isMe: false,
      message: 'End',
    },

  ]);

  const onItemClick = (id) => {
    setActiveChannelId(id);
    setTriggerScrollToBottom(!triggerScrollToBottom);
  };

  const onSend = (message) => {
    // eslint-disable-next-line no-console
    console.log(`onSend(${message})`);
    setMessagesModel([
      {
        isMe: true,
        message: `${message}`,
      },
      {
        isMe: false,
        message: `${message}`,
      },
      {
        isMe: false,
        message: `${message}`,
      },
      ...messagesModel,
    ]);
  };

  const next = () => {
    const message = 'new message';
    setTimeout(() => {
      setMessagesModel([
        ...messagesModel,
        {
          isMe: true,
          message: `${message}`,
        },
        {
          isMe: false,
          message: `${message}`,
        },
        {
          isMe: false,
          message: `${message}`,
        },
      ]);
    }, 1500);
  };

  const channelsModel = [
    {
      id: 1,
      title: 'Channel 1',
      date: '2022-01-01',
      subtitle: 'This is a message',
    },
    {
      id: 2,
      title: 'Channel 2',
      date: '2021-12-03',
      subtitle: 'Hello, get started',
    },
  ];

  return (
    <div className="d-flex flex-row w-100 h-100 card shadow">
      <div className="chat-list">
        <SideBar
          top={
            <SearchInput />
          }
          center={(
            <ChatList
              dataSource={channelsModel}
              onItemClick={onItemClick}
              activeId={activeChannelId}
            />
          )}
        />
      </div>
      <div className="flex-1 d-flex flex-column">
        <div className="rounded-0 shadow">
          <MessageListHeader data={{ title: 'Channel Name', avatarUrl: '' }} />
        </div>
        <div className="message-list flex-1 mh-100 h-100 overflow-auto">
          <MessageList
            dataSource={messagesModel}
            triggerScrollToBottom={triggerScrollToBottom}
            channelId={activeChannelId}
            next={next}
          />
        </div>
        <ChatInput onSubmit={onSend} className="mx-3 mb-3" />
      </div>
    </div>
  );
}

export default App;
