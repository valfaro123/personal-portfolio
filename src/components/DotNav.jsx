import React, { useState, useEffect } from 'react'



export default function DotNav() {
    const [selected, setSelected] = useState("Home");
    let currentState; 
    const handleSelect = (itemName) => {
        currentState = itemName;
        setSelected(itemName);
    }
    useEffect(() => {
        
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () => {
            let currentScrollPosition = window.pageYOffset;
              switch( true ){
                case  (currentScrollPosition >= 1800):
                    if(currentState !== "Contact") handleSelect("Contact");
                    break;
                
                case  ( currentScrollPosition >= 1300):
                    if(currentState !== "Projects") handleSelect("Projects");
                    break;
                
                case ( currentScrollPosition >= 800):
                    if(currentState !== "About") handleSelect("About");
                    break;
                case ( currentScrollPosition < 800):
                    if(currentState !== "Home") handleSelect("Home");
                    break;
                    
                default:
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
    return (
        <div className="dotnav">
            <nav className="inline-block fixed left-percentage hidden xl:block">
                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    {
                        dotNavItems.map( (item ,index) => {
                            return( 
                                <a key={index} href={item.href}  className={ item.name === selected ? "selected-circle" : "deselected-circle"}>
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
