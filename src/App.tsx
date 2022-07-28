import "./assets/stylesheets/base.scss";
import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/login/login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
