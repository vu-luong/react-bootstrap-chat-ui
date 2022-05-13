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

  const onItemClick = (id) => {
    setActiveChannelId(id);
  };

  const onSend = (message) => {
    console.log(`onSend(${message})`);
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

  const messagesModel = [
    {
      isMe: true,
      message: 'This is a message',
    },
    {
      isMe: false,
      message: 'This is a reply',
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
        <div className="message-list p-3 overflow-auto flex-1">
          <MessageList dataSource={messagesModel} />
        </div>
        <ChatInput onSubmit={onSend} className="mx-3 mb-3" />
      </div>
    </div>
  );
}

export default App;
