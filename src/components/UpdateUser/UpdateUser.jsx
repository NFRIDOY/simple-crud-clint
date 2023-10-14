import { useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function UpdateUser() {

    const loadedUser = useLoaderData();
    // const [user, setUser] = useState(loadedUser)

    const { _id, name, email, password } = loadedUser
    console.log(loadedUser)
    console.log(loadedUser.name)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value

        const updatedUser = {name, email}
        console.log(updatedUser)

        fetch(`http://localhost:5000/user/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data=> console.log(data))
    }

    return (
        <div>
            {/* <h1>User Id {loadedUser?._id}</h1>
            <h1>User Name {loadedUser?.name}</h1>
            <h1>User Email {loadedUser?.email}</h1> */}
            <h1 className="my-10 text-3xl">Update Your Info</h1>

            <div className="w-1/2 mx-auto">
                <form className="form-control" onSubmit={handleUpdate}>
                    <input className="input input-bordered" type="text" name="name" placeholder="Name" defaultValue={loadedUser?.name} />
                    <br />
                    <input className="input input-bordered" type="text" name="email" placeholder="email" defaultValue={loadedUser?.email} />
                    <br />
                    <button className="btn btn-success" >Update</button>
                </form>
            </div>
        </div>
    )
}
