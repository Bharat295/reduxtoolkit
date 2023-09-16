import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { BiSolidEditAlt , BiSave } from 'react-icons/bi';
import { removeUser , updateUser } from '../store/slices/UserSlice';

export default function DisplayUsers() {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();

  const [editableUser, setEditableUser] = useState({ id: null, text: '' });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const editUser = (id) => {
    if (editableUser.id === null) {
      setEditableUser({ id, text: data[id] });
    } else {
      // Save changes and disable edit mode
      dispatch(updateUser({ id: editableUser.id, text: editableUser.text }));
      setEditableUser({ id: null, text: '' });
    }
  };

  const handleInputChange = (event) => {
    setEditableUser({ ...editableUser, text: event.target.value });
  };

  return (
    <div>
      {data.map((user, id) => (
        <li
          key={id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
          }}
        >
          {editableUser.id === id ? (
            <input
              type="text"
              value={editableUser.text}
              onChange={handleInputChange}
            />
          ) : (
            <span>{user}</span>
          )}

          <button className="btn-delete" onClick={() => deleteUser(id)}>
            <MdDeleteForever className="delete-icon" />
          </button>

          <button onClick={() => editUser(id)}>
            {editableUser.id === id ? <BiSave className='delete-icon'/> : <BiSolidEditAlt className='delete-icon' /> }
            
            
          </button>
        </li>
      ))}
    </div>
  );
}
