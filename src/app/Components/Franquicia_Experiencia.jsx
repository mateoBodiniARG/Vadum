"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Franquicia_Experiencia() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("El campo nombre no puede estar vacío.");
      return;
    }

    if (!email) {
      toast.error("El campo email no puede estar vacío.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Por favor, ingrese un email válido (ejemplo@gmail.com).");
      return;
    }

    if (!message) {
      toast.error("El campo mensaje no puede estar vacío.");
      return;
    }

    toast.success("Formulario enviado correctamente. ¡Gracias por tu mensaje!");

    setName("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className="flex flex-col md:flex-row h-full w-full">
      <div className="flex w-full flex-col items-center justify-center bg-gray-100 p-8 md:w-1/2 md:p-12 lg:p-16 xl:p-20">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          ¡Contános tu experiencia!
        </h2>
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium" htmlFor="name">
              Nombre
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="w-full resize-none rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              placeholder="Cuéntanos sobre tu experiencia"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            className="h-10 w-full rounded-md bg-black text-white text-sm font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 hover:bg-white hover:text-black"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center bg-gray-900 p-8 text-white md:w-1/2 md:p-12 lg:p-16 xl:p-20">
        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-4xl">
            Vos también podés ser parte de{" "}
            <span className="bg-cyan-700 text-white rounded-md inline-block px-2">
              Vadum.
            </span>{" "}
            ¡Escribinos ya!
          </h2>
          <p className="text-lg">
            Para ser parte de nuestra franquicia, por favor completa el
            formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
          <button className="h-10 w-full rounded-md bg-[#b6dde5] text-black text-sm font-bold hover:bg-[#8fbdc7] transition-colors duration-300">
            Llenar formulario
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
