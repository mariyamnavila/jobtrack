import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomeLayout/Navbar";
import Footer from "../Components/HomeLayout/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;