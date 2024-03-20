import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

type NotificacaoProps = {
    show: boolean;
    message: string;
};

const NotificacaoGeral = ({ show, message }: NotificacaoProps) => {
  const [isOpen, setIsOpen] = useState(show);

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-md">
        {message}
        <button
          onClick={() => setIsOpen(false)}
          className="ml-4 focus:outline-none"
        >
          Fechar
        </button>
      </div>
    </Transition>
  );
};

export default NotificacaoGeral;
