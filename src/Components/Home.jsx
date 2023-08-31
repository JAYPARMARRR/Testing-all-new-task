import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    gender: "",
    language: "",
  });






  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

  };

  console.log(userData);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/contact")}>Go to Contact page</button>

      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={(e) => setUserData({...userData,name:e.target.value}) }
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" value={userData.name} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="language">Language:</label>
          <div>
            <input
              type="checkbox"
              id="gujarati"
              name="language"
              value={userData.language}
              onChange={handleChange}
            />
            <label htmlFor="gujarati">Gujarati</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="russian"
              name="language"
              value={userData.language}
              onChange={handleChange}
            />
            <label htmlFor="rasiyan">Rasiyan</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="english"
              name="language"
              value={userData.language}
              onChange={handleChange}
            />
            <label htmlFor="english">English</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
