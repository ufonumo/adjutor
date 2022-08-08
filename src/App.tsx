import { Route, Routes } from "react-router-dom";
import "./assets/stylesheets/base.scss";
import "antd/dist/antd.css";
import Login from "./auth/login/login";
import ForgotPassword from "./auth/forgot-password/ForgotPassword";
import SignUpCreate from "./auth/signup-create/SignupCreate";
import SignUpAccount from "./auth/signup-account/SignupAccount";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Wallet from "./pages/business/wallet/Wallet";
import BusinessApps from "./pages/business/business-app/BusinessApps";
import Audit from "./pages/business/audit/Audit";
import Settings from "./pages/settings/Settings";
import Karma from "./pages/operations/karma/Karma";
import Operations from "./pages/operations/Operations";
import OfferSetting from "./pages/operations/decision-models/offerSetting/OfferSetting";
import DecisionModel from "./pages/operations/decision-models/decisonModel/DecisionModel";
import Container from "./Container";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/signUp-create" element={<SignUpCreate />} />
                <Route path="/signUp-account" element={<SignUpAccount />} />

                <Route path="/" element={<Container />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/business-app" element={<BusinessApps />} />
                    <Route path="/audit" element={<Audit />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/karma" element={<Karma />} />
                    <Route path="/offer-setting" element={<OfferSetting />} />
                    <Route path="/decision-model" element={<Operations />} />
                    <Route path="/decision-sub" element={<DecisionModel />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
