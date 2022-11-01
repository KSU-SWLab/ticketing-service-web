import React from 'react';

function LoginPage() {
  return (
    <div id="login">
      <h1>Login</h1>
      <form method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
