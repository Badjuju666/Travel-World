import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "fdd79413-44e1-43a9-886b-b1cd7afb09cc", 'User-Name': username, 'User-Secret': password };
        try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
            // username and password- want to ask chat engine to give us back messages.
        } catch (error) {
            setError('wrong password mmmmhmm')
                    // error-> try new user...
        }
        
        // this means successfully logged in

    }

return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title"> Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                    <button type="submit" className="button">
                        <span> Start Chatting! </span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
);
}
export default LoginForm