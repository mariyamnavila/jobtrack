import CategoryMain from "../Components/HomeLayout/CategoryMain";
// import Category from "../Components/HomeLayout/Category";
import Hero from "../Components/HomeLayout/Hero";
import Hiring from "../Components/HomeLayout/Hiring";

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Category></Category> */}
            <CategoryMain></CategoryMain>
            <Hiring></Hiring>
        </div>
    );
};

export default HomeLayout;