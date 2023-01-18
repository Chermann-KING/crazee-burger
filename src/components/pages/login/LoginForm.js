import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputText, setInputText] = useState("");
  // useNavigate() est un hook de react-router-dom permettant de forcer la navigation dans ce cas-ci
  const navigate = useNavigate();

  // comportement (fonctions)
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
    // forcer la navigation vers la OrderPage
    navigate(`/order/${inputText}`);
  };

  // affichage (JSX)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        onChange={handleChange}
        value={inputText}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button type="submit">Accédez à votre espace</button>
    </form>
  );
}
