"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export function Franquicia_Experiencia() {
  const [expName, setExpName] = useState("");
  const [expEmail, setExpEmail] = useState("");
  const [expMessage, setExpMessage] = useState("");

  const [franqName, setFranqName] = useState("");
  const [franqEmail, setFranqEmail] = useState("");
  const [franqMessage, setFranqMessage] = useState("");

  const expForm = useRef();
  const franqForm = useRef();

  const sendEmail = (formRef) => {
    emailjs
      .sendForm(
        "service_m7nubt3",
        "template_gvesn88",
        formRef.current,
        "QKnAoh9QQZ0-6AXIU"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Formulario enviado correctamente. ¡Gracias por tu mensaje!"
          );
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Error al enviar el formulario. Inténtalo de nuevo más tarde."
          );
        }
      );
  };

  const handleSubmit = (
    e,
    formRef,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage
  ) => {
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

    sendEmail(formRef);

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
        <div className="w-full text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            ¡Contanos tu experiencia!
          </h2>
        </div>
        <form
          className="w-full max-w-md space-y-4"
          onSubmit={(e) =>
            handleSubmit(
              e,
              expForm,
              expName,
              expEmail,
              expMessage,
              setExpName,
              setExpEmail,
              setExpMessage
            )
          }
          ref={expForm}
        >
          <div>
            <label className="text-sm font-medium" htmlFor="expName">
              Nombre
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="expName"
              placeholder="Ingresa tu nombre"
              value={expName}
              onChange={(e) => setExpName(e.target.value)}
              name="user_name"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="expEmail">
              Email
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="expEmail"
              placeholder="Ingresa tu email"
              value={expEmail}
              onChange={(e) => setExpEmail(e.target.value)}
              name="user_email"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="expMessage">
              Mensaje
            </label>
            <textarea
              className="w-full resize-none rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="expMessage"
              placeholder="Cuéntanos sobre tu experiencia"
              value={expMessage}
              onChange={(e) => setExpMessage(e.target.value)}
              name="message"
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
      <div className="flex w-full flex-col items-center justify-center bg-gray-900 p-8 text-white md:w-1/2 md:p-12 lg:p-16 xl:p-20 gradient-background">
        <h2 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          ¡Quiero ser parte!
        </h2>
        <form
          className="w-full max-w-md space-y-4"
          onSubmit={(e) =>
            handleSubmit(
              e,
              franqForm,
              franqName,
              franqEmail,
              franqMessage,
              setFranqName,
              setFranqEmail,
              setFranqMessage
            )
          }
          ref={franqForm}
        >
          <div>
            <label className="text-sm font-medium" htmlFor="franqName">
              Nombre
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="franqName"
              placeholder="Ingresa tu nombre"
              value={franqName}
              onChange={(e) => setFranqName(e.target.value)}
              name="user_name"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="franqEmail">
              Email
            </label>
            <input
              className="h-10 w-full rounded-md border px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="franqEmail"
              placeholder="Ingresa tu email"
              value={franqEmail}
              onChange={(e) => setFranqEmail(e.target.value)}
              name="user_email"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="franqMessage">
              Mensaje
            </label>
            <textarea
              className="w-full resize-none rounded-md border px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="franqMessage"
              placeholder="Cuéntanos por qué quieres ser parte de Vadum"
              value={franqMessage}
              onChange={(e) => setFranqMessage(e.target.value)}
              name="message"
            ></textarea>
          </div>
          <button
            className="h-10 w-full rounded-md bg-white text-black text-sm font-medium border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 hover:bg-black hover:text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
