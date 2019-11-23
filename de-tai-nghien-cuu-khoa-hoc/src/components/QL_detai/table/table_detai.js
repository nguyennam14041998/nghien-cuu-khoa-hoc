import React,{Component} from 'react';
import Thong_tin_ct from './thong_tin_chi_tiet';
import Cap_nhat_diem from './cap_nhat_diem';
import Cap_nhat_danh_gia from './cap_nhat_danh_gia';
import Popup from 'reactjs-popup';
class Table extends Component{
   
    
   
    popupopen =()=>{
       console.log(this.props.name);
       console.log(this.props.diem);
            return(
                <tr>
                <td>{this.props.name.stt}</td>
                <td>{this.props.name.ma_phieu}</td>
                <td>{this.props.name.ten}</td>
                <td>{this.props.name.chu_nhiem_de_tai}</td>
                <td>{this.props.name.cap_de_tai}</td>
                <td>{this.props.name.bat_dau}</td>
                <td>{this.props.name.ket_thuc}</td>
                <td>{this.props.name.kinh_phi_du_tinh}</td>
                <td>{this.props.name.kinh_phi_hoan_thanh}</td>
                <td>{this.props.name.tong_diem}</td>
                <td>{this.props.name.xep_loai}</td>
                <td>{this.props.name.trang_thai}</td>
                <td>{this.props.name.tep}</td>
            </tr>
            )
        
    }
    render(){
        return(
            <div className="table-detai">
            <table className="table table-hover table-bordered">
            <thead>
            <tr className="bg-primary">
                <th colSpan="13">Thông tin chi tiết</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>STT</td>
                <td>Mã phiếu</td>
                <td>Tên đề tài</td>
                <td>Chủ nhiệm đề tài</td>
                <td>Cấp đề tài</td>
                <td>Bắt đầu</td>
                <td>Kết thúc</td>
                <td>Kinh phí dự tính</td>
                <td>Kinh phí hoàn thành</td>
                <td>Tổng điểm</td>
                <td>Xếp loại</td>
                <td>Trạng thái</td>
                <td>Tệp đính kèm</td>
            </tr>
           
            <Popup trigger={ this.popupopen()    } >
            
                     <ul className="modal-ul" >
                     <Thong_tin_ct ten={this.props.name}  />
                      <li><button className="btn"  style={{paddingRight:'96px'}}><i className="fa fa-edit"></i><span> Yêu cầu sửa</span></button></li>
                     <Cap_nhat_diem diem={this.props.diem} />
                      <li><button className="btn" style={{paddingRight:'64px'}}><i className="fa fa-line-chart"></i><span> Tiến độ thực hiện</span></button></li>
                      <Cap_nhat_danh_gia />
                      <li><button className="btn" style={{paddingRight:'82px'}}><i className="fa fa-print"></i><span> In phiếu (F9)</span></button></li>
                      
                  </ul>
          
           
            
            </Popup>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
      
       
        
        </div>
        )
    }
}

export default Table;