import React from 'react';

const Faculty: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Our Faculty</h1>
            <p className="mb-4">Meet our esteemed faculty members who are dedicated to nurturing the next generation of film music professionals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for faculty member cards */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Faculty Member Name</h2>
                    <p className="text-gray-600">Position</p>
                    <p className="mt-2">Brief description about the faculty member's background and expertise.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Faculty Member Name</h2>
                    <p className="text-gray-600">Position</p>
                    <p className="mt-2">Brief description about the faculty member's background and expertise.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Faculty Member Name</h2>
                    <p className="text-gray-600">Position</p>
                    <p className="mt-2">Brief description about the faculty member's background and expertise.</p>
                </div>
                {/* Add more faculty member cards as needed */}
            </div>
        </div>
    );
};

export default Faculty;