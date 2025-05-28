export interface Project {
  id: string;
  name: string;
  category: 'Condominio' | 'Vivienda personal' | 'Loteo';
  status: 'Entrega inmediata' | 'Obras finalizadas' | 'En pozo' | 'Proyecto';
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  images: string[];
  location?: string;
  deliveryDate?: string;
}

export const projectsData: Project[] = [
  // Condominios
  {
    id: 'condominio-los-altos',
    name: 'Condominio Los Altos',
    category: 'Condominio',
    status: 'En pozo',
    shortDescription: 'Moderno condominio con amenidades de lujo en una ubicación privilegiada.',
    fullDescription: '<p>Condominio Los Altos es un desarrollo exclusivo que combina diseño contemporáneo y comodidades premium para ofrecer un estilo de vida excepcional.</p><h3>Características</h3><ul><li>Unidades de 2 y 3 dormitorios</li><li>Cocheras subterráneas</li><li>Piscina y solárium</li><li>Gimnasio equipado</li><li>Seguridad 24 horas</li><li>Salón de usos múltiples</li></ul>',
    mainImage: '/projects/1.jpg',
    images: ['/projects/1.jpg', '/projects/2.jpg', '/projects/3.jpg'],
    location: 'Zona Norte, Tandil',
    deliveryDate: 'Diciembre 2025'
  },
  {
    id: 'condominio-vista-hermosa',
    name: 'Condominio Vista Hermosa',
    category: 'Condominio',
    status: 'Entrega inmediata',
    shortDescription: 'Disfrute de vistas panorámicas en este exclusivo condominio rodeado de naturaleza.',
    fullDescription: '<p>Condominio Vista Hermosa ofrece un estilo de vida único en un entorno natural privilegiado, con todas las comodidades de la vida moderna.</p><h3>Características</h3><ul><li>Apartamentos de 1 a 3 dormitorios</li><li>Amplias terrazas con vista panorámica</li><li>Área de parrillas</li><li>Jardines paisajísticos</li><li>Acceso controlado</li></ul>',
    mainImage: '/projects/2.jpg',
    images: ['/projects/2.jpg', '/projects/3.jpg', '/projects/1.jpg'],
    location: 'Colinas del Sol, Tandil',
  },
  {
    id: 'condominio-parque-central',
    name: 'Condominio Parque Central',
    category: 'Condominio',
    status: 'Obras finalizadas',
    shortDescription: 'Viva rodeado de naturaleza en el corazón de la ciudad en Parque Central.',
    fullDescription: '<p>Un oasis de tranquilidad en medio de la ciudad que combina la comodidad urbana con espacios verdes y amenidades exclusivas para todos los residentes.</p><h3>Características</h3><ul><li>Departamentos de 2 y 3 dormitorios</li><li>Áreas comunes con jardines</li><li>Piscina climatizada</li><li>Centro de fitness</li><li>Coworking space</li><li>Pet friendly</li></ul>',
    mainImage: '/projects/3.jpg',
    images: ['/projects/3.jpg', '/projects/1.jpg', '/projects/2.jpg'],
    location: 'Centro, Tandil',
    deliveryDate: 'Entregado'
  },
  // Vivienda Personal
  {
    id: 'residencia-valle-alto',
    name: 'Residencia Valle Alto',
    category: 'Vivienda personal',
    status: 'Obras finalizadas',
    shortDescription: 'Elegante residencia unifamiliar con diseño contemporáneo y acabados de primera calidad.',
    fullDescription: '<p>Residencia Valle Alto es un proyecto de vivienda unifamiliar que combina diseño arquitectónico moderno con materiales de alta calidad, ofreciendo confort y exclusividad.</p><h3>Características</h3><ul><li>300 m² de construcción</li><li>4 dormitorios</li><li>3 baños completos</li><li>Cocina integrada</li><li>Jardín y piscina</li><li>Garage para 2 vehículos</li></ul>',
    mainImage: '/projects/1.jpg',
    images: ['/projects/1.jpg', '/projects/2.jpg', '/projects/3.jpg'],
    location: 'Zona Residencial, Tandil',
    deliveryDate: 'Entregado'
  },
  {
    id: 'casa-del-sol',
    name: 'Casa del Sol',
    category: 'Vivienda personal',
    status: 'En pozo',
    shortDescription: 'Vivienda sostenible con eficiencia energética y diseño bioclimático.',
    fullDescription: '<p>Casa del Sol es un proyecto innovador que integra tecnologías sustentables y diseño bioclimático para crear un hogar eficiente y en armonía con el entorno natural.</p><h3>Características</h3><ul><li>250 m² de construcción</li><li>3 dormitorios</li><li>Paneles solares</li><li>Sistema de recolección de agua de lluvia</li><li>Materiales eco-amigables</li><li>Aislamiento térmico premium</li></ul>',
    mainImage: '/projects/2.jpg',
    images: ['/projects/2.jpg', '/projects/3.jpg', '/projects/1.jpg'],
    location: 'Eco-barrio, Tandil',
    deliveryDate: 'Junio 2025'
  },
  // Loteos
  {
    id: 'barrio-cerrado-las-sierras',
    name: 'Barrio Cerrado Las Sierras',
    category: 'Loteo',
    status: 'Proyecto',
    shortDescription: 'Desarrollo residencial exclusivo con lotes de 500 a 1000 m² en un entorno natural privilegiado.',
    fullDescription: '<p>Barrio Cerrado Las Sierras es un desarrollo residencial de lujo que ofrece lotes en un entorno natural privilegiado, con seguridad las 24 horas y amenidades exclusivas.</p><h3>Características</h3><ul><li>Lotes de 500 a 1000 m²</li><li>Calles pavimentadas</li><li>Servicios subterráneos</li><li>Espacios verdes comunes</li><li>Club house con piscina</li><li>Seguridad permanente</li></ul>',
    mainImage: '/projects/3.jpg',
    images: ['/projects/3.jpg', '/projects/1.jpg', '/projects/2.jpg'],
    location: 'Piedras Blancas, Tandil',
    deliveryDate: 'Marzo 2026'
  },
  {
    id: 'altos-del-valle',
    name: 'Altos del Valle',
    category: 'Loteo',
    status: 'Entrega inmediata',
    shortDescription: 'Loteo abierto con parcelas desde 400 m² con todos los servicios y excelente accesibilidad.',
    fullDescription: '<p>Altos del Valle es un desarrollo de lotes residenciales con todos los servicios, en una ubicación estratégica que combina tranquilidad y fácil acceso al centro urbano.</p><h3>Características</h3><ul><li>Lotes desde 400 m²</li><li>Todos los servicios</li><li>Financiación directa</li><li>Sin expensas</li><li>Entorno natural</li><li>Excelente conectividad</li></ul>',
    mainImage: '/projects/1.jpg',
    images: ['/projects/1.jpg', '/projects/2.jpg', '/projects/3.jpg'],
    location: 'Valle Sur, Tandil',
  }
];
