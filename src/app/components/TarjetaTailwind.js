"use client";
import React from "react";

export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-bold mb-2">{titulo}</h2>
      <p className="text-sm text-gray-600 mb-3">{descripcion}</p>
      <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded self-start">
        {etiqueta}
      </span>
    </div>
  );
}
