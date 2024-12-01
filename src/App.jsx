import { useState } from "react";
import "./App.css";
function App() {
  const [number, setNumber] = useState("");
  const [shape, setShape] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [fruits, setFruits] = useState([]);
  const [colors, setColors] = useState("");
  const [email, setEmail] = useState("");
  const [inValid, setInValid] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  // Functions
  const handleShape = (event) => {
    event.preventDefault(); // Formaning yuborilishiga to'sqinlik qiladi
    switch (Number(number)) {
      case 3:
        setShape("Uchburchak");
        break;
      case 4:
        setShape("To'rtburchak");
        break;
      case 5:
        setShape("Beshburchak");
        break;
      default:
        setShape("Bunday shakl mavjud emas");
    }
  };

  const handlePassword = (event) => {
    event.preventDefault(); // Formaning yuborilishiga to'sqinlik qiladi
    setCheckPassword(
      password1 === password2 ? "Parol mos keldi" : "Parol mos kelmadi"
    );
  };

  const handleFruits = (event) => {
    let copied = [...fruits];
    if (event.target.checked) copied.push(event.target.value);
    else copied = copied.filter((value) => value !== event.target.value);
    setFruits(copied);
  };

  const handleColors = (event) => setColors(event.target.value);

  const handleEmailValidate = (event) => {
    event.preventDefault(); // Formaning yuborilishiga to'sqinlik qiladi
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setInValid(regex.test(email) ? "Email to'g'ri" : "Email noto'g'ri formatda");
  };

  const handleChangeWord = (event) => {
    event.preventDefault(); // Bu yerda event.preventDefault() ni qo'shish kerak
    setWord1(word2);
    setWord2(word1);
  };

  const handleTodo = (event) => {
    event.preventDefault(); // Formaning yuborilishiga to'sqinlik qiladi
    setTodo([...todo, { task, id: Date.now() }]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Vazifalar To'plami</h1>

        {/* 1. Shaklni aniqlash */}
        <form onSubmit={handleShape} className="form">
          <h2 className="form-title">1. Shaklni aniqlash</h2>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Son kiriting..."
            className="input-field"
          />
          <button type="submit" className="submit-btn">Aniqlash</button>
          <p className="result">{shape}</p>
        </form>

        {/* 2. Parol tekshirish */}
        <form onSubmit={handlePassword} className="form">
          <h2 className="form-title">2. Parolni tekshirish</h2>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Parolni kiriting..."
            className="input-field"
          />
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Parolni qayta kiriting..."
            className="input-field"
          />
          <button type="submit" className="submit-btn">Tekshirish</button>
          <p className="result">{checkPassword}</p>
        </form>

        {/* 3. Meva tanlash */}
        <form className="form">
          <h2 className="form-title">3. Meva tanlash</h2>
          {["Olma", "Apelsin", "Banan"].map((fruit) => (
            <label key={fruit} className="checkbox-label">
              <input
                type="checkbox"
                value={fruit}
                onChange={handleFruits}
                className="checkbox"
              />
              {fruit}
            </label>
          ))}
          <ul className="result-list">
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))}
          </ul>
        </form>

        {/* 4. Rang tanlash */}
        <form className="form">
          <h2 className="form-title">4. Rang o'zgartirish</h2>
          {["Qizil", "Yashil", "Ko'k"].map((color) => (
            <label key={color} className="radio-label">
              <input
                type="radio"
                name="colors"
                value={color}
                onChange={handleColors}
                className="radio"
              />
              {color}
            </label>
          ))}
          {colors && (
            <div
              className="color-box"
              style={{
                backgroundColor:
                  colors === "Qizil"
                    ? "red"
                    : colors === "Yashil"
                    ? "green"
                    : "blue",
              }}
            ></div>
          )}
        </form>

        {/* 5. Email tekshirish */}
        <form onSubmit={handleEmailValidate} className="form">
          <h2 className="form-title">5. Email formatini tekshirish</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email kiriting..."
            className="input-field"
          />
          <button type="submit" className="submit-btn">Tekshirish</button>
          <p className="result">{inValid}</p>
        </form>

        {/* 6. Qiymatlarni almashtirish */}
        <form className="form">
          <h2 className="form-title">6. Qiymatlarni almashtirish</h2>
          <input
            type="text"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
            placeholder="Birinchi qiymat..."
            className="input-field"
          />
          <input
            type="text"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
            placeholder="Ikkinchi qiymat..."
            className="input-field"
          />
          <button onClick={handleChangeWord} className="submit-btn">Qiymatlarni almashtirish</button>
          <p className="result">{`Birinchi: ${word1}, Ikkinchi: ${word2}`}</p>
        </form>

        {/* 7. Todo ro'yxati */}
        <form onSubmit={handleTodo} className="form">
          <h2 className="form-title">7. Vazifa qo'shish</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Vazifani kiriting..."
            className="input-field"
          />
          <button type="submit" className="submit-btn">Vazifani qo'shish</button>
        </form>

        <ul className="todo-list">
          {todo.map(({ task, id }) => (
            <li key={id} className="todo-item">
              <span>{task}</span>
              <button
                onClick={() => handleDelete(id)}
                className="delete-btn"
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
