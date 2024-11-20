import React, { useState } from "react";

function InfoPeople() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("над кнопкой");
  };

  return (
    <div>
      <h1>Информация о человеке</h1>
      <p>Имя: Сулайманов Нурэмир</p>
      <p>Должность: Разработчик</p>
      <p>Компания: Sunrise Osh</p>
      <p>Возраст: 20</p>
      <p>Город: Бишкек</p>
      <p>Хобби: Учиться</p>
      {message && <p>{message}</p>}
      <button onClick={handleClick}>Повысить в должности</button>
    </div>
  );
}

export default InfoPeople;

