import CategoryMain from "../Components/HomeLayout/CategoryMain";
// import Category from "../Components/HomeLayout/Category";
import Hero from "../Components/HomeLayout/Hero";

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Category></Category> */}
            <CategoryMain></CategoryMain>
        </div>
    );
};

export default HomeLayout;