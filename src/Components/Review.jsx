import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";
const Review = ({ singleReview }) => {
    const { name, profile, position, review, rating } = singleReview

    return (
        <div className="shadow-xl my-11 p-7 space-y-5 border border-base-200 rounded-xl mx-3 h-full">
            <div className="avatar absolute -top-0">
                <div className="w-20 rounded-full">
                    <img src={profile} />
                </div>
            </div>
            <p className="text-success font-bold text-2xl pt-6">{name}</p>
            <div className="flex justify-between items-center">
                <p className="text-secondary font-semibold">{position}</p>
                <Rating
                    emptySymbol={<IoIosStarOutline className="text-yellow-400"/>}
                    fullSymbol={<IoIosStar className="text-yellow-400" />}
                    initialRating={rating}
                    readonly
                />
            </div>
            <div className="border border-base-200 my-7 border-dotted"></div>
            <p className="text-neutral italic">{review}</p>
        </div>
    );
};

export default Review;