import React from 'react'
import Navbar from '../components/Navbar'
interface Props {
    children: any
}
const Layout = (props: Props) => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            {props.children}
        </div>
    )
}
export default Layout
