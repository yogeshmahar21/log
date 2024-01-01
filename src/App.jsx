import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {

} from "@fortawesome/free-brands-svg-icons";

function App() {
 
    return (
        <>
            <div className="head-div-login">
                <div className="short-box-content">
                    <div className="login-form-head">
                        <h2>Login Form</h2>
                    </div>
                    <div className="flex mt32">
                        <div className="input-div-2">
                            <FontAwesomeIcon
                                className="user-and-lock-icon"
                                icon={faUser}
                            />
                        </div>
                        <input type="text" placeholder="Email or Phone" />
                    </div>
                    <div className="flex mt20">
                        <div className="input-div-2">
                            <FontAwesomeIcon
                                className="user-and-lock-icon"
                                icon={faLock}
                            />
                        </div>
                        <input type="password" placeholder="Password" />
                    </div>
                    <p>Forgot password?</p>
                    <a className="login-btn">Login</a>
                    <p>
                        Not a member?&#160;
                        <p>Signup now</p>
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
