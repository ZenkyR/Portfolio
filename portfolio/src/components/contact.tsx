import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_kysp5ts";
const TEMPLATE_ID = "template_ewvx4fj";
const USER_ID = "B1HRJaOGE4POlrCOF";

const FormField = ({ label, type, name, placeholder, value, onChange, error }: any) => (
  <div className="mb-4">
    <label className="block text-white text-sm font-bold mb-2">{label}</label>
    {type === "textarea" ? (
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ height: '150px' }} 
      />
    ) : (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    )}
    {error && <p className="text-red-500 mt-1">{error}</p>}
  </div>
);

export const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [toNameError, setToNameError] = useState("");
  const [fromNameError, setFromNameError] = useState("");
  const [messageError, setMessageError] = useState("");


  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setToNameError(toName ? "" : "Veuillez entrer votre nom");
    setFromNameError(fromName ? "" : "Veuillez entrer votre email");
    setMessageError(message ? "" : "Veuillez entrer votre message");

    if (!toName || !fromName || !message) {
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { to_name: toName, from_name: fromName, message },
        USER_ID
      );
      setIsSent(true);
      setToName("");
      setFromName("");
      setMessage("");
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de l'envoi de l'email");
      console.log(error);
    }
  };

  return (
    <form
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={sendEmail}
      style={{ maxWidth: '600px', margin: '0 auto' }} // Reduce the overall size of the container

    >
      <FormField
        label="Name"
        type="text"
        name="to_name"
        placeholder="Entrez votre nom"
        value={toName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToName(e.target.value)}
        error={toNameError}
      />
      <FormField
        label="Email"
        type="email"
        name="from_name"
        placeholder="Entrez votre email"
        value={fromName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFromName(e.target.value)}
        error={fromNameError}
      />
      <FormField
        label="Message"
        type="textarea"
        name="message"
        placeholder="Entrez votre message"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        error={messageError}
      />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        type="submit"
        value="Envoyer"
      />
        {errorMessage && (
      <p className="text-red-500 mt-3">{errorMessage}</p>
    )}
      {isSent === true && (
        <p className="text-green-500 mt-3">Message envoyé avec succès</p>
      )}
    </form>
  );
};