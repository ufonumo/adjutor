import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Container = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default Container;
