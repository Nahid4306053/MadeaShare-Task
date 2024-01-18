import React from "react";
import { Link } from "react-router-dom";

export default function Modal({data,children}) {
  return (
    <div
      class="modal fade show modal-lg"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div  style={{height:"500px",overflow:"auto"}} class="modal-content">
          <div class="modal-header">
            <div className="flex  justify-content-center ">
    
              <div className="d-flex justify-content-center gap-3">
                <Link to="/all-contact">
                
                  <button
                    className="btn btn-lg btn-outline-primary"
                    type="button"
                  >
                    All Contacts
                  </button>
                </Link>
                <Link to={"/us-contact"}>
                  <button
                    className="btn btn-lg btn-outline-warning "
                    type="button"
                  >
                    US Contacts
                  </button>
                </Link>               
                <Link to={"/problem-2"}>
                  <button
                    className="btn btn-lg btn-outline-danger"
                    type="button"
                  >
                    Close Modal
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="modal-body">
            {children}
          <ul class="list-group">
             {data.length > 0 && data.map(ele=>{
              return  <li key={ele.id} class="list-group-item  d-flex  justify-content-between gap-5"><p><strong>Phone:</strong> {ele.phone + "  "}</p> <span className="bg-dark ml-2 p-2 text-light">{ele.country?.name}</span></li>
             })}
           </ul>
          </div>
          <div class="modal-footer d-flex justify-content-start align-items-center">
            <input type="checkbox" id="even" />
            <label className="ml-1" htmlFor="even">
              Even only
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
