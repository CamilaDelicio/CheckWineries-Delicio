import cataTrivento from "../assets/evento/cata-evento.jpg"
import sunsent from "../assets/evento/cata-evento1.jpg";
import tour from "../assets/evento/cata-evento2.jpg";
import picnic from "../assets/evento/cata-evento3.jpg"
import atardecer from "../assets/evento/atardecer-evento.jpg"
import barrica from "../assets/evento/barricas-evento.jpg"
import olivicola from "../assets/evento/oli-evento.jpg"
import atidegustacion from "../assets/evento/atilio-evento.jpg"
import picnicBombal from "../assets/evento/picnic-evento.jpg"
  const eventos = [
    {
      foto: cataTrivento,
      nombre: "Cosecha Mística Alba",
      bodega: "Bodega Tempus Alba",
      ubicacion: "BPS, Moreno 572, M5504 Maipú, Mendoza",
      direccion: "Moreno 572 Maipú",
      tipo: "Degustación",
      fecha: "2025-08-20",
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
      fecha: "2025-03-21",
      horario: "11:00 a 13:00",
      precio: "Sin costo",
      contacto: +5492615948023,
      actividades: [
          "Exposición de arte vinícola.",
          "Recorrido por las intalaciones"
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
      contacto: +5492613411729,
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
      fecha: "2025-03-27",
      horario: "15:00 a 17:00",
      precio: "$20.000",
      contacto: +5492612404860,
      actividades: [
        "Picnic con frutas de estación", 
        "Degustación de quesos con maridajes de vino"
      ]
    },
      {
        foto: atardecer,
        nombre: "Atardecer en los Andes",
        bodega: "Bodega Cecchin",
        ubicacion: "Bodega Familia Cecchin",
        direccion: "Ruta 60 S/N, Maipú",
        tipo: "Degustación",
        fecha: "2025-03-22",
        horario: "17:30 a 20:00",
        precio: "$18.000",
        contacto: "+5492613062692",
        actividades: [
          "Degustación de 6 vinos de altura.",
          "Charla sobre maridajes con un sommelier invitado."
        ]
      },
      {
        foto: olivicola,
        nombre: "OliTour",
        bodega: "Olivícola Laur",
        ubicacion: "LAUR Olivícola Videla Aranda 2850, M5517 Cruz de Piedra, Mendoza",
        direccion: "Videla Aranda 2850, Maipú",
        tipo: "Fiesta",
        fecha: "2025-04-05",
        horario: "20:00 a 02:00",
        precio: "$20.000",
        contacto: "+5492618765432",
        actividades: [
          "Show en vivo de música folclórica.",
          "Cena maridada con vinos de la casa."
        ]
      },
      {
        foto: atidegustacion,
        nombre: "Sabores del Terroir",
        bodega: "Bodega Atili Avena",
        ubicacion: "Bodega Atilio Avena Castro Barros 8115, Russell, Mendoza",
        direccion: "Castro Barros 8115, Maipú",
        tipo: "Degustación",
        fecha: "2025-04-05",
        horario: "18:00 a 20:00",
        precio: "$22.000",
        contacto: "+5492612088332",
        actividades: [
          "Degustación de vinos con barricas seleccionadas.",
          "Presentación del enólogo principal."
        ]
      },
      {
        foto: picnicBombal,
        nombre: "Picnic entre Viñedos",
        bodega: "Bodega Bombal",
        ubicacion: "Bodega Bombal Cjón. Zapata s/n, M5517 Maipú, Mendoza",
        direccion: "Cjón. Zapata s/n, Maipú",
        tipo: "Actividad",
        fecha: "2025-04-12",
        horario: "12:00 a 15:00",
        precio: "$10.000",
        contacto: "+5492617485523",
        actividades: [
          "Picnic gourmet con vista a la Cordillera.",
          "Juegos recreativos y actividades en familia."
        ]
      },
      {
        foto: barrica,
        nombre: "Historia entre Barricas",
        bodega: "Luigi Bosca",
        ubicacion: "Finca El Paraíso - Bodega Luigi Bosca El Paraíso 1926, M5531 Maipú, Mendoza",
        direccion: "El Paraiso 1926, Maipú",
        tipo: "Museo",
        fecha: "2025-05-10",
        horario: "10:00 a 12:30",
        precio: "$8.000",
        contacto: "+5492611234567",
        actividades: [
          "Recorrido histórico por la vitivinicultura mendocina.",
          "Degustación guiada de vinos antiguos."
        ]
  },
  ];
export default eventos;