import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUser, setUser, updateUser, user } = useContext(AuthContext);
    const [nameError, setNameError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (name.length < 5) {
            setNameError('Name should be more than 5 character');
            return
        } else {
            setNameError('')
        }
        createUser(email, password)
            .then((result) => {
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        setError(error);
                        setUser(user)
                    })
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Register </p>
                <h2 className="font-semibold text-3xl text-center mx-5 text-success">Start for free Today</h2>
                <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p>
                <form
                    onSubmit={handleRegister}
                    className="card-body">
                    <fieldset className="fieldset">
                        <button className="btn w-full bg-white flex items-center"><FcGoogle />  Register with Google</button>
                        <div className="divider text-xs">Or continue with </div>
                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your name"
                            required
                        />
                        {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        }
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
                        {
                            error && <p className="text-accent text-xs">{error}</p>
                        }
                        <button className="btn btn-primary mt-4">Register</button>
                        <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/auth/login'} className="text-secondary">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;