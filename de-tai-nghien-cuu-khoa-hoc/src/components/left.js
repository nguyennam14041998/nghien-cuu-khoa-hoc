import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Left extends Component{
    render(){
        return(
            <div className="body-left">
           
            <table className="table table-hover ">
                <tbody>
                <tr>
                    <td><i className="fa fa-files-o"></i></td>
                    <td><Link to={'/index_detai'}><div>Quản Lý Đề Tài</div></Link></td>
                </tr>
                <tr>
                    <td><i className="fa fa-edit"></i></td>
                    <td><Link to={'/add_detai'}><div>Thêm Đề Tài</div></Link></td>
                </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export default Left;