import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <div>
      <Link to='/admin'>admin 페이지로 이동</Link>
    </div>
    <h1>
      <Link to='/user'>user 페이지로 이동</Link>
    </h1>
    <h1>Login Page</h1>
  </>
);

export default Login;