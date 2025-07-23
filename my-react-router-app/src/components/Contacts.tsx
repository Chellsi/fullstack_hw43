import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Контакти</h1>
      <p className="text-lg mb-6 max-w-xl">
        Зв'яжіться з нами для отримання додаткової інформації або співпраці.
      </p>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md max-w-md w-full mb-4">
        <p className="mb-2"><span className="font-semibold">Email:</span> info@example.com</p>
        <p className="mb-2"><span className="font-semibold">Телефон:</span> +38 (099) 123-45-67</p>
        <p><span className="font-semibold">Адреса:</span> м. Київ, вул. Хрещатик, 1</p>
      </div>
      <p className="text-base text-gray-600">Ми завжди раді вашим зверненням!</p>
    </div>
  );
};

export default Contacts;
