import location1 from '../../assets/location1.png';
import location2 from '../../assets/location2.png';
import location3 from '../../assets/location3.png';
import location4 from '../../assets/location4.png';
import location5 from '../../assets/location5.png';
import location6 from '../../assets/location6.png';
const Location = () => {
    return (
        <div className="container mx-auto my-16">
            <div className="flex flex-col justify-center items-center space-y-3 mb-12" >
                <h3 className="text-success text-4xl font-semibold">Jobs by Location</h3>
                <p className="text-neutral font-medium px-5 text-center">Find your favorite jobs and get the benefits of yourself</p>
            </div>
            <div className='grid lg:grid-cols-9 md:grid-cols-2 grid-cols-1 gap-5 mb-5 mx-2.5'>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-2'>
                    <img className='rounded-xl w-full h-[222px]' src={location1} alt="" />
                    <p className='text-xl font-medium text-success'> Paris, France</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>5 Vacancy</p>
                        <p>120 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-3'>
                    <img className='rounded-xl w-full h-[222px]' src={location2} alt="" />
                    <p className='text-xl font-medium text-success'>London, England</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>7 Vacancy</p>
                        <p>68 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-4'>
                    <img className='rounded-xl w-full h-[222px]' src={location3} alt="" />
                    <p className='text-xl font-medium text-success'>New York, USA</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>9 Vacancy</p>
                        <p>80 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-3'>
                    <img className='rounded-xl w-full h-[222px]' src={location4} alt="" />
                    <p className='text-xl font-medium text-success'>Amsterdam, Holland</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>16 Vacancy</p>
                        <p>86 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-4'>
                    <img className='rounded-xl w-full h-[222px]' src={location5} alt="" />
                    <p className='text-xl font-medium text-success'>Copenhagen, Denmark</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>39 Vacancy</p>
                        <p>186 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 lg:col-span-2'>
                    <img className='rounded-xl w-full h-[222px]' src={location6} alt="" />
                    <p className='text-xl font-medium text-success'>Berlin, Germany</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>15 Vacancy</p>
                        <p>632 companies</p>
                    </div>
                </div>
            </div>
            {/* <div className='grid grid-cols-9 gap-5'>
                <div className='border border-base-200 rounded-xl p-2.5 col-span-3'>
                    <img className='rounded-xl w-full h-[222px]' src={location4} alt="" />
                    <p className='text-xl font-medium text-success'>Amsterdam, Holland</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>16 Vacancy</p>
                        <p>86 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 col-span-4'>
                    <img className='rounded-xl w-full h-[222px]' src={location5} alt="" />
                    <p className='text-xl font-medium text-success'>Copenhagen, Denmark</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>39 Vacancy</p>
                        <p>186 companies</p>
                    </div>
                </div>
                <div className='border border-base-200 rounded-xl p-2.5 col-span-2'>
                    <img className='rounded-xl w-full h-[222px]' src={location6} alt="" />
                    <p className='text-xl font-medium text-success'>Berlin, Germany</p>
                    <div className='flex justify-between items-center text-xs font-medium text-neutral'>
                        <p>15 Vacancy</p>
                        <p>632 companies</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Location;