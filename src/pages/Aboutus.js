import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[rgb(2,2,36)] text-white min-h-screen flex flex-col items-center pt-48">
            <div className="max-w-4xl w-full p-8 text-lg text-justify">
                <h1 className="text-4xl font-bold mb-8">About Us</h1>
                <p className="mb-6">
                    Welcome to Play Haven, your number one source for all types of video games.
                    We're dedicated to providing you the very best of gaming experience, with an
                    emphasis on quality, customer service, and uniqueness.
                </p>
                <p className="mb-6">
                    Founded in 2024, Play Haven has come a long way from its beginnings. When we first started out,
                    our passion for gaming drove us to start our own business.
                </p>
                <p className="mb-6">
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions
                    or comments, please don't hesitate to contact us.
                </p>
                <p className="font-semibold">Sincerely,</p>
                <p className="font-semibold">The Play Haven Team</p>
            </div>
        </div>
    );
};

export default AboutUs;
