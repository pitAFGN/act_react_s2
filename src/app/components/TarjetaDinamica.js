"use client";
import React from "react";

export default function TarjetaDinamica({
  titulo,
  contenido,
  colorFondo,
  colorTexto,
  ancho,
  activo,
}) {
  const estilos = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "12px",
    boxShadow: activo
      ? "0 6px 15px rgba(0,0,0,0.3)"
      : "0 2px 6px rgba(0,0,0,0.1)",
    transform: activo ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={estilos}>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
}
