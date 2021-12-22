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
        "NodeJS",
    ]

    return (
        <div className="container mt-80 flex justify-between items-center mx-auto px-8 md:px-14">
            <section className="w-full">
                <h2 id="about" className="secondary-title">About Me</h2>
                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">

                    <p className="text-secondary">
                    ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
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
