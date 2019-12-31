import React from 'react';

const Login = () => {
  return (
    <div>
      <div id='login'>
        <div className='container'>
          <div className='login-box'>
            <h3>Login</h3>

            <p>Please enter your email address and password.</p>

            <form>
              <div className='input-details'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email address'
                />

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>

              <br />
              <div className='remember-me'>
                <input type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember'>Remember me</label>
              </div>

              <button className='login'>Login</button>
            </form>

            <a href='/' className='forgot'>
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
