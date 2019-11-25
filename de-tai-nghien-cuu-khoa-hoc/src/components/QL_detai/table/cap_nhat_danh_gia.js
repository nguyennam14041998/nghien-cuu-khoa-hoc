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
            <div >
                <li><button className="btn" style={{paddingRight:'63px'}} onClick={()=>this.openDanhgiaModal()}><i className="fa fa-sign-in"></i><span> Cập nhật đánh giá</span></button></li>
                
            <Modal className="modal-danhgia" 
            isOpen={this.state.modalDanhgiaOpen}
             >
                <div className="danhgia">
                <div className="h4-chitiet">
                    <h5>Cập nhật đánh giá</h5>
                    <button className="close-modal " onClick={()=>this.closeDanhgiaModal()}><i className="fa fa-close"></i></button>
                </div>
                <div className="radio">
                   
                </div>
                <div className="btn-group ">
                    <button className="btn btn-success"><i className="fa fa-save"></i><span> Lưu</span></button>
                    <button className="btn btn-danger"><i className="fa fa-close"></i><span> Hủy</span></button>
                </div>
                </div>

            </Modal>
            </div>
        )
    }
}

export default Danh_gia;