import React,{Component} from 'react';

class Add extends Component{
    render(){
        return(
            <form>
            <div className="row search-select" >
                <div className="col-4">
                    <label>Cấp đề tài</label>
                    <select className="form-control" name="add_capdetai" id="add_capdetai"><option>Cơ sở</option></select>
                </div>
                
                <div className="col-4">
                    <label>Chủ nhiệm đề tài</label>
                    <select className="form-control" name="add_chunhiem" id="add_chunhiem"><option>Phạm Văn Cường</option></select>
                </div>
                <div className="col-2">
                    <label>Ngày bắt đầu</label>
                    <input type="date" className="form-control" name="add_ngaybatdau" id="add_ngaybatdau" />
                </div>
                <div className="col-2">
                    <label>Ngày kết thúc</label>
                    <input type="date" className="form-control" name="add_ngayketthuc" id="add_ngayketthuc" />
                </div>

            </div>
            <div className="row add-input">
                <div className="col-8">
                    <label>Tên đề tài</label>
                    <input type="text" className="form-control" name="add_ten" id="add_ten"  />
                </div>
                <div className="col-4">
                    <label>Mục tiêu đề tài</label>
                    <input type="text" className="form-control" name="add_muctieu" id="add_muctieu"  />
                </div>
            </div>
            <div className="row add-input">
                <div className="col-8">
                    <label>Người tham gia</label>
                    <input type="text" className="form-control" name="add_nguoithamgia" id="add_nguoithamgia"  />
                    <button className="btn btn-primary"><i className="fa  fa-plus"></i></button>
                </div>
                <div className="col-4">
                    <label>Kinh phí dự tính</label>
                    <input type="number" className="form-control" name="add_kinhphidutinh" id="add_kinhphidutinh"  />
                </div>
            </div>
            <div className="add-input">
                 <label>Nội dung</label>
                 <textarea className="form-control" name="noidung" id="noidung"></textarea>
            </div>
            <div className="row">
                <div className="col-8"></div>
                <div className="col-4 add-detai">
                <button className="btn btn-primary"><i className=" fa fa-paperclip "></i><span> Đính kèm file</span></button>
                <button className="btn btn-primary"><i className="fa fa-save (alias)"></i><span> Thêm</span></button>
                </div>
            </div>
            </form>
        )
    }
}

export default Add;