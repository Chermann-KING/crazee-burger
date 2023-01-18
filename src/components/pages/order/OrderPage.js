import React from "react";
import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  // State (état, données)
  // useParams() est un hook de react-router-dom permettant de récupérer les paramètres de l'URL
  const { inputText } = useParams();

  // Comportement (fonctions)

  // Affichage (JSX)
  return (
    <div>
      <h1>Bonjour {inputText}!</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
