import React,{Component} from 'react';

class Dutoan extends Component{
    render(){
        return(
            <div className="row button-top">
            <div className="col-8"></div>
            <div className="col-4">
            <button className="btn" disabled><i className=" fa fa-stack-exchange "></i><span> Dự toán kinh phí</span></button>
            <button className="btn" disabled><i className="fa fa-line-chart"></i><span> Tiến độ</span></button>
            </div>
        </div>
        )
    }
}

export default Dutoan;