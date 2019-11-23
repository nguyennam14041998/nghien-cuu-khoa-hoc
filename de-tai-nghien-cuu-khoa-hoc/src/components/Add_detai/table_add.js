import React,{Component} from 'react';
import Modal from 'react-modal';
import { shallowEqual } from '@babel/types';

class Table extends Component{
   
    
    render(){
        console.log(this.props.name);
        return(
            <div className="table-detai">
            <table className="table table-hover table-bordered">
            <tr className="bg-primary">
                <th colSpan="13">Thông tin chi tiết</th>
            </tr>
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

            <tr  >
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
        </table>
        
        </div>
        )
    }
}

export default Table;