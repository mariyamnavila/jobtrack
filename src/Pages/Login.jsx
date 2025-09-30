import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, signInWithGoogle, setUser, user, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signIn(email, password)
            .then((result) => {
                navigate(`${location.state ? location.state : '/'}`)
                toast.success('Successfully Logged in', {
                    zIndex: 9999,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                })
            })
            .catch((error) => {
                setError(error.code)
            })
            .finally(() => setLoading(false));
    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (provider) => {
        signInWithGoogle(provider)
            .then((result) => {
                const name = result?.user?.displayName
                const photo = result?.user?.photoURL
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                setError(error.code)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <Helmet>
                <title>Login | JobTrack</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Welcome Back!</p>
                <h2 className="font-semibold text-2xl text-center mx-5 text-success">Login your Account</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    onSubmit={handleLogin}
                    className="card-body">
                    <button onClick={() => { handleGoogleSignIn(googleProvider) }} className="btn w-full bg-white flex items-center"><FcGoogle />  Login with Google</button>
                    <div className="divider text-xs">Or continue with </div>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your password"
                            required
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className="text-accent text-xs">{error}</p>
                        }
                        <button type="submit" className="btn btn-primary mt-4">Login</button>
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/auth/register'} className="text-secondary">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;