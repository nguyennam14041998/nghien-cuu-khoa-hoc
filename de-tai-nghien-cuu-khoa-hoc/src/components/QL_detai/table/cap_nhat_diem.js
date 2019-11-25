import React,{Component} from 'react';
import Modal from 'react-modal';

class Cap_nhat_diem extends Component{
    constructor(props){
        super(props);
        this.state={
            modalDiemOpen:false,
            
        }
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    closeDiemModal=()=>{
        this.setState({
            modalDiemOpen:false
        })
    }
    
    openDiemModal=()=>{
        this.setState({
            modalDiemOpen:true,
           
        })
    }
    // handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    render(){
        console.log(this.props.diem);
        return(
            <div>
                 <li><button className="btn" style={{paddingRight:'82px'}} onClick={()=>this.openDiemModal()}><i className="fa fa-sign-in"></i><span> Cập nhật điểm</span></button></li>
            <Modal className="modal-diem"
            isOpen={this.state.modalDiemOpen}
             >
                 <form onSubmit="">
                <div>
                   
                    <div className="h4-chitiet">
                        <h5>Cập nhật điểm đề tài</h5>
                        <button className="close-modal " onClick={()=>this.closeDiemModal()}><i className="fa fa-close"></i></button>
                    </div>
                    <div className="capnhatdiem">
                    <table className="table table-hover">
                        <tbody>
                        <tr>
                            <td><label>Tính khoa học</label></td>
                            <td><input type="number"   defaultValue={this.props.diem.khoahoc} className="form-control" name="D_tinhkhoahoc" id="D_tinhkhoahoc" /></td>
                        </tr>
                        <tr>
                            <td><label>Tính sáng tạo</label></td>
                            <td><input type="number" defaultValue={this.props.diem.sangtao}  className="form-control" name="D_tinhsangtao" id="D_tinhsangtao" /></td>
                        </tr>
                        <tr>
                            <td><label>Tính khả thi</label></td>
                            <td><input type="number" defaultValue={this.props.diem.khathi}  className="form-control" name="D_tinhkhathi" id="D_tinhkhathi" /></td>
                        </tr>
                        <tr>
                            <td><label>Tính kỹ thuật cao</label></td>
                            <td><input type="number" defaultValue={this.props.diem.kythuatcao}  className="form-control" name="D_tinhkythuatcao" id="D_tinhkythuatcao" /></td>
                        </tr>
                        <tr>
                            <td><label>Tính thực tiễn</label></td>
                            <td><input type="number" defaultValue={this.props.diem.thuctien}  className="form-control" name="D_tinhthuctien" id="D_tinhthuctien" /></td>
                        </tr>
                        <tr>
                            <td><label style={{color:'blue'}}>TỔNG ĐIỂM</label></td>
                            <td><input type="number" defaultValue={this.props.diem.tongdiem} readOnly  className="form-control" name="D_tongdiem" id="D_tongdiem" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><div className="btn-group">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-save (alias)"></i><span> Lưu</span></button>
                                <button className="btn btn-danger" onClick={()=>this.closeDiemModal()}><i className="fa fa-close"></i><span> Hủy</span></button>
                                </div></td>
                        </tr>
                        </tbody>
                    </table>
                    
                </div>
                </div>
                </form>
            </Modal>
            </div>
        )
    }
}

export default Cap_nhat_diem;