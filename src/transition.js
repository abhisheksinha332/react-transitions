import React, { Component } from 'react';
import '../src/style.css';

class Transition extends Component {
    


    state = {
        show:true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }

  
    
    render(){
    return(
        <div>
            { this.state.show ?
            <div style={{
                background:'red',
                height:'100px'
            }}></div> : 'better luck'
        }
        <div className="showDiv" onClick={this.showDiv}>Show or Hide</div>
        </div>
    )
    };
};

export default Transition;