import { Boxes, Cog, Layers3, Wrench } from 'lucide-react';
import { SITE_CONFIG } from './site';

export const services = [
  {
    id: 'prototipos',
    title: 'Prototipos funcionales',
    description: 'Convertimos ideas en piezas reales.',
    longDescription: 'Desarrollamos prototipos precisos para validar diseño, ajuste y desempeño.',
    icon: Layers3
  },
  {
    id: 'refacciones',
    title: 'Refacciones imposibles',
    description: 'Recreamos lo que ya no se consigue.',
    longDescription: 'Replicamos o rediseñamos componentes descontinuados con enfoque en funcionalidad.',
    icon: Wrench
  },
  {
    id: 'serie',
    title: 'Producción en serie',
    description: 'Fabricación precisa y constante.',
    longDescription: 'Lotes cortos y medianos con control de calidad y repetibilidad geométrica.',
    icon: Boxes
  },
  {
    id: 'cad',
    title: 'Modelado y rediseño CAD',
    description: 'Diseño técnico desde cero o ingeniería inversa.',
    longDescription: 'Del concepto al archivo manufacturable, optimizando material y resistencia.',
    icon: Cog
  }
] as const;

export const processSteps = [
  'Envíanos tu idea o archivo',
  'Evaluamos viabilidad y materiales',
  'Definimos detalles contigo',
  'Fabricamos tu pieza',
  'Te la entregamos'
] as const;

export type ProjectCategory = 'Prototipos' | 'Refacciones' | 'Industriales' | 'Personalizados';

export const portfolioProjects = [
  {
    slug: 'prototipo-carcasa-sensor',
    title: 'Carcasa para sensor industrial',
    category: 'Industriales' as ProjectCategory,
    summary: 'Diseño robusto para ambiente de polvo y vibración.',
    material: 'PETG',
    time: '48 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'engranaje-repuesto-lavadora',
    title: 'Engranaje de repuesto',
    category: 'Refacciones' as ProjectCategory,
    summary: 'Recuperación funcional de mecanismo descontinuado.',
    material: 'Nylon',
    time: '72 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'fixture-de-ensamble',
    title: 'Fixture de ensamble',
    category: 'Industriales' as ProjectCategory,
    summary: 'Dispositivo para acelerar armado y control dimensional.',
    material: 'ABS',
    time: '36 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'soporte-camara-accion',
    title: 'Soporte de cámara custom',
    category: 'Personalizados' as ProjectCategory,
    summary: 'Montura ligera para uso extremo en exteriores.',
    material: 'PETG',
    time: '24 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'prototipo-enclosure-iot',
    title: 'Enclosure IoT',
    category: 'Prototipos' as ProjectCategory,
    summary: 'Iteración de prototipo con anclajes y ventilación optimizados.',
    material: 'PLA Pro',
    time: '36 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'maneral-valvula-especial',
    title: 'Maneral para válvula especial',
    category: 'Refacciones' as ProjectCategory,
    summary: 'Pieza ergonómica resistente para operación continua.',
    material: 'ASA',
    time: '60 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'mockup-dispositivo-medico',
    title: 'Mockup dispositivo médico',
    category: 'Prototipos' as ProjectCategory,
    summary: 'Modelo visual funcional para validación con usuarios.',
    material: 'Resina',
    time: '72 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  },
  {
    slug: 'trofeo-geometrico-premium',
    title: 'Trofeo geométrico premium',
    category: 'Personalizados' as ProjectCategory,
    summary: 'Diseño paramétrico con acabado de alto impacto visual.',
    material: 'PLA Silk',
    time: '30 horas',
    image: SITE_CONFIG.PORTFOLIO_PLACEHOLDER_PATH
  }
];
