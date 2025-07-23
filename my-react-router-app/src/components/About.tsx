import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Про нас</h1>
      <p className="text-lg mb-6 max-w-xl">
        Ми — команда ентузіастів, яка створює сучасні веб-застосунки для навчання та розвитку. Наша мета — зробити технології доступними для кожного.
      </p>
      <p className="text-base text-gray-600 max-w-xl">
        На цій сторінці ви можете дізнатися більше про наші цінності, підхід до роботи та команду. Дякуємо, що обрали наш застосунок!
      </p>
    </div>
  );
};

export default About;