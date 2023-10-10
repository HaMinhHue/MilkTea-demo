import React, { useState } from 'react';
import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log('Đăng nhập với username:', username, 'và password:', password);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    // Thêm trường quyền truy cập mặc định
  const [role, setRole] = useState('user');

  const handleRegister = () => {
    // Xử lý đăng ký ở đây
    console.log('Đăng ký với username:', username, 'số điện thoại:', phoneNumber, 'email:', email, 'và password:', password);
      // Lưu thông tin tài khoản vào cơ sở dữ liệu với quyền truy cập mặc định
      const newUser = {
        username,
        phoneNumber,
        email,
        password,
        role, // Gán quyền truy cập mặc định
      };
  
      // Tiếp theo, bạn có thể thực hiện lưu trữ thông tin tài khoản vào cơ sở dữ liệu (vd: Firebase, MongoDB, SQL, vv.)
  };
  

  return (
    <div className="form-container">
      <h1>Register</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="PhoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
};

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <div className="container">
      {isLoginPage ? <Login /> : <Register />}
      <div className="toggle-form">
        {isLoginPage ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
        <span onClick={() => setIsLoginPage(!isLoginPage)}>
          {isLoginPage ? 'Đăng ký ngay!' : 'Đăng nhập ngay!'}
        </span>
      </div>
    </div>
  );
};

export default App;

