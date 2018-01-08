import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header.js'
import {connect} from 'react-redux';
import * as actions from '../actions';
class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
    return(
           <div className="container">
               <BrowserRouter>
                   <div>
                       <Header/>
                   </div>
               </BrowserRouter>
           </div>
           )
}
}
export default connect(null,actions)(App);
