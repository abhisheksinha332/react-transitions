import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../src/style.css';

import Transition from './transition';
import CssTransition from './csstransition';
import TransitionGroup from './transitiongroup';
import { findByLabelText } from '@testing-library/react';

const App = () => {
    const style={
        navbar:{
        backgroundColor:'#363636',
        display:'flex',
        justifyContent:'space-around',
        lineHeight:'2rem',
        flexWrap:'wrap',
        },
        link:{
            color:'white',
            textDecoration:'none',
            cursor:'pointer',
            backgroundColor:'red',
            margin:'10px 10px',
            padding:'0px 7px',
            borderRadius:'10px'
        }
        
        
    }
    
    return(
        <BrowserRouter>
        <div style={style.navbar}>
            <Link style={style.link} to ='/transition'>Transition</Link><br/>
            <Link style={style.link} to ='/csstransition'>CSSTransition</Link><br/>
            <Link style={style.link} to ='/transitiongroup'>Transition Group</Link><br/>       
        </div>
          
        <Switch>
            <Route path = '/transition' exact component={Transition}/>
            <Route path = '/csstransition' component={CssTransition}/>
            <Route path = '/transitiongroup' component={TransitionGroup}/>
        </Switch>
       
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));