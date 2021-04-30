// PACKAGES
import React, { Component } from 'react';
import { Chart } from 'react-charts';
import { connect } from 'react-redux';
// MODULES
// STYLES
import './Content.css';



class Content extends Component {

    
    graphData() {
        const data = [
            {
                label: 'BTC',
                data: [
                ]
            }
        ];

        for (let i = 0; i < this.props.graph.data.length; i++) {
            let [destruct] = Object.entries(this.props.graph.data[i]);
            data[0].data.push(
                [destruct[0], destruct[1]]
            )
        }
        return data;
    }

    graphAxes() {
        const axes = [
            { primary: true, type: 'linear', position: 'top' },
            { type: 'linear', position: 'left' }
        ];
        return axes;
    }


    render() {
        return (
            <div className="content-main d-flex h-100 w-100">
                <div className="container-fluid">
                    <div className="row h-50">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 p-1">
                            <div className="content-graph d-flex h-100 w-100 align-items-center justify-content-center">
                                <div style={{height: "100%", width: "100%", backgroundColor: "white"}}>
                                    <Chart data={this.graphData()} axes={this.graphAxes()} />
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                    </div>
                    <div className="row h-50">
                        <div className="col-1 col-sm-1 col-md-1 col-lg-3 col-xl-3"/>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 p-1">
                            <div className="d-flex h-50 w-100 py-1">
                                <div className="content-control d-flex h-100 w-100 flex-column align-items-center justify-content-center">
                                    <span className="input-group-text px-2 py-1 w-75">
                                        {"BTC ask price value: "}{this.props.value.btcValue}
                                    </span>
                                    <button className="btn btn-success m-1 w-75">
                                        Strong Buy
                                    </button>
                                    <button className="btn btn-danger m-1 w-75">
                                        Strong Sell
                                    </button>

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
    value: state.value,
    graph: state.graph
});
const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
