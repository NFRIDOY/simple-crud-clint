import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'

export default function Users() {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    console.log(users)

    const handleDelete = (_id) => {
        console.log('deleting', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE',
            // headers: {
            //     'content-type': 'application/json',
            // },
            // body: JSON.stringify()

        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            if(data.deletedCount>0) {
                // alert('deleted', _id, " ", data.deletedCount)
                const remainingUsers = users.filter(user => user._id !== _id)
                setUsers(remainingUsers)
            }
            else {
                console.log("Failed to delete", _id)
            }
        })        
    }
    return (
        <div>
            <p>
                Users: {users.length}
            </p>
            <div>
                {
                    users.map((user) => (
                        <p key={user._id}>
                            {user.name} : {user.email} : <button className='p-px border-2' onClick={() => handleDelete(user._id)}>X</button>
                        </p>
                    ))}
            </div>

        </div>
    )
}
