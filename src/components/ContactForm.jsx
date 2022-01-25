import React, { useState } from 'react'
import emailjs from 'emailjs-com'



export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function sendEmail(e){
        e.preventDefault();
		
        emailjs.sendForm('service_hztsapd', 'template_fl6nbi5', e.target, 'user_HFzBhG4fOzaRUetC70hgd').then(res=>{
			setSubmitted(true);
        }).catch(err=> console.log(err));
    }
		
		return (
			<>
			{submitted?
				<div className='text-xl'>Thank you for your message. I will get back to you as soon as possible. </div> 
			
				:<div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
		    	<form className="space-y-12" onSubmit={sendEmail}>
					<div>
						<label className="text-white block mb-6 text-xl font-bold">Name</label>
						<input name="name" className="w-full border border-input-border bg-input px-4 py-4"/>
					</div>
					<div>
						<label className="text-white block mb-6 text-xl font-bold">Email</label>
						<input name="from_email"type="email" className="w-full border border-input-border bg-input px-4 py-4"/>
					</div>
					<div>
						<label className="text-white block mb-6 text-xl font-bold">Message</label>
						<textarea name="message" className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
					</div>
					<button type="submit" className="px-6 py-2 bg-theme text-white font-bold">Send Message</button>
			</form>

		</div>
		}
	</>
    )
}

