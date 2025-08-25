"use client";
import React from "react";
import styles from "./TarjetaModulo.module.css";

export default function TarjetaModulo({ nombre, descripcion, categoria, variante }) {
  // Composición de clases: base + variante
  const claseTarjeta = `${styles.tarjeta} ${
    variante === "primaria"
      ? styles.tarjetaPrimaria
      : variante === "secundaria"
      ? styles.tarjetaSecundaria
      : variante === "exito"
      ? styles.tarjetaExito
      : ""
  }`;

  return (
    <div className={claseTarjeta}>
      <h2 className={styles.titulo}>{nombre}</h2>
      <p className={styles.descripcion}>{descripcion}</p>
      <span className={styles.categoria}>{categoria}</span>
    </div>
  );
}
