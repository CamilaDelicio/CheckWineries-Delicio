import cataTrivento from "../assets/evento/cata-evento.jpg"
import sunsent from "../assets/evento/cata-evento1.jpg";
import tour from "../assets/evento/cata-evento2.jpg";
import picnic from "../assets/evento/cata-evento3.jpg"

  const eventos = [
    {
      foto: cataTrivento,
      nombre: "Cosecha Mística Alba",
      bodega: "Bodega Tempus Alba",
      ubicacion: "BPS, Moreno 572, M5504 Maipú, Mendoza",
      direccion: "Moreno 572 Maipú",
      tipo: "Degustación",
      fecha: "2025-02-20",
      horario: "18:00 a 19:30",
      precio: "$15.000",
      contacto: "+5492616857595",
      actividades: [
          "Degustación de 5 vinos premium.",
          "Recorrido por los viñedos con explicación de la cosecha."
      ]
  },
  {
      foto: tour,
      nombre: "Tour López",
      bodega: "Bodega López",
      ubicacion: "Bodegas López, Ozamis 375, M5511APG Mendoza",
      direccion: "Ozamis 375, Maipú",
      tipo: "Turismo",
      fecha: "2025-03-10",
      horario: "11:00 a 13:00",
      precio: "$12.000",
      contacto: +5492615948023,
      actividades: [
          "Exposición de arte vinícola.",
          "Degustacion de 3 Copas."
      ]
  },
  {
      foto: sunsent,
      nombre: "Sunsent Vigil",
      bodega: "Casa Vigil",
      ubicacion: "Casa Vigil Bodega Videla Aranda 7008, M5519 Maipú, Mendoza",
      direccion: "Videla Aranda 7008, Maipú",
      tipo: "Fiesta",
      fecha: "2025-04-01",
      horario: "20:00 a 00:00",
      precio: "$50.000",
      contacto: "+5492613411729",
      actividades: [
        "Música en vivo.",
        "Barra libre de vinos bajo las estrellas."
    ]
    },
    {
      foto: picnic,
      nombre: "Savie Picnic",
      bodega: "Bodega Savina",
      ubicacion: "Bodega Finca Savina, Cjón. Zapata 771, M5517 Maipú, Mendoza",
      direccion: "Cjón. Zapata 771, Maipú",
      tipo: "Maridaje de quesos",
      fecha: "2025-03-14",
      horario: "15:00 a 17:00",
      precio: "$20.000",
      contacto: "+54 9 2612404860",
      actividades: [
        "Picnic con frutas de estación", 
        "Degustación de quesos con maridajes de vino"
      ]
  },
  ];
export default eventos;