import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import './style.css';

class Transitions extends Component {
    


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
           <Transition
            in ={this.state.show}
            timeout={{
                enter:2000,
                exit:50
            }}

            onEnter = {(node) => {
                console.log('Enter');
            }}
         
           >
               {state => 
               <div className={`square square-${state}`}>
                   {`square square-${state}`}

               </div>
              }
           </Transition>
        <div className="showDiv" onClick={this.showDiv}>Show or Hide</div>
        </div>
    )
    };
};

export default Transitions;