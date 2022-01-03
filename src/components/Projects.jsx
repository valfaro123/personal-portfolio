import React from 'react'

export default function Projects() {
    const proj = [ 
        {
            img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
            title: "proj1",
            desc: "blah blah blahhhh hhhhh blah blah blah hhhhhhh hhhhh hhhhhhhhh hhhh hhhhhhh hhhhhh hhhhh hhhh hhhhhhhh hhh",
            repoLink: "https://github.com/",
            siteLink: "https://www.google.com/",
        },
        {
            img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
            title: "proj2",
            desc: "blah blah blahhhhhhhhh blah blah blahhhhhhhhh",
            repoLink: "https://github.com/",
            siteLink: "https://www.google.com/",
        },
        {
            img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=800",
            title: "proj2",
            desc: "blah blah blahhhhhhhhh blah blah blahhhhhhhhh",
            repoLink: "https://github.com/",
            siteLink: "https://www.google.com/",
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
                                
                                
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
