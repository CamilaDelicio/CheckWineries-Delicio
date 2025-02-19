1-Inicialice el proyecto el 25/08 
2-Estructure la pagina de inicio, con su respectivas portadas y secciones 02/09
3-Intale el react router dom 
4-Busque en internet como hacer para que se cargue la pagina desde el principio y es con use effect y useLocation 
const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);


5- cargue base de datos, con las primeras 3 bodegas el 13/09
6- Creamos el archivo json llamado datos-bodegas en la carpeta de componentes: Agregamos los campos, y lo hacemos por id 
7-Pra visualixar nombre con foto en la seccion "todas las bodegas" lo realice con el id realizando un map con el id de dicha bodega para que se vicualice el campo correcto
6- Carrusel de foto tenemos que instalar react-image-gallery
  npm install react-image-gallery
  componete carrusel importamos:
  import ImageGallery from 'react-image-gallery';
  import 'react-image-gallery/styles/css/image-gallery.css';

  # CSS
  @import "~react-image-gallery/styles/css/image-gallery.css";

  7- REalice el detalle de la bodega ordenando los elementos de titutolo carusel, detalles como redes sociales historia yhorarios actividades transporte y uicacion. 

  8- Ordene los elementos de detalles y empece a personalizar el mapa con Leaflet de react del cual tuve que intalar 
    npm install react-leaflet leaflet