// PACKAGES
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// MODULES
// STYLES
import './Content.css';



class Content extends Component {

    render() {
        return (
            <div className="content-main d-flex h-100 w-100">
                <div className="container-fluid">
                    <div className="row h-50">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 p-1">
                            <div className="content-graph  d-flex h-100 w-100 align-items-center justify-content-center">
                                2
                            </div>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                    </div>
                    <div className="row h-50">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Content;
