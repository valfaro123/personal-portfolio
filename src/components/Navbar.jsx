import React,{ useState } from 'react';
import resume from '../pdf/VictorAlfaroResume.pdf'

export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false)
    
    return (
        <nav className="py-6">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="font-bold">Victor Alfaro</div>
                <div className='z-10 lg:hidden' onClick={()=> setIsOpened(!isOpened)} >
                {isOpened?  
                    <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100"><path d="M84.707 68.752L65.951 49.998l18.75-18.752a1.989 1.989 0 0 0 0-2.813L71.566 15.295a1.99 1.99 0 0 0-2.814 0L49.999 34.047l-18.75-18.752c-.746-.747-2.067-.747-2.814 0L15.297 28.431a1.992 1.992 0 0 0 0 2.814L34.05 49.998L15.294 68.753a1.993 1.993 0 0 0 0 2.814L28.43 84.704a1.988 1.988 0 0 0 2.814 0l18.755-18.755l18.756 18.754c.389.388.896.583 1.407.583s1.019-.195 1.408-.583l13.138-13.137a1.99 1.99 0 0 0-.001-2.814z" fill="currentColor"/></svg>
                    :<svg  fill="white" viewBox="0 0 100 80" width="20" height="20"><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect>
                    </svg>
                }
                </div>
                <div onClick={()=> setIsOpened(!isOpened)}  className={isOpened? 'nav opened-nav lg:full-nav' : 'nav unopened-nav lg:full-nav' }>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#resume"  href={resume} target="_blank" rel="noopener noreferrer" className="text-theme lg:px-6 lg:py-2 lg:bg-theme lg:font-bold lg:text-white">Resume</a>
                </div>
                
            </div>
        </nav>
    )
}
