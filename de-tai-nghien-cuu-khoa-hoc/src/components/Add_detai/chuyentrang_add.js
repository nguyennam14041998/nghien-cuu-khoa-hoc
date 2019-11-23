import React,{Component} from 'react';

class Chuyentrang extends Component{
    render(){
        return(
            <div className="chuyentrang">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                </ul>
                </div>
        )
    }
}
export default Chuyentrang;