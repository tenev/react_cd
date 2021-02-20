import React, {Component} from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            count: props.initialCount
        }
    }

    render () {
      return (  
        // to use CONTEXT:
        // 1. encap all with <themeContext.Consumer  
        // 2.  all in code block 
        // 3. have a arrow functio whitch get the varaible and return the code
      <ThemeContext.Consumer>
      {style => (      
            <>
                <button style={style} onClick={() => this.changeCount(-1)} className='btn'>-</button>
                <span>{this.state.count} </span>
                <button style={style} onClick={() => this.changeCount(+1)} >+</button>
            </>
      )}  
      </ThemeContext.Consumer>  


     ) 
    }

    changeCount(amount){
        // this.setState({ count: this.state.count + amount })
        //because  this takes the prev value so we can call it multiple times in the ChangeCount and it will work corectly
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
        
    }
}