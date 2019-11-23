import React,{Component} from 'react';

class Search extends Component{
    render(){
        return(
            <form>
                <div className="seach-danhsach">
                <div className="title-search">
                <i className="fa fa-angle-down"></i><span> Tìm kiếm danh sách đề tài</span>
                </div>
            </div>
            <div className="row add-select">
                <div className="col-3">
                    <label>Trạng thái</label>
                    <select className="form-control" name="search-trangthai" id="search-trangthai"><option>Tất cả</option></select>
                </div>
                <div className="col-3">
                    <label>Tìm kiếm theo mã phiếu đăng ký</label>
                    <input type="text" className="form-control" name="search-ma" id="search-ma" placeholder="Mã phiếu đăng ký" />
                </div>
                <div className="col-3">
                    <label>Tìm kiếm theo tên đề tài</label>
                    <input type="text" className="form-control" name="search-ten" id="search-ten" placeholder="Tên đề tài" />
                </div>
                <div className="search-add">
                    
                    <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                </div>
            </div>
            </form>
        )
    }
}

export default Search;