import { useState, useEffect } from "react";
import YodlrApi from "./services/yodlrApi";
import UserCard from "./UserCard";

function UserList() {
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

    /* toggleUserState function passed to UserCard  */

    async function toggleUserState(user) {
        try {
            user.state = user.state === "pending" ? "active" : "pending";
            const response = await YodlrApi.updateUser(user);
            setUsers((users) =>
                users.map((user) => {
                    if (user.id === response.id) return { ...user, state: response.state };
                    return user; // Return other users unchanged
                })
            );
        } catch (error) {
            console.error("Admin Component: Failed to update user:", error);
        } finally {
            setIsLoading(false);
        }
    }

    /* Simple loading state to display while we wait for data from the API */

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <div className="UserList">
            <h3>Yodlr Users</h3>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} toggleUserState={toggleUserState} />;
            })}
        </div>
    );
}

export default UserList;
