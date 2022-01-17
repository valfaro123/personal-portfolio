import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
    return (
        <div className="container mt-80 flex justify-between items-center mx-auto px-8 md:px-14">
            <section className="w-full">
                <h2 id="contact" className="secondary-title">Contact Me</h2>
                <p className="section-paragraph">
                Whether you are looking for help on your next project or simply wanting to say hello, my inbox is always open. Please feel free to send a message and I will get back to you within 48 hours.
                </p>
                <ContactForm/>
            </section>
        </div>
    )
}
