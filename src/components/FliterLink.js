import React from "react";
import { connect } from 'react-redux';
import {setVisibilityFilterAction} from '../actions';

const Link = ({active, children, onClick}) =>{
    return    active ? (<span>{children}</span>) :( <a href="#" onClick={(e)=>{e.preventDefault();onClick()} }>{children}</a>)
}

const mapStateToLinkPropes = (state, ownProps) =>{
    return {
        active  : ownProps.filter === state.visibilityFilter
    }
}


const mapDispatchToLinkProps = (dispatch, ownProps) =>{
   return {
        onClick : () => {
            dispatch(setVisibilityFilterAction(ownProps.filter));
        }
    }
}

const FilterLink = connect(mapStateToLinkPropes, mapDispatchToLinkProps)(Link);

export default FilterLink;