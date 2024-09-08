1-Inicialice el proyecto el 25/08 
2-Estructure la pagina de inicio, con su respectivas portadas y secciones 
3-Intale el react router dom 
4-Busque en internet como hacer para que se cargue la pagina desde el principio y es con use effect y useLocation 
const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);