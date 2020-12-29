import Project from '~/models/Project'

const Projects: Project[] = [
  {
    title: 'GameOn.',
    stack: 'Typescript, React Native.',
    images: ['https://gameon.app/'],
    icon: '/images/gameon_icon.png',
    background: '/images/gameon.jpg',
    description:
      'Aplicación web para competir con tus amigos intentando predecir los resultados de tus deportes favoritos. Desarrollo de la aplicación móvil usando React Native.'
  },
  {
    title: 'FanFood.',
    stack: 'Typescript, React.',
    images: ['https://order.fanfoodapp.com/'],
    icon: '/images/fanfood_icon.jpg',
    background: '/images/fanfood.jpg',
    description:
      'Aplicación web para hacer pedidos en estadios, teatros y salones de eventos sin que tengas que moverte de tu puesto. Desarrollo de la Progressive Web Application (PWA).'
  },
  {
    title: 'Vendty.',
    stack: 'PHP, Laravel, Vue.js, React Native.',
    images: ['https://vendty.com/'],
    icon: '/images/vendty_icon.png',
    background: '/images/vendty.jpg',
    description:
      'Sistema POS online para empresas de cualquier escala. Ventas, facturación electrónica, inventarios, proveedores, bancos, reportes, tomapedidos, comandas, etc.'
  },
  {
    title: 'Tempo.',
    stack: 'PHP, Laravel, Vue.js, Postgresql.',
    images: [
      '/images/tempo/1.png',
      '/images/tempo/2.png',
      '/images/tempo/3.png',
      '/images/tempo/4.png',
      '/images/tempo/5.png'
    ],
    icon: '/images/tempo_icon.jpg',
    background: '/images/tempo.jpg',
    description:
      'Plataforma web para control de tiempos y asistencia de empleados. Con visualización en tiempo real, configuración remota de terminales y enrolamiento biométrico desde el navegador.'
  },
  {
    title: 'Antares',
    stack: 'React Native, Vue.js, Laravel.',
    images: [
      '/images/antares/1.png',
      '/images/antares/2.png',
      '/images/antares/3.png',
      '/images/antares/4.png',
      '/images/antares/5.png'
    ],
    icon: '/images/antares_icon.jpg',
    background: '/images/antares.jpg',
    description:
      'Desarrollo de aplicación móvil y backend para rastreo de trabajadores en empresas de domicilios. Con garantía de Real-time, background GPS y manipulación de masiva cantidad de datos.'
  },
  {
    title: 'Smartsoft.',
    stack: 'Java, Kotlin, Android.',
    images: [
      '/images/smartsoft/1.png',
      '/images/smartsoft/2.png',
      '/images/smartsoft/3.png',
      '/images/smartsoft/4.png',
      '/images/smartsoft/5.png'
    ],
    icon: '/images/smartsoft_icon.jpg',
    background: '/images/smartsoft.jpg',
    description:
      'Desarrollo de aplicación móvil para enrolamiento y verificación biométrica de clientes bancarios. Integrando lector de huellas Morpho, lectura de PDF417 y captura de datos faciales.'
  },
  {
    title: 'Venus.',
    stack: 'Java, Kotlin, C++.',
    images: ['https://orioncol.com/'],
    icon: '/images/venus_icon.jpg',
    background: '/images/venus.jpg',
    description:
      'Desarrollo de firmware para terminal fija de marcación de tiempos, asistencia y control de accesos. Con sensor biométrico integrado, sincronización en tiempo real y funcionamiento offline.'
  },
  {
    title: 'InfoApp',
    stack: 'Typescript, Angular, Laravel.',
    images: ['http://infoapp.com.co/'],
    icon: '/images/new_infoapp_icon.jpg',
    background: '/images/infoapp.jpg',
    description:
      'Desarrollo de aplicación móvil turística, landing page y backend. Seleccionada como la aplicación oficial de turismo y reservas para la JMJ 2019 Panamá.'
  },
  {
    title: 'Visor neuronal',
    stack: 'Javascript, D3, Matlab.',
    images: ['https://visor.nox.kim/'],
    icon: '/images/visor_icon.jpg',
    background: '/images/visor.jpg',
    description:
      'Aplicación web para la visualización y análisis estadístico de datos de actividad neuronal recolectados a través de electrocorticografía y procesados en Matlab.'
  },
  {
    title: 'Nemesis',
    stack: 'Java, Kotlin, Laravel.',
    images: ['https://orioncol.com/'],
    icon: '/images/nemesis_icon.jpg',
    background: '/images/nemesis.jpg',
    description:
      'Aplicación  para el control biométrico, integrando lectores Lumidigm y posibilitando la interacción con dichos dispositivos desde un navegador web.'
  },
  {
    title: 'Irene',
    stack: 'PHP, Laravel, jQuery.',
    images: ['https://irene.digital/'],
    icon: '/images/irene_icon.jpg',
    background: '/images/irene.jpg',
    description:
      'Plataforma web para el control financiero de micro empresas y negocios pequeños. Ventas, facturas, inventarios, proveedores, bancos y reportes.'
  },
  {
    title: 'Money',
    stack: 'React Native, Typescript, Firebase.',
    images: ['https://antares.rigel.digital/'],
    icon: '/images/money_icon.jpg',
    background: '/images/money.jpg',
    description:
      'Aplicación móvil para iOS y Android que facilita el control de dinero de terceros en entornos empresariales. Cuentas, presupuestos, saldos y transacciones real-time.'
  },
  {
    title: 'Festival Vallenato 2017',
    stack: 'Typescript, Ionic, Firebase.',
    images: ['https://koulu.rigel.digital/'],
    icon: '/images/festival_icon.jpg',
    background: '/images/festival.jpg',
    description:
      'Aplicación móvil para el seguimiento del festival vallenato 2017. Eventos, noticias, promociones, guía turística, publicidad y componentes sociales.'
  },
  {
    title: 'Koulu',
    stack: 'Laravel, Blade, Mysql.',
    images: ['https://koulu.rigel.digital/'],
    icon: '/images/koulu_icon.jpg',
    background: '/images/koulu.jpg',
    description:
      'Desarrollo de aplicación web para la planeación, calificación y visualización de resultados de pre-icfes y pruebas saber pro.'
  },
  {
    title: 'Life Support',
    stack: 'Typescript, Ionic 4, Firebase.',
    images: ['https://play.google.com/store/apps/details'],
    icon: '/images/life_support_icon.jpg',
    background: '/images/life_support.jpg',
    description:
      'Aplicación para el registro de mediciones, recordatorios de medicamentos y seguimiento de pacientes con diabetes e hipertensión.'
  },
  {
    title: 'Halo',
    stack: 'Android Nativo, Realm, Java.',
    images: ['https://orioncol.com/'],
    icon: '/images/halo_icon.jpg',
    background: '/images/halo.jpg',
    description:
      'Aplicación para terminal fija de marcación basada en Android. Con capacidad offline, sincronización real-time, reconocimiento y match facial, alcoholímetro y RFID.'
  },
  {
    title: 'Woin',
    stack: 'React Native, Typescript, Mobx.',
    images: ['https://woin.com.co/'],
    icon: '/images/woin_icon.jpg',
    background: '/images/woin.jpg',
    description:
      'Desarrollo de aplicación móvil para intercambios comerciales, compras, cupones y promociones. Transacciones en real-time, seguridad avanzada y notificaciones basadas en localización.'
  },
  {
    title: 'Brakapp',
    stack: 'Typescript, Laravel, Ionic.',
    images: ['https://brakapp.com/'],
    icon: '/images/brakapp_icon.jpg',
    background: '/images/brakapp.jpg',
    description:
      'Aplicación móvil y web para la búsqueda de profesionales, negocios y empresas que permite a los usuarios el contacto directo con las entidades relacionadas.'
  },
  {
    title: 'Merkapp',
    stack: 'React Native, Typescript, Redux.',
    images: ['https://merkapp.com.co/'],
    icon: '/images/merkapp_icon.jpg',
    background: '/images/merkapp.jpg',
    description:
      'Aplicación móvil y web para compra y realización de mercado. Permitiendo ordenar desde la casa y recibir en cualquier punto de la ciudad, pagando en efectivo o por medios digitales.'
  }
]

export default Projects
