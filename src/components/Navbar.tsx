import React from 'react'

const Navbar = () => {
    return (
        <nav className="basis-1/4 justify-between font-sans flex flex-col text-center sm:flex-row sm:text-left py-4 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Zevie</a>
            </div>
            <div className="font-medium">
                <a href="/one" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">TOP EV OFFERS / </a>
                <a href="/two" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">FIND A CAR / </a>
                <a href="/three" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">FIND A VAN / </a>
                <a href="/three" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">LEASING / </a>
                <a href="/three" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">ELECTRIC CHARGING / </a>
                <a href="/three" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">ELECTRIC VEHICLE GUIDES / </a>
                <a href="/three" className="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2">ABOUT US</a>
            </div>
            <div className="font-medium ml-5">
                <div className="flex flex-col text-lg">
                    <span>01782 450 411</span>
                    <span className="font-normal text-xs">MON TO FRI 9AM to 5 PM</span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
