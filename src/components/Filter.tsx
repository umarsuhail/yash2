import React from 'react'
import FilterBox from './FilterBox/FilterBox'

const Filter = () => {
    return (
        <div className='grid grid-flow-col auto-cols-max'>
            <FilterBox Title="MAKE & MODEL" text="Any make and model" inclined={true} color="blue" />
            <FilterBox Title="TYPE" text="Any type" inclined={true} color="blue" />
            <FilterBox Title="ELECTRIC RANGE" text="Any range" inclined={true} color="blue" />
            <FilterBox Title="BUDGET" text="Any Budget" inclined={true} color="blue" />
            <FilterBox Title="" text="Show 1298 cars" inclined={true} color="green" />

        </div>
    )
}
export default Filter;