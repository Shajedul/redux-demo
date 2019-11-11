import React, {Component} from 'react'
import {connect} from 'react-redux';
import { statement } from '@babel/template';

class Counter extends Component 
{
    render () 
    {
        return(
            <div>
                <h1>{this.props.ctr}</h1>
                <button className='btn' onClick={this.props.onIncrementCounter} >Increment</button>
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
const mapDispatchtoProps = dispatch => {
    return {
        onIncrementCounter: ()=> dispatch({
            type: 'INCREMENT'
        })
    };
}
export default connect(mapStateToProps, mapDispatchtoProps)(Counter);