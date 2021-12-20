import React, { useState, useEffect } from 'react'



export default function DotNav() {
    const [selected, setSelected] = useState("Home");

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () => {
            let currentScrollPosition = window.pageYOffset;


              switch( true ){
                case  window.pageYOffset >= 1800:
                    { selected !== "Contact" && handleSelect("Contact") }
                    break;
                
                case  (currentScrollPosition >= 1300):
                    { selected !== "Projects" && handleSelect("Projects")}
                    break;
                
                case (currentScrollPosition >= 700):
                    { selected !== "About" && handleSelect("About")}
                    break;
                case (currentScrollPosition < 600):
                    { selected !== "Home" && handleSelect("Home")}
                        break;

              }
          }
            
          );
        }
      }, []);
    const dotNavItems = [
        {
            href: "#",
            name: "Home",

        },
        {
            href: "#about",
            name: "About",
        },
        {
            href: "#projects",
            name: "Projects",
        },
        {
            href: "#contact",
            name: "Contact",
        },
    ];

    const handleSelect = (itemName) => {
        console.log("rerendered")
        setSelected(itemName);
    }
    
    return (
        
        <div className="dotnav">
            <nav className="inline-block fixed left-percentage hidden xl:block">

                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    {
                        dotNavItems.map( item => {
                            return( 
                                <a href={item.href} className={ item.name === selected ? "selected-circle" : "deselected-circle"}>
                                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">{item.name}</span>
                                </a>
                            )
                        })
                    }
                </div>
              </nav>
        </div>
    )
}
