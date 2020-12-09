// PACKAGES
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// MODULES
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {

    render() {

        return (
            <div className='app'>
                <div className='navigation-div d-flex w-100'>
                    <NavigationBar />
                </div>
                <div className='main-div d-flex w-100'>
                    <Content />
                </div>
            </div>
        );
    }
}


export default App;
