import React from 'react'
import car from '.././assets/images/w-car.png'
import carR from '.././assets/images/w-car-r.png'
import label1 from '.././assets/images/lab1.png'
import label2 from '.././assets/images/lab2.png'
import '../assets/css/animation.css'

export default function RoadSection() {
    return (
        <div className="overflow-hidden z-50">
            <div className="w-full h-20 relative top ">
                <div>
                    <img className="w-40 absolute bottom-32 z-50" src={label1} alt="car"></img>
                    <img className="w-40 absolute bottom-0" src={carR} alt="car"></img>
                </div>
            </div>
            <div className='border-t-4 border-dashed'>

            </div>
            <div className="w-full h-20  relative bottom">
                <div>
                    <img className="w-40 absolute top-32 z-50" src={label2} alt="car"></img>
                    <img className="w-40 absolute" src={car} alt="car"></img>
                </div>
            </div>
        </div>
    )
}
