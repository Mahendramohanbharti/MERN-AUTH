import React from 'react';

function UsersList(){
    return(
        <div>
            <h1>Users List</h1>

            <table className="table table-dark">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>

            </table>
        </div>
    )
}

export default UsersList;
