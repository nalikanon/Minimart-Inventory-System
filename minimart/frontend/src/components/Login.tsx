import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        <h2 className="login-title">เข้าสู่ระบบ Minimart</h2>
        <p className="login-desc">กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">ชื่อผู้ใช้</label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="login-input"
            placeholder="ชื่อผู้ใช้"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="password">รหัสผ่าน</label>
          <div className="password-input-wrapper">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="login-input"
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="แสดง/ซ่อนรหัสผ่าน"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="login-row">
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="login-checkbox"
              />
              จดจำฉัน
            </label>
            <a href="#" className="login-link">
              ลืมรหัสผ่าน?
            </a>
          </div>
          <button type="submit" className="login-btn">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 