import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function sendEmail(e){
        e.preventDefault();
		
        emailjs.sendForm('service_hztsapd', 'template_fl6nbi5', e.target, 'user_HFzBhG4fOzaRUetC70hgd').then(res=>{
            console.log(res);
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
				<p className="text-secondary">&#40;951&#41;532-8699</p>
				<a href="mailto:email@mydomain.com" className="text-secondary underline mt-3 block">valfaro101@att.net</a>	
				<div className="flex mt-20 space-x-6">	
					<a href="https://github.com/valfaro123">
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66a1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22a2.75 2.75 0 0 1-.41-2.06a3.71 3.71 0 0 0 0-1.41a7.65 7.65 0 0 0-2.09 1.09a1 1 0 0 1-.84.15a10.15 10.15 0 0 0-5.52 0a1 1 0 0 1-.84-.15a7.4 7.4 0 0 0-2.11-1.09a3.52 3.52 0 0 0 0 1.41a2.84 2.84 0 0 1-.43 2.08a4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66a1 1 0 0 1-.21 1a2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09a3.9 3.9 0 0 0-1.16-.88a1 1 0 1 1 .5-1.94a4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33a.85.85 0 0 0 .13-.62a5.69 5.69 0 0 1 .33-3.21a1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57a5.71 5.71 0 0 1 .33 3.22a.75.75 0 0 0 .11.57a6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></svg>
					</a>	
					<a href="https://www.linkedin.com/in/victoralfaro1337/">
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3c.1-447.8.2-671.7.3-671.7c447.8.1 671.7.2 671.7.3c-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98c60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9c-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" fill="currentColor"/></svg>					
					</a>
				</div>
			</div>
		</div>
		}
	</>
    )
}

