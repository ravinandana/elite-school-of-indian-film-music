import React from 'react';

const Admissions: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Admissions</h1>
            <p className="mb-4">
                Welcome to the Elite School of Indian Film Music! We are excited to guide you through the admissions process.
            </p>
            <h2 className="text-2xl font-semibold mb-2">How to Apply</h2>
            <p className="mb-4">
                To apply for our programs, please follow the steps outlined below:
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li>Fill out the online application form.</li>
                <li>Submit the required documents, including transcripts and a personal statement.</li>
                <li>Attend an interview with our admissions team.</li>
                <li>Receive your admission decision via email.</li>
            </ol>
            <h2 className="text-2xl font-semibold mb-2">Important Dates</h2>
            <p className="mb-4">
                Please keep an eye on the following important dates:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Application Deadline: June 30, 2023</li>
                <li>Interviews: July 15-20, 2023</li>
                <li>Decision Notification: August 1, 2023</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="mb-4">
                If you have any questions regarding the admissions process, please feel free to reach out to us at <a href="mailto:admissions@elitefilmusic.com" className="text-blue-500">admissions@elitefilmusic.com</a>.
            </p>
        </div>
    );
};

export default Admissions;