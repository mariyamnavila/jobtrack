import { Outlet } from "react-router-dom";
import Footer from "../Components/HomeLayout/Footer";
import Navbar from "../Components/HomeLayout/Navbar";
import Newsletter from "../Components/HomeLayout/Newsletter";

const BlogLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;