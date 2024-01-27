import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, removeAllUsers } from '../store/slices/userSlice'
import { IoTrashBinOutline } from "react-icons/io5";

const AdminDetail = () => {
  // this state means u can access the global state or main store state...
  const adminState = useSelector((state) => state.admin);
  const data = useSelector((state) => {
    return state.users
  })
  const dispatch = useDispatch()
  const addNewUser = (name) => {
    // console.log(name)
    dispatch(addUser(name))
  }
  const handleSingleDelete = (id) => {
    dispatch(removeUser(id));
  }
  const handleDeleteAll = () => {
    dispatch(removeAllUsers());
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col py-3">
          <div>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <h1>Admin Data..</h1>
                <p>Practice Redux ToolKit</p>
              </div>
              <button className='btn btn-secondary' onClick={() => { addNewUser(fakeUserData()) }}>Add user</button>
            </div>
            <div className='my-3 text-secondary'>
              {data.length > 0 && <h6 className='text-center text-success fw-medium'>Data is coming from an Api</h6>}
              {
                data.map((user, id) => {
                  return <>
                    < hr />
                    <div className='d-flex justify-content-between align-items-center py-1'>
                      <h5 key={id}>
                        {user}
                      </h5>
                      <button onClick={() => handleSingleDelete(id)} className='btn '>
                        <IoTrashBinOutline size={23} />
                      </button>
                    </div>
                  </>
                })
              }
            </div>
            <hr />
            <div className='d-flex justify-content-end'>
              <button className='btn btn-danger' onClick={handleDeleteAll}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDetail