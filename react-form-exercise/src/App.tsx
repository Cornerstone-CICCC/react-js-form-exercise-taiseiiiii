import { useState, type ChangeEvent } from "react";
import "./App.css";

const FOOD_OPTIONS = ["Chicken", "Beef", "Vegetables", "Dessert", "Pork"] as const;

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleFoodChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFavoriteFoods((prev) =>
      checked ? [...prev, value] : prev.filter((food) => food !== value)
    );
  };

  const handleDisplay = () => {
    setShowGreeting(true);
  };

  const handleClear = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setFavoriteFoods([]);
    setShowGreeting(false);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          {FOOD_OPTIONS.map((food) => (
            <div key={food}>
              <input
                type="checkbox"
                id={food.toLowerCase()}
                name="favoriteFoods"
                value={food}
                checked={favoriteFoods.includes(food)}
                onChange={handleFoodChange}
              />
              <label htmlFor={food.toLowerCase()}>{food}</label>
            </div>
          ))}
        </div>
      </form>

      <button type="button" onClick={handleDisplay}>
        Display User
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>

      <div className="output">
        {showGreeting && (
          <p>
            Hello {firstname} {lastname}. You are {age} years old and your
            favorite foods are: {favoriteFoods.join(", ")}.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
