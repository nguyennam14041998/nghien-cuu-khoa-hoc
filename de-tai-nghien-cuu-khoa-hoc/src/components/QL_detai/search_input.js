import React,{Component} from 'react';

class Search extends Component{
    render(){
        return(
            <div className="row search-input">
                    <div className="col-4">
                        <form className="search-ma">
                        <label>Tìm kiếm theo mã phiếu đăng ký</label> 
                        <input type="text" className="form-control" name="TK_maphieu" id="TK_maphieu" placeholder="Mã phiếu đăng ký" /> 
                        <button type="submit" className="btn search-detai"><i className="fa fa-search"></i></button>  
                        </form>
                    </div>
                    <div className="col-6">
                        <form className="search-ten">
                        <label>Tìm kiếm theo tên đề tài</label>
                        <input type="text" className="form-control" name="TK_tendetai" id="TK_tendetai" placeholder="Tên đề tài" />
                        <button type="submit" className="btn search-detai"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
        )
    }
}

export default Search;