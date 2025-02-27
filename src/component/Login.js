import React, {useState} from 'react';
import '../assets/scss/component/Login.scss';
import Header from '../layout/Header';
import axios from 'axios';

function Login(props) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post('http://localhost:8080/user/login', {
                accountId : id,
                password : password
            });
            console.log(response.data);

            localStorage.setItem("accessToken", response.data.data.accessToken);
            // window.location.href = "/vehicle";

        } catch(err) {
            console.error(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    return (
        <div>
            <Header />
            <div className={"Login"}>
                <p>로그인</p>
                <div>
                    <form
                        className={"Main"}
                        onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type={"text"}
                            name={"id"}
                            placeholder={"ID"}
                            value={id}
                            onChange={e => setId(e.target.value)}
                            autoFocus
                        />
                        <input 
                            type={"password"}
                            name={"password"}
                            placeholder={'Password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={e => {
                                if (e.key == "Enter") {
                                    e.preventDefault();
                                    handleLogin(e);
                                }
                            }}
                        />
                        <button
                            className={"Button"}
                            onClick={handleLogin}>
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;