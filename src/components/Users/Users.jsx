import { useLoaderData } from 'react-router-dom'

export default function Users() {

    const users = useLoaderData();

    console.log(users)
    return (
        <div>
            <p>
                Users: {users.length}
            </p>
            <div>
                {
                    users.map((user) => (
                        <p key={user._id}>
                            {user.name}
                        </p>
                    ))}
            </div>

        </div>
    )
}
