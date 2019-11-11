import React, {Component} from 'react'
import {connect} from 'react-redux';
import { statement } from '@babel/template';

class Counter extends Component 
{
    render () 
    {
        return(
            <div>
                <button className='btn' >Increment</button>
                <button className='btn'>Increment By</button>
                <button className='btn'>Decrement By</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.counter
    }
}
export default connect(mapStateToProps)(Counter)