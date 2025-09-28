import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Register </p>
                <h2 className="font-semibold text-3xl text-center mx-5 text-success">Start for free Today</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    // onSubmit={handleRegister} 
                    className="card-body">
                    <fieldset className="fieldset">
                        <button className="btn w-full bg-white flex items-center"><FcGoogle />  Login with Google</button>
                                        <div class="divider text-xs">Or continue with </div>
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your name"
                            required
                        />
                        {/* {
                            nameError && <p className='text-xs text-error'>{nameError}</p>
                        } */}
                        {/* photo url */}
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your photo URL"
                            required
                        />
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your password"
                            required
                        />
                        <button className="btn btn-primary mt-4">Register</button>
                        <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/auth/login'} className="text-secondary">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;