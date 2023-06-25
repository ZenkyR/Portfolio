import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);
    const nameValue = formData.get("to_name");
    const emailValue = formData.get("from_name");
    const messageValue = formData.get("message");

    if (!nameValue || !emailValue || !messageValue) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const nameEscaped = encodeURIComponent(nameValue as string);
    const emailEscaped = encodeURIComponent(emailValue as string);
    const messageEscaped = encodeURIComponent(messageValue as string);

    emailjs
      .sendForm(
        "service_kysp5ts",
        "template_ewvx4fj",
        form.current,
        "B1HRJaOGE4POlrCOF"
      )
      .then((result) => {
        setIsSent(true);
        if (form.current) {
          form.current.reset();
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form
      className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-5 shadow-lg"
      ref={form}
      onSubmit={sendEmail}
    >
      <label className="text-white">Name</label>
      <input
        className="rounded-xl p-3 w-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="to_name"
        placeholder="Entrez votre nom"
      />
      <label className="text-white">Email</label>
      <input
        className="rounded-xl p-3 w-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="from_name"
        placeholder="Entrez votre email"
      />
      <label className="text-white">Message</label>
      <textarea
        className="rounded-xl p-3 w-full h-32 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="message"
        placeholder="Entrez votre message"
      ></textarea>
      <input
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-3 mt-5 w-40"
        type="submit"
        value="Send"
      />
      {isSent === true && (
        <p className="text-white mt-3">Message sent successfully!</p>
      )}
    </form>
  );
};
