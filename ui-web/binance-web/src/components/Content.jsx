// PACKAGES
import React, { Component } from 'react';
import { Chart } from 'react-charts';
import { connect } from 'react-redux';
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
                            <div className="content-graph d-flex h-100 w-100 align-items-center justify-content-center">
                                GRAPH HERE
                            </div>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                    </div>
                    <div className="row h-50">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 p-1">
                            <div className="d-flex h-50 w-100 py-1">
                                <div className="content-control d-flex h-100 w-100 align-items-center justify-content-center">
                                    <span className="price-span">{this.props.value.btcValue}</span>
                                    
                                </div>
                            </div>
                            <div className="d-flex h-50 w-100 py-1">
                                <div className="content-control d-flex h-100 w-100 align-items-center justify-content-center">
                                    2
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>

                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
    value: state.value
});
const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
