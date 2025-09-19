import footer from '../../assets/footer.png';
const Footer = () => {
    return (
        <div >
            <div className='bg-base-200'>
                <footer className="footer sm:footer-horizontal container mx-auto text-base-content p-10">
                <aside>
                    <img className='w-[250px] md:w-[200px] lg:w-[250px] rounded-xl lg:ml-7 mx-auto lg:mx-0' src={footer} alt="" />
                </aside>
                <nav className=' lg:mx-0 mx-auto'>
                    <h6 className="footer-title mx-auto lg:mx-0">Services</h6>
                    <a className="link link-hover  mx-auto lg:mx-0">Branding</a>
                    <a className="link link-hover mx-auto lg:mx-0">Design</a>
                    <a className="link link-hover mx-auto lg:mx-0">Marketing</a>
                    <a className="link link-hover mx-auto lg:mx-0">Advertisement</a>
                </nav>
                <nav className=' lg:mx-0 mx-auto'>
                    <h6 className="footer-title mx-auto lg:mx-0">Company</h6>
                    <a className="link link-hover mx-auto lg:mx-0">About us</a>
                    <a className="link link-hover mx-auto lg:mx-0">Contact</a>
                    <a className="link link-hover mx-auto lg:mx-0">Jobs</a>
                    <a className="link link-hover mx-auto lg:mx-0">Press kit</a>
                </nav>
                <nav className=' lg:mx-0 mx-auto'>
                    <h6 className="footer-title mx-auto lg:mx-0">Legal</h6>
                    <a className="link link-hover mx-auto lg:mx-0">Terms of use</a>
                    <a className="link link-hover mx-auto lg:mx-0">Privacy policy</a>
                    <a className="link link-hover mx-auto lg:mx-0">Cookie policy</a>
                </nav>
            </footer>
            </div>
            <div className=' bg-base-300'>
                <footer className="footer sm:footer-horizontal footer-center container mx-auto text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
            </div>
        </div>
    );
};

export default Footer;