import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


class TransitionGroups extends Component {
    state = {
        items:[]
    }

    addElements() {
        return this.state.items.map((item,i)=>(
            <CSSTransition
                className="item"
                timeout={500}
                key={i}
            >
                    <div className="item" key={i}>{item}</div>
            </CSSTransition>
          
        ));
    }
    generateNumber(){
        let newArray = [Math.floor(Math.random() *1000)+1,...this.state.items]

        this.setState({
            items:newArray
        })
    }
    removeNumber(){
        let newArray = this.state.items.slice(0,-1);
        this.setState({
            items:newArray
        })
    }
    render(){
    return(
        <div>
            <TransitionGroup
                component="div"
                className="list"
            >
                 {this.addElements()}
            </TransitionGroup>
           
            <div className="btns">
                <div className="btn-add" onClick={()=>{this.generateNumber()}}>All Elements</div>
                <div className="btn-remove" onClick={()=>{this.removeNumber()}}>Remove Elements</div>
            </div>
        </div>
    )
    }
};

export default TransitionGroups;