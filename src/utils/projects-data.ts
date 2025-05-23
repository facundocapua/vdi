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
    shortDescription: 'Moderno condominio con amenidades de lujo.',
    fullDescription: '<p>Descripción <strong>detallada</strong> del Condominio Los Altos...</p><ul><li>Característica 1</li><li>Característica 2</li></ul>',
    mainImage: '/projects/1.jpg',
    images: ['/projects/1.jpg', '/projects/2.jpg', '/projects/3.jpg'],
    location: 'Zona Norte, Ciudad Ejemplo',
    deliveryDate: 'Diciembre 2024'
  },
  {
    id: 'condominio-vista-hermosa',
    name: 'Condominio Vista Hermosa',
    category: 'Condominio',
    status: 'Entrega inmediata',
    shortDescription: 'Disfruta de vistas panorámicas en este exclusivo condominio.',
    fullDescription: '<p>Condominio Vista Hermosa ofrece un estilo de vida único...</p>',
    mainImage: '/projects/4.jpg',
    images: ['/projects/4.jpg', '/projects/5.jpg', '/projects/6.jpg'],
    location: 'Colinas del Sol, Ciudad Ejemplo',
  },
  {
    id: 'condominio-parque-central',
    name: 'Condominio Parque Central',
    category: 'Condominio',
    status: 'Obras finalizadas',
    shortDescription: 'Vive rodeado de naturaleza en Parque Central.',
    fullDescription: '<p>Un oasis de tranquilidad en medio de la ciudad...</p>',
    mainImage: '/projects/condo-parque-central.jpg',
    images: ['/projects/condo-parque-central.jpg', '/projects/condo-parque-central-2.jpg'],
    location: 'Centro, Ciudad Ejemplo',
    deliveryDate: 'Marzo 2023'
  },
  // Vivienda Personal
  {
    id: 'casa-moderna-suburbio',
    name: 'Casa Moderna en Suburbio',
    category: 'Vivienda personal',
    status: 'Proyecto',
    shortDescription: 'Diseño contemporáneo y funcional para tu familia.',
    fullDescription: '<p>Esta casa combina elegancia y confort...</p>',
    mainImage: '/projects/7.jpg',
    images: ['/projects/7.jpg', '/projects/8.jpg'],
    location: 'Suburbios Tranquilos, Ciudad Ejemplo',
  },
  {
    id: 'residencia-lago-escondido',
    name: 'Residencia Lago Escondido',
    category: 'Vivienda personal',
    status: 'Entrega inmediata',
    shortDescription: 'Exclusiva residencia con acceso privado al lago.',
    fullDescription: '<p>Vive la experiencia de Lago Escondido...</p>',
    mainImage: '/projects/9.jpg',
    images: ['/projects/9.jpg', '/projects/10.jpg', '/projects/11.jpg'],
    location: 'Lago Escondido, Ciudad Ejemplo',
  },
   {
    id: 'chalet-montana-refugio',
    name: 'Chalet de Montaña "El Refugio"',
    category: 'Vivienda personal',
    status: 'Obras finalizadas',
    shortDescription: 'Acogedor chalet ideal para escapadas de fin de semana.',
    fullDescription: '<p>Construido con materiales de la región, este chalet ofrece...</p>',
    mainImage: '/projects/chalet-montana.jpg',
    images: ['/projects/chalet-montana.jpg', '/projects/chalet-montana-interior.jpg'],
    location: 'Sierra Nevada, Pueblo Ejemplo',
    deliveryDate: 'Enero 2022'
  },
  // Loteos
  {
    id: 'loteo-brisas-del-valle',
    name: 'Loteo Brisas del Valle',
    category: 'Loteo',
    status: 'En pozo',
    shortDescription: 'Invierte en tu futuro en Brisas del Valle.',
    fullDescription: '<p>Lotes con excelente ubicación y potencial de crecimiento...</p>',
    mainImage: '/projects/12.jpg',
    images: ['/projects/12.jpg', '/projects/13.jpg'],
    location: 'Valle Sereno, Ciudad Ejemplo',
    deliveryDate: 'Junio 2025'
  },
  {
    id: 'loteo-altos-de-la-sierra',
    name: 'Loteo Altos de la Sierra',
    category: 'Loteo',
    status: 'Entrega inmediata',
    shortDescription: 'Construye la casa de tus sueños con vistas a la sierra.',
    fullDescription: '<p>Terrenos amplios y listos para construir...</p>',
    mainImage: '/projects/14.jpg',
    images: ['/projects/14.jpg', '/projects/15.jpg'],
    location: 'Pie de la Sierra, Ciudad Ejemplo',
  },
  {
    id: 'loteo-costa-dorada',
    name: 'Loteo Costa Dorada',
    category: 'Loteo',
    status: 'Proyecto',
    shortDescription: 'Próximamente: lotes cerca del mar en Costa Dorada.',
    fullDescription: '<p>Un nuevo desarrollo urbanístico pensado para disfrutar de la costa...</p>',
    mainImage: '/projects/loteo-costa-dorada.jpg',
    images: ['/projects/loteo-costa-dorada-plan.jpg'],
    location: 'Costa Dorada, Playa Ejemplo',
    deliveryDate: 'Diciembre 2026'
  }
];
