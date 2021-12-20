import React from 'react'

export default function Projects() {
    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-9 md:px-14">
            <section className="w-full">
                <h2 id="projects" className="secondary-title">Featured Projects</h2>
                
                <div className="grid  grid-cols-1  lg:grid-cols-3 gap-10 mt-6">
                    <img src="https://cdn.pixabay.com/photo/2021/05/24/07/10/sti-6278035__340.jpg"/>
                    <img src="https://cdn.pixabay.com/photo/2021/05/24/07/10/sti-6278035__340.jpg"/>
                    <img src="https://cdn.pixabay.com/photo/2021/05/24/07/10/sti-6278035__340.jpg"/>
                </div>
            </section>
        </div>
    )
}
