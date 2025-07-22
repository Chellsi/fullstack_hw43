import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Головна сторінка</h1>
      <p className="text-lg mb-6">Вітаємо на домашній сторінці нашого застосунку!</p>
      <img src="/vite.svg" alt="Vite Logo" className="w-32 mb-6" />
      <p className="text-base text-gray-600">Тут ви знайдете основну інформацію та навігацію по сайту.</p>
    </div>
  );
};

export default Home;
