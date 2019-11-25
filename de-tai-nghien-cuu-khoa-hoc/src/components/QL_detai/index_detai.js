import React,{Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import Modal from 'react-modal';
import Table from './table/table_detai';
import Search_select from './search_select';
import Search_input from './search_input';
import Chuyentrang from './chuyentrang_detai';

class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            index:[],
            diem:[]
        }
    }
    
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
        
        diem={
            khoahoc:"5",
            sangtao:"5",
            khathi:"5",
            kythuatcao:"5",
            thuctien:"5",
            tongdiem:"25",
        }
        table=()=>{
            return(
                <Table name={this.index} diem={this.diem} />
            )
        }

    render(){
        return(
            <div className="col-lg-10">
                <Search_select />
                <Search_input />
                {this.table()}
                <Chuyentrang />
                
            </div>
        )
    }
}

export default Index;