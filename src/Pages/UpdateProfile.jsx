import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { setUser, updateUser, user } = useContext(AuthContext);
    const [nameError, setNameError] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        if (name.length < 5) {
            setNameError('Name should be more than 5 character');
            return
        } else {
            setNameError('')
        }
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate('/')
            })
            .catch((error) => {
                setError(error);
                setUser(user)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <p className="font-medium text-xs text-center mb-3 text-secondary">Want to change Your Profile</p>
                <h2 className="font-semibold text-2xl text-center mx-5 text-success">Update your Account</h2>
                <form
                    onSubmit={handleUpdate}
                    className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your name"
                            required
                        />
                        {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        }
                        {/* photo */}
                        <label className="label">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input bg-white border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your photo URL"
                            required
                        />
                        {
                            error && <p className="text-accent text-xs">{error}</p>
                        }
                        <button type="submit" className="btn btn-primary mt-4">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;