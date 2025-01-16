import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server's URL

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState(""); // To hold the current user's name

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("users", (userData) => {
      setUsers(userData);
    });

    return () => {
      socket.off("message");
      socket.off("users");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("message", { user: username, text: message });
      setMessage("");
    }
  };

  const handleLogout = () => {
    socket.emit("logout", username); // Emit a logout event to the server
    setUsername(""); // Clear the username state
  };

  const handleAddUser = () => {
    const newUser = prompt("Enter your name:");
    if (newUser) {
      setUsername(newUser); // Set the username
      socket.emit("add_user", newUser); // Emit an add_user event to the server
    }
  };

  return (
    <div className='flex h-screen'>
      {/* Left Side: User List */}
      <div className='w-1/4 bg-gray-800 text-white p-6 flex flex-col'>
        <h2 className='text-xl font-semibold mb-4'>Online Users</h2>
        <ul className='space-y-2'>
          {users.map((user, index) => (
            <li key={index} className='text-sm'>
              {user}
            </li>
          ))}
        </ul>
        {/* Add User Button */}
        {!username && (
          <button
            onClick={handleAddUser}
            className='mt-4 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none'
          >
            Add User
          </button>
        )}
      </div>

      {/* Right Side: Chat Messages and Input */}
      <div className='w-3/4 bg-white p-6 flex flex-col'>
        <h1 className='text-3xl font-bold text-center text-blue-600 mb-4'>
          Chat App
        </h1>

        <button
          onClick={handleLogout}
          className='absolute top-6 right-6 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none'
        >
          Logout
        </button>

        {/* Chat Messages */}
        <div className='mb-4 max-h-96 overflow-y-auto border-b-2 pb-4'>
          {messages.map((msg, index) => (
            <div key={index} className='mb-2 flex items-start'>
              <strong className='text-blue-500'>{msg.user}:</strong>
              <p className='ml-2 text-gray-800'>{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSubmit} className='flex items-center mt-auto'>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 p-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
