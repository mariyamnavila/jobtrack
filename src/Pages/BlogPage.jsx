import blog from '../assets/newsletter2.jpg';
const BlogPage = () => {
    return (
        <div>
            <div className="bg-base-300 py-[150px]">
            </div>
            <div className="mx-auto max-w-5xl relative -top-30 bg-white py-20">
                <h3 className="text-4xl font-semibold text-center mx-auto lg:w-2/3 text-success">Discover JobTrack: Your Ultimate Partner in Finding the Right Job</h3>
                <div className="text-neutral font-medium max-w-2xl lg:mx-auto space-y-4 mt-6 mx-4">
                    <p>In today’s fast-moving world, finding the perfect job can feel overwhelming. That’s where JobTrack comes in — a smart, modern platform built to make your job search simpler, faster, and more personalized than ever before.</p>
                    <p>Whether you’re a fresh graduate searching for your first role or a professional aiming for the next big career move, JobTrack connects you with top companies and opportunities that truly match your skills and interests.</p>
                </div>
                <img className='lg:max-w-4xl md:w-[700px] w-[300px] mx-auto  rounded-xl my-5' src={blog} alt="" />
                <ul className="text-neutral max-w-2xl lg:mx-auto mx-7 space-y-3 mt-6 list-disc">
                    <h5 className="text-2xl font-semibold text-center text-success">What Makes JobTrack Different</h5>
                    <li className='text-success font-medium text-xl '>Smart Job Matching</li>
                    <p>Our system filters and suggests jobs tailored to your experience, preferences, and career goals — no more endless scrolling through irrelevant listings.</p>
                    <li className='text-success font-medium text-xl '>Verified Companies</li>
                    <p>Every company on JobTrack is carefully reviewed to ensure transparency and trust, so you can apply with confidence.</p>
                    <li className='text-success font-medium text-xl '>Easy Applications</li>
                    <p>Apply for jobs with just a few clicks. Upload your resume once and start applying instantly.</p>
                    <li className='text-success font-medium text-xl '>Career Resources</li>
                    <p>From interview tips to resume-building advice, JobTrack offers helpful tools to support your professional growth.</p>
                </ul>
                <div className="text-neutral max-w-2xl lg:mx-auto mx-4 space-y-3 mt-6 ">
                    <h5 className="text-2xl font-semibold text-center text-success">Built for Job Seekers and Employers</h5>
                    <p>JobTrack isn’t just for candidates — it’s a platform where employers and talent connect effortlessly. Companies can post openings, manage applications, and discover top talent with powerful search filters.</p>
                    <p>For job seekers, it’s a space that values your time and effort. You get access to verified listings, instant alerts, and career tips — all in one place.</p>
                </div>
                <div className="text-neutral max-w-2xl lg:mx-auto mx-4  space-y-3 mt-6 ">
                    <h5 className="text-2xl font-semibold text-center text-success">Our Mission</h5>
                    <p>At JobTrack, our mission is to empower people to find meaningful work. We believe that every career journey deserves guidance, opportunity, and growth. Our goal is to make job hunting less stressful and more rewarding — because your dream job shouldn’t be hard to find.</p>
                </div>
                <div className="text-neutral max-w-2xl lg:mx-auto mx-4  space-y-3 mt-6 ">
                    <h5 className="text-2xl font-semibold text-center text-success">Final Thoughts</h5>
                    <p>Finding the right job isn’t just about luck — it’s about having the right tools. JobTrack makes it easy to explore, apply, and land your next big opportunity. Start your journey today and let JobTrack help you take the next step in your career with confidence.</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;