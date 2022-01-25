import React from 'react'

export default function About() {
    const toolsetList = [
        "Javascript",
        "CSS",
        "HTML",
        "React",
        "Bootstrap",
        "Tailwind",
        "Git/Github",
        "AntDesign",
    ]

    return (
        <div className="container mt-80 flex justify-between items-center mx-auto px-8 md:px-14">
            <section className="w-full">
                <h2 id="about" className="secondary-title">About Me</h2>
                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-10">

                    <p className="text-secondary">
                    Hello, my name is Victor Alfaro, and I am a front-end developer. I was introduced to web development while pursuing my bachelor’s degree in computer science &#40;Graduated FW2021&#41; and quickly realized my love for building sites. While I learned the basics of HTML, CSS, and Javascript in my courses, I continued my learning by completing several courses on web development and utilizing online learning resources. I primarily use ReactJS now but am always interested in learning new ways to tackle problems. While the bulk of my learning has been on the front-end, I do have some experience working on the backend with node JS and mongoDB. Here are some other tools and libraries I have been working with recently: 
                    </p>
                    <ul className=" grid grid-cols-2">
                        {toolsetList.map((toolsetListItem, index)=>{
                            return(
                                <li key={index}>
                                        <svg className=" mx-1 inline fill-badge" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path  d="M10.46 18a2.23 2.23 0 0 1-.91-.2a1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/></svg>
                                
                                    {toolsetListItem}
                                </li>)
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}
