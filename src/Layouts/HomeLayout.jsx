import CategoryMain from "../Components/HomeLayout/CategoryMain";
import ClientReviews from "../Components/HomeLayout/ClientReviews";
import FindJob from "../Components/HomeLayout/FindJob";
// import Category from "../Components/HomeLayout/Category";
import Hero from "../Components/HomeLayout/Hero";
import Hiring from "../Components/HomeLayout/Hiring";
import Location from "../Components/HomeLayout/Location";
import Newsletter from "../Components/HomeLayout/Newsletter";
import Numbers from "../Components/HomeLayout/Numbers";

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            {/* <Category></Category> */}
            <CategoryMain></CategoryMain>
            <Hiring></Hiring>
            <FindJob></FindJob>
            <Numbers></Numbers>
            <Location></Location>
            <ClientReviews></ClientReviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default HomeLayout;