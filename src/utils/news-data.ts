export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export const newsData: NewsItem[] = [
  {
    id: 'nuevo-complejo-residencial',
    title: 'Nuevo complejo residencial en la zona sur',
    excerpt: 'Iniciamos un proyecto innovador que incluye 20 unidades de vivienda con la más alta tecnología y confort.',
    content: `
      <p>Estamos entusiasmados de anunciar el inicio de un nuevo proyecto residencial en la zona sur de la ciudad. Este desarrollo contará con 20 unidades de vivienda diseñadas con los más altos estándares de calidad y tecnología.</p>
      
      <p>El complejo incluirá:</p>
      <ul>
        <li>Apartamentos de 1, 2 y 3 dormitorios</li>
        <li>Áreas comunes con piscina climatizada</li>
        <li>Gimnasio completamente equipado</li>
        <li>Seguridad las 24 horas</li>
        <li>Estacionamiento subterráneo</li>
      </ul>
      
      <p>Las obras comenzarán el próximo mes y se estima un tiempo de construcción de 18 meses. Las preventas ya están abiertas con condiciones especiales para los primeros compradores.</p>
      
      <p>Para más información, no dudes en contactarnos a través de nuestros canales habituales.</p>
    `,
    image: '/projects/1.jpg',
    date: '2025-04-15'
  },
  {
    id: 'finalizacion-torre-vista',
    title: 'Finalización exitosa de Torre Vista',
    excerpt: 'Culminamos la entrega de todas las unidades del proyecto Torre Vista, un edificio de 15 pisos con vista al parque.',
    content: `
      <p>Con gran satisfacción anunciamos la finalización y entrega de todas las unidades de nuestro emblemático proyecto Torre Vista. Este edificio de 15 pisos se ha convertido en un referente arquitectónico de la ciudad.</p>
      
      <p>Algunas características destacadas de este proyecto:</p>
      <ul>
        <li>Diseño arquitectónico de vanguardia</li>
        <li>Materiales de primera calidad</li>
        <li>Vista panorámica al parque central</li>
        <li>Sistema inteligente de gestión de recursos</li>
        <li>Certificación de eficiencia energética</li>
      </ul>
      
      <p>Queremos agradecer a todo el equipo de trabajo, proveedores y, especialmente, a nuestros clientes por la confianza depositada en Vanguardia Desarrollos Inmobiliarios.</p>
      
      <p>Estamos orgullosos de haber cumplido con los plazos establecidos y de haber superado las expectativas de calidad y diseño.</p>
    `,
    image: '/projects/2.jpg',
    date: '2025-03-25'
  },
  {
    id: 'proyecto-sustentable',
    title: 'Nuevo proyecto sustentable recibe certificación internacional',
    excerpt: 'Nuestro compromiso con el medio ambiente es reconocido con una importante certificación internacional de construcción sustentable.',
    content: `
      <p>Nos complace anunciar que nuestro proyecto "Eco Residencias" ha recibido la prestigiosa certificación LEED Platinum, el mayor reconocimiento en construcción sustentable a nivel internacional.</p>
      
      <p>Este logro confirma nuestro compromiso con el desarrollo de proyectos que no solo brinden confort y calidad, sino que también sean respetuosos con el medio ambiente.</p>
      
      <p>Entre las características sustentables de Eco Residencias destacan:</p>
      <ul>
        <li>Sistema de captación y reutilización de agua de lluvia</li>
        <li>Paneles solares que cubren el 60% de la demanda energética</li>
        <li>Materiales de construcción de bajo impacto ambiental</li>
        <li>Áreas verdes con especies nativas</li>
        <li>Sistema de gestión inteligente para optimizar el consumo energético</li>
      </ul>
      
      <p>Este reconocimiento nos motiva a seguir innovando y a establecer nuevos estándares en el desarrollo inmobiliario sustentable en nuestra región.</p>
    `,
    image: '/projects/3.jpg',
    date: '2025-02-18'
  },
  {
    id: 'expansion-nuevos-mercados',
    title: 'Vanguardia se expande a nuevos mercados',
    excerpt: 'Comenzamos operaciones en dos nuevas ciudades, ampliando nuestra presencia y llevando nuestro estándar de calidad a más clientes.',
    content: `
      <p>Como parte de nuestra estrategia de crecimiento, Vanguardia Desarrollos Inmobiliarios anuncia oficialmente el inicio de operaciones en dos importantes ciudades del país.</p>
      
      <p>Esta expansión representa un hito significativo en nuestra trayectoria empresarial y nos permite llevar nuestro modelo de desarrollo inmobiliario de alta calidad a nuevas regiones.</p>
      
      <p>En cada nueva ubicación, estamos preparando proyectos innovadores que responden a las necesidades específicas de cada mercado, manteniendo siempre nuestra esencia: calidad superior, diseño vanguardista y compromiso con la satisfacción del cliente.</p>
      
      <p>Próximamente estaremos anunciando los detalles de los primeros proyectos en estas nuevas locaciones. Manténgase atento a nuestras redes sociales para más información.</p>
    `,
    image: '/projects/1.jpg',
    date: '2025-01-30'
  },
  {
    id: 'reconocimiento-camara',
    title: 'Reconocimiento de la Cámara de Desarrolladores',
    excerpt: 'Vanguardia recibe el premio a la innovación en diseño arquitectónico por nuestro proyecto Residencial Alturas.',
    content: `
      <p>Nos enorgullece compartir que Vanguardia Desarrollos Inmobiliarios ha sido galardonada con el Premio a la Innovación en Diseño Arquitectónico 2025, otorgado por la Cámara de Desarrolladores Inmobiliarios.</p>
      
      <p>El premio reconoce específicamente nuestro proyecto Residencial Alturas, una obra que desafía los conceptos tradicionales de diseño urbano e integra de manera armónica espacios habitacionales con áreas comunes y comerciales.</p>
      
      <p>El jurado destacó los siguientes aspectos del proyecto:</p>
      <ul>
        <li>Integración innovadora del espacio público y privado</li>
        <li>Soluciones arquitectónicas que maximizan la luz natural</li>
        <li>Espacios versátiles que se adaptan a diferentes necesidades</li>
        <li>Incorporación de tecnologías constructivas de vanguardia</li>
      </ul>
      
      <p>Este reconocimiento es un testimonio del talento y dedicación de nuestro equipo de arquitectos, ingenieros y diseñadores, así como de nuestra continua búsqueda de excelencia en cada proyecto que desarrollamos.</p>
    `,
    image: '/projects/2.jpg',
    date: '2024-12-10'
  }
];
