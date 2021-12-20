import React from 'react'
import DotNav from './DotNav'

export default function Header() {
    return (
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="flex flex-wrap md:flex-nowrap">
                <DotNav/>
                <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
                    <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Front End<br/>  web developer.</h1>
                    <div class="w-full flex justify-center md:justify-start">
                        <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                            <span>View my work</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
