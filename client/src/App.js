import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
firebase.initializeApp({
  apiKey: "AIzaSyBUXzoa9W3YrDzAqofMBpU24QZkYaSvJeU",
    authDomain: "live-chat-travel-world.firebaseapp.com",
    projectId: "live-chat-travel-world",
    storageBucket: "live-chat-travel-world.appspot.com",
    messagingSenderId: "856362149675",
    appId: "1:856362149675:web:4e650fb9829a8d8dc2476e",
    measurementId: "G-6B61MBCPRR"
})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
        </section> 
    </div>
  );
}
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google!</button>
  )
}
function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>
}
function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createAt').limit(25);
  const [messages] = useCollectionData(query, {idFeild: 'id'});
  return (
    <div> 
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      {ChatMessage()}
    </div>)
  
}

export default App;
