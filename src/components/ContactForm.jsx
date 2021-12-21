import React from 'react'

export default function ContactForm() {
    return (
        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
		    <div class="space-y-12">
				<div>
					<label class="text-white block mb-6 text-xl font-bold">Name</label>
					<input class="w-full border border-input-border bg-input px-4 py-4"/>
				</div>
				<div>
					<label class="text-white block mb-6 text-xl font-bold">Email</label>
					<input type="email" class="w-full border border-input-border bg-input px-4 py-4"/>
				</div>
				<div>
					<label class="text-white block mb-6 text-xl font-bold">Message</label>
					<textarea type="email" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
				</div>
				<button class="px-6 py-2 bg-theme text-white font-bold">Send Message</button>
			</div>

			<div class="mt-12">
				<p class="text-secondary">number</p>
				<a href="mailto:email@mydomain.com" class="text-secondary underline mt-3 block">email</a>	
				<div class="flex mt-20 space-x-6">	
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
