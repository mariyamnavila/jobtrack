import CategoryMain from "../Components/HomeLayout/CategoryMain";
// import Category from "../Components/HomeLayout/Category";
import Hero from "../Components/HomeLayout/Hero";
import Hiring from "../Components/HomeLayout/Hiring";
import Numbers from "../Components/HomeLayout/Numbers";

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Category></Category> */}
            <CategoryMain></CategoryMain>
            <Hiring></Hiring>
            <Numbers></Numbers>
        </div>
    );
};

export default HomeLayout;