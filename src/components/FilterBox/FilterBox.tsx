import React from 'react'
import './filterBox.css'
interface Props {
    Title: string,
    text: string,
    inclined: boolean
    color: string
}
const FilterBox = (props: Props) => {
    return (
        <div className={`${props.inclined ? 'inclined box w-65' : 'box'} ${props.color} `}>
            <b>{props.Title}</b>
            <br></br>
            <span className='text-sm'>{props.text}</span>
        </div>
    )
}
export default FilterBox;
