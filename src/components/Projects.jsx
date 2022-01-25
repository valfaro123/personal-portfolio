import React from 'react'
import SingleProject from './SingleProject'
import proj1 from '../images/ableton-mockup.jpg'
import proj2 from '../images/novacane-mockup.jpg'
import proj3 from '../images/crypto-mockup.jpg'

export default function Projects() {
    const proj = [ 
        {
            img: proj1,
            title: "Ableton About Page",
            desc: "Having struggled with styling, I decided to focus on practicing CSS and Tailwind for this project. Using only screenshots from the live page, I built a responsive clone of the landing page with ReactJS and styled using Tailwind and some custom CSS.",
            repoLink: "https://github.com/valfaro123/ableton-about-clone",
            siteLink: "https://valfaro123.github.io/ableton-about-clone/",
        },
        {
            img: proj2,
            title: "Artist Website Novacane",
            desc: "I designed and built a simple ReactJS content hub for a musician that helped me gain experience with launching sites to custom domains as well as breaking them and learning to find a solution.",
            repoLink: "https://github.com/valfaro123/novacane",
            siteLink: "https://www.novacane.co/",
        },
        {
            img: proj3,
            title: "Crypto Dashboard",
            desc: "Using a cryptocurrency and news API from rapidAPI, I built a dashboard which featured live prices, news, and information on the top 100 currencies. The project was built using ReactJS and uses components from ANT Designs UI library.",
            repoLink: "https://github.com/valfaro123/crypto-base",
            siteLink: "https://valfaro123.github.io/crypto-base/",
        }
    ]
    return (
        <div className="container mt-96 flex justify-between items-center mx-auto px-9">
            <section className="">
                <h2 id="projects" className="secondary-title">Featured Projects</h2>
                
                <div className="grid  grid-cols-1  lg:grid-cols-3 gap-10 mt-6">
                    {proj.map( (p, index) => {
                        return(
                            <div key={index}>
                                <SingleProject 
                                    img={p.img}
                                    title={p.title}
                                    desc={p.desc}
                                    repoLink={p.repoLink}
                                    siteLink={p.siteLink}
                                />
                                
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
