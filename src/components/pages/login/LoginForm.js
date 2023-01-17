import React from "react";
import { useState } from "react";

export default function LoginForm() {
  // state (état, données)
  const [inputText, setInputText] = useState("");

  // comportement (fonctions)
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputText} !`);
    setInputText("");
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
