import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>

      <h1>1. Tarjeta con CSS Global</h1>
      <TarjetaGlobal titulo="globales 1" contenido="Hola" color="teal" />
      <TarjetaGlobal titulo="globales 2" contenido="adios" color="crimson" />

      <h1>2. Tarjeta con CSS Modules (Variantes)</h1>
      <TarjetaModulo
        nombre="Primaria"
        descripcion="Soy una tarjeta muy mela"
        categoria="Principal"
        variante="primaria"
      />
      <TarjetaModulo
        nombre="Secundaria"
        descripcion="psss"
        categoria="Info"
        variante="secundaria"
      />
      <TarjetaModulo
        nombre="Éxito"
        descripcion=":)"
        categoria="OK"
        variante="exito"
      />

      <h1>3. Tarjeta con Estilos Dinámicos en Línea</h1>
      <TarjetaDinamica
        titulo="Dinámica Activa"
        contenido="Con estado activo = true"
        colorFondo="navy"
        colorTexto="white"
        ancho="300px"
        activo={true}
      />
      <TarjetaDinamica
        titulo="Dinámica Inactiva"
        contenido="Con estado activo = false"
        colorFondo="lightgray"
        colorTexto="black"
        ancho="300px"
        activo={false}
      />

      <h1>4. Tarjeta con Tailwind CSS ejemplos:</h1>
      <TarjetaTailwind
        titulo="Curso de juegos"
        descripcion="juega y juega mucho"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQO3qH34VS1azXDZq88MesCIn7PfI6J3-8Qw&s"
        etiqueta="pasatiempo"
      />
      <TarjetaTailwind
        titulo="Curso de astronomia"
        descripcion="Aprende astronomia con proyectos prácticos."
        imagen="https://picsum.photos/300/201"
        etiqueta="Interesante"
      />
    </main>
  );
}
