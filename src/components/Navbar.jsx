import React from 'react'

export default function Navbar() {
    return (
        <div className="py-6">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <div className="font-bold">Victor Alfaro</div>
                <div className="hidden md:flex space-x-12 items-center">
                    <a href="#" className="text-selected-text">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#resume"><button className="px-6 py-2 bg-theme font-bold">Resume</button></a>
                </div>
                <div className="md:hidden">
                <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                </div>
            </div>
        </div>
    )
}
