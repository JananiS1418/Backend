import React, { useContext } from 'react';
import CountContext from '../context/CountContext';

const Profile = () => {
    const { user } = useContext(CountContext);

    if (!user) {
        return <div className="mt-20 text-center text-xl">Please login to view profile</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-200">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-md">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{user.name}</h2>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold mb-6 ${user.role === 'Admin' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {user.role}
                    </span>

                    <div className="w-full space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                            <span className="text-gray-500 font-medium font-serif">Email</span>
                            <span className="text-gray-800 font-semibold">{user.email}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
                            <span className="text-gray-500 font-medium font-serif">User ID</span>
                            <span className="text-gray-800 font-mono text-sm">{user._id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
