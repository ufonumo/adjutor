import "./assets/stylesheets/base.scss";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login/login";
import ForgotPassword from "./auth/forgot-password/ForgotPassword";
import SignUpCreate from "./auth/signup-create/SignupCreate";
import SignUpAccount from "./auth/signup-account/SignupAccount";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/signUp-create" element={<SignUpCreate />} />
                <Route path="/signUp-account" element={<SignUpAccount />} />
            </Routes>
        </div>
    );
}

export default App;
