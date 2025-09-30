import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const { auth } = useContext(AuthContext);
    return (
        <div className="container mx-auto flex flex-col justify-center items-center my-12 space-y-2">
            <img className="w-36 rounded-full outline-4 outline-offset-4 outline-secondary" src={auth.currentUser?.photoURL} alt="" />
            <h2 className="text-3xl font-medium text-success">{auth.currentUser?.displayName}</h2>
            <h2 className="text-xl text-neutral">{auth.currentUser?.email}</h2>
            {/* <h2>{auth.currentUser?.emailVerified}</h2> */}
            <p className="flex items-center text-success"> Email verification:{
                auth.currentUser?.emailVerified
                    ? <span
                        className="ml-2 rounded-sm px-2 py-1 btn-active bg-base-200 hover:text-secondary"
                    >
                        True
                    </span>
                    :
                    <span
                        className="ml-2 rounded-sm px-2 py-1 btn-active bg-base-200 hover:text-secondary"
                    >
                        False
                    </span>
            }</p>
            <Link to={'/updateProfile'} className="btn btn-secondary hover:btn-primary">Update Profile</Link>
        </div>
    );
};

export default ProfilePage;