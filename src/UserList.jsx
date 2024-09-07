import YodlrApi from "./services/yodlrApi";
import UserCard from "./UserCard";

function UserList({ users = [], setUsers, isLoading }) {
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
        }
    }

    /* Simple loading state to display while we wait for data from the API */

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="UserList">
            {users.map((user) => {
                return <UserCard key={user.id} user={user} toggleUserState={toggleUserState} />;
            })}
        </div>
    );
}

export default UserList;
