import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
    return (
        <div className="border border-gray-700 text-gray-200 rounded-xl p-14 flex gap-3 flex-col mt-16">
            <p className="text-3xl font-semibold">
                Fill the form to contact us
            </p>

            <div className="mt-7">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactForm;
