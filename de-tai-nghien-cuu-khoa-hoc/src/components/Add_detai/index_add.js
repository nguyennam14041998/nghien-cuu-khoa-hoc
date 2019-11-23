import React,{Component} from 'react';
import Modal from 'react-modal';
import Table_add from './table_add';
import Add_detai from './add_detai';
import Search_add from './search_add';
import Dutoan from './dutoan_add';
import Chuyentrang from './chuyentrang_add';

class Add extends Component{
    index=
    {
        stt:1,
        ma_phieu:"CS000120",
        ten:"nghiên cứu bệnh lao",
        chu_nhiem_de_tai:"phan văn cường",
        cap_de_tai:"cơ sở",
        bat_dau:"01/07/2019",
        ket_thuc:"30/12/2019",
        kinh_phi_du_tinh:"7.000.000.000",
        kinh_phi_hoan_thanh:"9.000.000.000",
        tong_diem:25,
        xep_loai:"xuất sắc",
        trang_thai:"hoàn thành",
        muc_tieu:"Phân tích thành các module",
        noi_dung:"Nghiên cứu và thử nghiệm loại vacxin mới",
        dien_thoai:"0367893306",
        email:"123@vnpt.vn",
        fax:"123456789",
        dia_chi:"Dịch Vọng - Cầu Giấy - Hà Nội",
        tep:""
    }
    render(){
        return(
           <div className="col-lg-10">
           <Dutoan />
            <Add_detai />
            <Search_add />
            <Table_add name={this.index} />
            <Chuyentrang />
           </div>
        )
    }
}

export default Add;