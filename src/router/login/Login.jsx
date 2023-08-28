import React, { useState } from 'react';
import './Login.css';
import login from "../../assets/login.jpg"
import { Link } from 'react-router-dom'
import { PiUserCircleFill } from 'react-icons/pi'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = (e) => {
        e.preventDefault();
        let newUser = { username, password };
        console.log(newUser);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="main_container">
            <div className="login_box">
                <img className='login__logo' src={login} alt="" />
                <h1 className="login__text">Royhatdan Otish</h1>
                <form onSubmit={handleLogin} className="login_form">
                    <div className="login_input_container">
                        <input type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input_field" required />
                        <PiUserCircleFill className='login__user' />
                        <label className="input_label">Foydalanuvchi nomingiz</label>
                    </div>
                    <div className="login_input_container">
                        <input type={showPassword ? 'text' : 'password'} 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="input_field" required />
                        {showPassword ? (
                            <AiFillEye className='login__password' onClick={togglePasswordVisibility} />
                        ) : (
                            <AiFillEyeInvisible className='login__password' onClick={togglePasswordVisibility} />
                        )}
                        <label className="input_label">Parolingiz</label>
                    </div>
                    <button type="submit" className="submit_button">Jo'natish</button>
                </form>
                <Link to={"/"}>
                    <button className='login__home'>Bosh Sahifaga Qaytish</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
