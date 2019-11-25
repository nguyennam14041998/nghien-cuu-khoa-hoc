import React,{Component} from 'react';
import Modal from 'react-modal';
import Popup from 'reactjs-popup';

class Chi_tiet extends Component{
    constructor(props){
        super(props);
        this.state={
            modalChitietOpen:false
           
        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    componentDidMount(){
        console.log(this.props.ten);
    }
    closeChitietModal =()=>{
        this.setState({
            modalChitietOpen:false       
        })
    }
    openChitietModal =()=>{
        this.setState({
            modalChitietOpen:true
        })
    }
    
    render(){
       
        
        return(
            <div>
            
            <li ><button className="btn" style={{paddingRight:'87px'}}  onClick={()=>this.openChitietModal()}  ><i className="fa fa-list-alt"></i><span> Chi tiết phiếu</span></button></li>
            
            <Modal className="modal-chitiet"
            isOpen={this.state.modalChitietOpen}
            >
                <div>
                    <div className="h4-chitiet">
                        <h5>Thông tin chi tiết</h5>
                        <button className="close-modal " onClick={()=>this.closeChitietModal()}><i className="fa fa-close"></i></button>
                    </div>
                    <div className="row chitiet">
                        <div className="col-6">
                            <h6>Thông tin đề tài</h6>
                            <hr />
                            <div className="row">
                                <div className="col-6">
                                    <label>Ngày bắt đầu</label>
                                    <input type="text" className="form-control" value={this.props.ten.bat_dau} readOnly  name="CT_ngaybatdau" id="CT_ngaybatdau" />
                                </div>
                                <div className="col-6">
                                    <label>Ngày kết thúc</label>
                                    <input type="text" className="form-control" value={this.props.ten.ket_thuc} readOnly  name="CT_ngayketthuc" id="CT_ngayketthuc" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label>Cấp đề tài</label>
                                    <input type="text" className="form-control" value={this.props.ten.cap_de_tai} readOnly  name="CT_capdetai" id="CT_capdetai" />
                                </div>
                                <div className="col-6">
                                    <label>Trạng thái</label>
                                    <input type="text" className="form-control" value={this.props.ten.trang_thai} readOnly name="CT_trangthai" id="CT_trangthai" />
                                </div>
                            </div>
                            <div>
                                <label>Tên đề tài</label>
                                <input type="text" className="form-control" value={this.props.ten.ten} readOnly name="CT_tendetai" id="CT_tendetai" />
                            </div>
                            <div>
                                <label>Mục tiêu đề tài</label>
                                <input type="text" className="form-control" value={this.props.ten.muc_tieu} readOnly name="CT_muctieudetai" id="CT_muctieudetai" />
                            </div>
                            <div>
                                <label>Kinh phí dự tính</label>
                                <input type="text" className="form-control" value={this.props.ten.kinh_phi_du_tinh} readOnly  />
                            </div>
                            <div>
                                <label>Nội dung</label>
                                <textarea className="form-control" rows="4" value={this.props.ten.noi_dung} readOnly ></textarea>
                            </div>
                        </div>
                        <div className="col-6">
                            <h6>Thông tin cá nhân</h6>
                            <hr />
                            <div>
                                <label>Chủ nhiệm đề tài</label>
                                <input type="text" className="form-control" value={this.props.ten.chu_nhiem_de_tai} readOnly name="CT_chunhiemdetai" id="CT_chunhiemdetai" />
                            </div>
                            <div>
                                <label>Điện thoại</label>
                                <input type="text" className="form-control" value={this.props.ten.dien_thoai} readOnly name="CT_dienthoai" id="CT_dienthoai" />
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input type="text" className="form-control" value={this.props.ten.email} readOnly />
                            </div>
                            <div>
                                <label>Fax</label>
                                <input type="text" className="form-control" value={this.props.ten.fax}  readOnly />
                            </div>
                            <div>
                                <label>Địa chỉ</label> 
                                <input type="text" className="form-control" value={this.props.ten.dia_chi} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
             
        </Modal>
        </div>
        )
    }
}

export default Chi_tiet;