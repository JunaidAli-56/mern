import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { useSelector } from 'react-redux';

const UserDetail = () => {
    const mySliceState = useSelector((state) => state.UserSlice);
    return (
        <div className="container">
            <div className="row">
                <div className="col py-3">
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h1>User Data..</h1>
                            <button className='btn btn-secondary'>Add user</button>
                        </div>
                        <ul>
                            <li>cake</li>
                            <li>lali</li>
                        </ul>
                        <hr />
                        <DeleteAllUser />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail