import { useState, useEffect } from "react";
import YodlrApi from "./services/yodlrApi";
import UserList from "./UserList";
import UserSearch from "./UserSearch";

function Users() {
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

    /* handleSearch to make call to API to update user list */

    async function handleSearch(event) {
        setIsLoading(true);
        event.preventDefault();
        const form = event.currentTarget;

        // Get form data
        const formData = new FormData(form);
        const searchValues = {
            name: formData.get("name"),
            state: formData.get("state"),
        };

        console.log(searchValues);

        try {
            // const response = await YodlrApi.getUsers();
            // setUsers(response);
        } catch (error) {
            console.error("Admin Component: Failed to fetch users:", error);
        } finally {
            setIsLoading(false);
        }

        const searchParams = { title: formData.search };

        const response = await JoblyApi.request("jobs", searchParams);

        // if jobs returned, set jobs
        response.jobs && setJobs(response.jobs);

        // clear search form
        setFormData(INITIAL_STATE);
    }

    return (
        <div className="Users">
            <h3>Yodlr Users</h3>
            <UserSearch handleSearch={handleSearch} />
            <UserList users={users} setUsers={setUsers} isLoading={isLoading} />
        </div>
    );
}

export default Users;
