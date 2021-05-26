import React from 'react';

import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height="100vh"
        projectID="fdd79413-44e1-43a9-886b-b1cd7afb09cc"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
        />
    );

}

export default App;
