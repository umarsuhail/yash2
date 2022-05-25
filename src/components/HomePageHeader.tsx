import React from 'react'
interface Props {
    heroText: string,
    heroText2: string,
    content: string,
    buttonText1: string,
    buttonText2: string
    contentBold: string
}
const HomePageHeader = (props: Props) => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <div className='text-6xl font-bold'>
                <span>{props.heroText2}</span>
                <br></br>
                <span>{props.heroText}</span>
            </div>
            <div className="w-80 text-left mt-5">
                <div>
                    <b>{props.contentBold}</b>
                    {props.content}
                </div>
                <div>
                    <button className="bg-green-500 m-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{props.buttonText1}</button>
                    <button className='bg-green-500 m-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>{props.buttonText2}</button>
                </div>
            </div>

        </div>
    )
}
export default HomePageHeader;
