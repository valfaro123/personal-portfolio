import React from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
	function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_hztsapd', 'template_fl6nbi5', e.target, 'user_HFzBhG4fOzaRUetC70hgd').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    return (
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
		    <form className="space-y-12" onSubmit={sendEmail}>
				<div>
					<label className="text-white block mb-6 text-xl font-bold">Name</label>
					<input className="w-full border border-input-border bg-input px-4 py-4"/>
				</div>
				<div>
					<label className="text-white block mb-6 text-xl font-bold">Email</label>
					<input type="email" className="w-full border border-input-border bg-input px-4 py-4"/>
				</div>
				<div>
					<label className="text-white block mb-6 text-xl font-bold">Message</label>
					<textarea type="email" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
				</div>
				<button type="submit" className="px-6 py-2 bg-theme text-white font-bold">Send Message</button>
			</form>

			<div className="mt-12">
				<p className="text-secondary">number</p>
				<a href="mailto:email@mydomain.com" className="text-secondary underline mt-3 block">email</a>	
				<div className="flex mt-20 space-x-6">	
					<a href="#">
						github
					</a>	
					<a href="#">
							linkden						
					</a>
				</div>
			</div>
		</div>
    )
}
