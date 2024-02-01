 import { useEffect, useState } from "react";
import axios from "axios";

import { Title } from "./Title";
import { Inputvalue } from "./Input";

export default function Fetch() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(String);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedValue = event.target.value;

    if (selectedValue === "user") {
      fetchUser();
    } else if (selectedValue === "repositories") {
      fetchRepo();
    }
  };

  const fetchUser = async () => {
    let url: string = "https://api.github.com/users";
    try {
      const responseData = await axios.get(url);
      setResponse(responseData.data);
    } catch (error) {
      setError('Error fetching user data. Please try again.')
    }
  };

    const fetchRepo = async () => {
    let url: string = "https://api.github.com/repositories";
    const responseData: any = await axios.get(url);
    setResponse(responseData.data);
  };
  const [value, setvalue] = useState("");
  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
    const filteredvalue = response.filter((item: any) =>
      item.login.includes(event.target.value)
    );
    setResponse(filteredvalue);
    if (!event.target.value) {
      fetchUser();
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Title />
      <div className="input-field">
        <Inputvalue value={value} setData={setData} />
        <select
          className="dropdown"
          name="subject"
          id="subject"
          onChange={handleSelectChange}
        >
          <option value="user">user</option>
          <option value="repositories">repositories</option>
        </select>
      </div>
      <ul>
        <div className="content-user">
          {response.map((user: any) => (
            <>
              <div className="map">
                <li className="list-user" key={user.id}>
                  <span className="bold">User: </span>
                  {user.login || user.name}
                </li>
              </div>
            </>
          ))}
        </div>
      </ul>
      <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </>
  );
}