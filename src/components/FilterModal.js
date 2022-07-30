import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const FilterModal = () => {
    const [selectValue , setSelectValue] = useState("/womenclothes")
    return (
        <div>
<div className="modal fade" id="filtermodal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header d-flex flex-row-reverse justify-content-between align-items-center">
        <h5 className="modal-title" id="exampleModalLabel">فیلتر محصولات</h5>
        <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <select className="form-select" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
            <option value="/menclothes">لباس مردانه</option>
            <option value="/womenclothes">لباس زنانه</option>
            <option value="/jewelery">طلا و جواهرات</option>
            <option value="/electronics">کالای دیجیتال</option>
        </select>
        <div className="d-flex justify-content-center mt-4">
        <div className="form-check">
        <label className="form-check-label me-3" htmlFor="flexRadioDefault1" >
    جدید ترین
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
</div>
<div className="form-check ">
<label className="form-check-label" htmlFor="flexRadioDefault2">
    مرتبط ترین
  </label>
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  
</div>  
        </div>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">بازگشت</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><Link className="text-white text-decoration-none" to={`${selectValue}`}>فیلتر کردن</Link></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FilterModal;