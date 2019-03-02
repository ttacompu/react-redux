import React from "react";
import FilterLink from './FliterLink';

const Pager = () =>(
        <div>
            Show : 
                {' '}
                <FilterLink filter='all'  > All </FilterLink>
                {' '}
                <FilterLink filter='active'  > Active </FilterLink>
                {' '}
                <FilterLink filter='completed'  > Completed </FilterLink>
        </div>
    )


export default Pager;
