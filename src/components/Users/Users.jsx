import { useLoaderData } from 'react-router-dom'

export default function Users() {

    const users = useLoaderData();


    return (
        <div>
            Users: { users.length}

        </div>
    )
}
