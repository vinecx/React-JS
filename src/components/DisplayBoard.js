import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers, deleteAll}) => {


    
    return(
        <div style={{backgroundColor:'grey', borderRadius: '20px'}} className="p-4 shadow">
            <h4 style={{color: 'white', marginBottom: '0px'}}>Users Created <span className = "badge badge-primary badge-pill">created</span></h4>
            <div className="display-4 text-white">
                {numberOfUsers}
            </div>

            <div className="d-flex justify-content-end">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-outline-light font-weight-bold mt-2 mr-2 btn-block">Get all Users</button>
                <button type="button" onClick={(e) => deleteAll()} className="btn btn-danger font-weight-bold mt-2">Delete Users</button>
            </div>

        </div>
    )
}