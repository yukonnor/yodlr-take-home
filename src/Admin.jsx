import { useState, useEffect } from "react";
import YodlrApi from "./services/yodlrApi";
import UserList from "./UserList";

function Admin() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    /* useEffect to get users from yodlr API upon inital render */

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await YodlrApi.getUsers();
                setUsers(response);
            } catch (error) {
                console.error("Admin Component: Failed to fetch users:", error);
            } finally {
                setIsLoading(false);
            }
        }
        getUsers();
    }, []);

    /* Simple loading state to display while we wait for data from the API */

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div>
            <h1>Admin</h1>
            <UserList users={users} />
        </div>
    );
}

export default Admin;
