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
        const data = [
            {
                label: 'Series 1',
                data: [
                    [0, 1],
                    [1, 2],
                    [2, 4],
                    [3, 2],
                    [4, 4],
                    [5, 3],
                    [6, 2],
                    [7, 6],
                    [8, 12],
                    [9, 13],
                    [10, 11],
                    [11, 13],
                    [12, 2],
                    [13, 3],
                    [14, 5],
                    [15, 7]
                ]
            }
        ];
        const axes = [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ];




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

// <div style={{height: "600px", width: "800px", backgroundColor: "white"}}>
//     <Chart data={data} axes={axes} />
// </div>

export default App;
