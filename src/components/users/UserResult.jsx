import { useState, useEffect } from "react";

function UserResult() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(_ => {
    fecthUsers();
  }, []);

  const fecthUsers = async _ => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map(user => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    );
  } else return <h3>Loading...</h3>;
}

export default UserResult;