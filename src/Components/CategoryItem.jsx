
const CategoryItem = ({categoryItem}) => {
    return (
        <div className="p-6 border border-base-200 hover:border-info hover:shadow-md flex items-center rounded-2xl mx-4">
            <div>
                <img className="w-[100px] h-[100px] mr-4 object-cover" src={categoryItem.image} alt="" />
            </div>
            <div className="space-y-1.5"> 
                <p className="text-success font-bold">{categoryItem.category}</p>
                <p className="text-neutral text-xs font-medium">{categoryItem.jobsAvailable} Jobs Available</p>
            </div>
        </div>
    );
};

export default CategoryItem;