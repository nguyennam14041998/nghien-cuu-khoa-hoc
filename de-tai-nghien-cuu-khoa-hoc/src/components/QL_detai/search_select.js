import React,{Component} from 'react';

class Search extends Component{
    render(){
        return(
            <form>
                <div className="row search-select" >
                    <div className="col-2">
                        <label>Từ ngày</label>
                        <input type="date" className="form-control" name="TK_ngaybatdau" id="TK_ngaybatdau" />
                    </div>
                    <div className="col-2">
                        <label>Đến ngày</label>
                        <input type="date" className="form-control" name="TK_ngayketthuc" id="TK_ngayketthuc" />
                    </div>
                    <div className="col-2">
                        <label>Cấp đề tài</label>
                        <select className="form-control" name="TK_capdetai" id="TK_capdetai" value=""><option>Cơ Sở</option></select>
                    </div>
                    <div className="col-2">
                        <label>Trạng thái đề tài</label>
                        <select className="form-control" name="TK_trangthai" id="TK_trangthai" value=""><option>Tất Cả</option></select>
                    </div>
                    
                </div>
                </form>
        )
    }
}

export default Search;