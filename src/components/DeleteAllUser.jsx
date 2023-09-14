import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
 

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(deleteUsers() );
  }

  return <div style={{
    marginTop:'12px'
  }} >
    <button className="btn add-btn"
      onClick={deleteAllUser} > Delete All Users </button>
  </div>

};


