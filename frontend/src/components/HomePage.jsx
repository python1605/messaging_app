import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Encrypted Chat App</h1>
      <div>
        <Link to='/register'>
          <button>Register</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
