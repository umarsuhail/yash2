import React from 'react'

const BottomSection = () => {
    return (
        <div className='w-screen mt-4 bg-lime-100 min-h-max columns-2 flex h-80 items-end'>
            <div className="text-4xl p-14 pb-8 font-black text-black mt-5 w-full text-left pl-32">
                <span>
                    Electric cars can be 90% cheaper to run than petrol or diesel cars
                </span>
            </div>
            <div className="text-black mt-5 text-left w-full p-14 pb-8 flex justify-center">
                <div className="w-80">
                    <span className="w-full	text-left max-w-sm">
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </span>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full m-0 mt-3">Work out fuel savings</button>
                </div>


            </div>


        </div>
    )
}
export default BottomSection