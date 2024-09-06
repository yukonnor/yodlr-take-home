import UserCard from "./UserCard";

function UserList({ users }) {
    return (
        <div className="UserList">
            <h3>Yodlr Users</h3>
            {users.map((user) => {
                return <UserCard key={user.id} user={user} />;
            })}
        </div>
    );
}

export default UserList;
