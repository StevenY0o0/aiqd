import React from 'react';
import './login.scss'
import createHistory from 'history/createHashHistory';
class LoginPage extends React.Component {


    render() {
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>Welcome to the ReactSPA</p>
                    <div className="loginWrap">
                    	这是登录页
                    </div>
                </div>
            </div>
        );
    }
}
let Login = create()(LoginPage);
export default Login;