import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { MdDeleteForever } from "react-icons/md";
import {  removeUser } from '../store/slices/UserSlice';
export default function DisplayUsers() {
    const data = useSelector((state) => {
        return state.users;
    });

    const dispatch = useDispatch();
    // console.log(data); 
    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }
    return (
        <div >
            {
                data.map((user, id) => {
                    return <li key={id} style={{
                        display: 'flex',
                        justifyContent:'space-between',padding:'10px'
            
            
    }} >
                        {user}
                        <button className='btn-delete' onClick={()=> deleteUser(id)} >
                            <MdDeleteForever className='delete-icon' />
                        </button>
                    </li>
                })
      }
    </div>
  )
}
