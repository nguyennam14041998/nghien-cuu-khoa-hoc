import React,{Component} from 'react';
import Modal from 'react-modal';
import Popup from 'reactjs-popup';

class Danh_gia extends Component{
    constructor(props){
        super(props);
        this.state={
            modalDanhgiaOpen:false
        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    closeDanhgiaModal=()=>{
        this.setState({
            modalDanhgiaOpen:false
        })
    }
    openDanhgiaModal=()=>{
        this.setState({
            modalDanhgiaOpen:true
        })
    }
    render(){
        return(
            <div>
                <li><button className="btn" style={{paddingRight:'63px'}} onClick={()=>this.openDanhgiaModal()}><i className="fa fa-sign-in"></i><span> Cập nhật đánh giá</span></button></li>
            <Modal className="modal-danhgia" 
            isOpen={this.state.modalDanhgiaOpen}
            // onRequestClose={this.closeDanhgiaModal}
             >
                <div>
                <div className="h4-chitiet">
                    <h5>Cập nhật đánh giá</h5>
                    <button className="close-modal " onClick={()=>this.closeDanhgiaModal()}><i className="fa fa-close"></i></button>
                </div>
                <div className="radio">
                   
                  <p>ok</p>
                  
                </div>
                </div>

            </Modal>
            </div>
        )
    }
}

export default Danh_gia;