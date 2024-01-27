import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { fakeUserData } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../store/slices/userSlice'
import { IoTrashBinOutline } from "react-icons/io5";

const UserDetail = () => {
    // this state means u can access the global state or main store state...
    const data = useSelector((state) => {
        return state.users
    })
    const dispatch = useDispatch()
    const addNewUser = (name) => {
        console.log(name)
        dispatch(addUser(name))
    }
    const handleSingleDelete = (id) => {
        dispatch(removeUser(id))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col py-3">
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h1>User Data..</h1>
                            <button className='btn btn-secondary' onClick={() => { addNewUser(fakeUserData()) }}>Add user</button>
                        </div>
                        <div className='my-3 text-secondary'>
                            {
                                data.map((user, id) => {
                                    return <>
                                        < hr />
                                        <div className='d-flex justify-content-between align-items-center py-1'>
                                            <h5 key={id}>
                                                {user}
                                            </h5>
                                            <button onClick={() => handleSingleDelete(id)}  className='btn '>
                                                <IoTrashBinOutline size={23} />
                                            </button>
                                        </div>
                                    </>
                                })
                            }
                        </div>
                        <DeleteAllUser />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail