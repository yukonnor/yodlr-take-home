import { useState, useEffect } from "react";
import YodlrApi from "./services/yodlrApi";
import UserList from "./UserList";
import UserSearch from "./UserSearch";

function Users() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    /** Get full set of Users from the API */
    async function getUsers() {
        console.log("Getting users from the API...");
        setIsLoading(true);
        try {
            const response = await YodlrApi.getUsers();
            setUsers(response);
        } catch (error) {
            console.error("Admin Component: Failed to fetch users:", error);
        } finally {
            setIsLoading(false);
        }
    }

    /* useEffect to get users from yodlr API upon inital render */

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="Users">
            <h3>Yodlr Users</h3>
            <UserSearch setUsers={setUsers} getUsers={getUsers} />
            <UserList users={users} setUsers={setUsers} isLoading={isLoading} />
        </div>
    );
}

export default Users;
