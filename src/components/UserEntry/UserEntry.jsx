import React, { useState } from 'react'


export default function UserEntry() {
    const [userList, setUserList] = useState("")

    const addUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        // console.log(name)
        // console.log(email)
        // console.log(password)

        const user = { name, email, password }

        console.log(user)

        // const object = { name: "NF", email:"nf@ridoy.com", password: "123456" }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    setUserList(data)
                    alert("Added User ", data.inserted)
                    // form.reset();
                }
                else {
                    alert("Something went wrong")
                }

            });
        // .then((data) =>setUserList(JSON.parse(data)));


        // // Clear the input fields

        // user.name.value = "";
        // user.email.value = "";
        // user.password.value = "";
    }
    return (
        <div>
            <div>
                <h1 className='text-xl'>Enter Your Info</h1>
                <form className='flex flex-col items-center' onSubmit={addUser}>

                    <input type="text" name='name' className='border-2 my-2' placeholder='Name' />
                    <input type="text" name='email' className='border-2 my-2' placeholder='Email' />
                    <input type="text" name='password' className='border-2 my-2' placeholder='Password' />
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </form>
                <div>
                    {userList[0]}
                </div>
            </div>
        </div>
    )
}
