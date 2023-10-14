import { useState } from 'react';
// import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom'

export default function Users() {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    console.log(users)
    // useEffect(()=>{
    //     fetch("http://localhost:5000/users")
    //     .then(res => res.json())
    //     .then(data=> setUsers(data))
    // },[users])

    const handleDelete = (_id) => {
        console.log('deleting', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     'content-type': 'application/json',
            // },
            // body: JSON.stringify()

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.deletedCount > 0) {
                    // alert('deleted', _id, " ", data.deletedCount)
                    const remainingUsers = users.filter(user => user._id !== _id)
                    setUsers(remainingUsers)
                }
                else {
                    console.log("Failed to delete", _id)
                }
            })
    }
    const handleUpdate = (_id) => {
        console.log('Updating', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            // method: '',
            // headers: {
            //     'content-type': 'application/json',
            // },
            // body: JSON.stringify()

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                // if(data.deletedCount>0) {
                //     // alert('deleted', _id, " ", data.deletedCount)
                //     const remainingUsers = users.filter(user => user._id !== _id)
                //     setUsers(remainingUsers)
                // }
                // else {
                //     console.log("Failed to delete", _id)
                // }
            })
    }
    return (
        <div>
            <p>
                Users: {users.length}
            </p>
            <div className='w-1/2 mx-auto'>
                {
                    users.map((user) => (
                        <p key={user._id} className='flex flex-col gap-5 border-2 m-6 p-6'>
                            <div className='text-left'> 
                                <p>userID: {user._id}</p>
                                <h3>Name: {user.name}</h3>
                                <p>Email: {user.email}</p>
                            </div>
                            <div className='flex justify-evenly'>
                                <Link to={`/user/${user._id}`} className='btn btn-success' onClick={() => handleUpdate(user._id)}>Update</Link>
                                <button className='btn btn-error' onClick={() => handleDelete(user._id)}>X</button>
                            </div>
                        </p>
                    ))}
            </div>

        </div>
    )
}
