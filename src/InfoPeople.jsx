import React, { useState } from "react";

function InfoPeople() {
  const [position, setPosition] = useState("Разработчик");

  const handlePromotion = () => {
    setPosition("Старший разработчик");
  };

  return (
    <div>
      <h1>Информация о человеке</h1>
      <p>Имя: Сулайманов Нурэмир</p>
      <p>Должность: {position}</p>
      <p>Компания: Sunrise Osh</p>
      <p>Возраст: 20</p>
      <p>Город: Бишкек</p>
      <p>Хобби: Учиться</p>
      <button onClick={handlePromotion}>Повысить в должности</button>
    </div>
  );
}

export default InfoPeople;
