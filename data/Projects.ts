import Project from '~/models/Project'

const Projects: Project[] = [
  {
    title: 'Tempo.',
    stack: 'PHP, Laravel, Vue.js, Postgresql.',
    images: [
      'http://bit.ly/2EjbImW',
      'https://bit.ly/2rQZxUf',
      'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'
    ],
    icon: '/images/tempo_icon.jpg',
    background: '/images/tempo.jpg',
    description:
      'Plataforma web para control de tiempos y asistencia de empleados. Con visualización en tiempo real, configuración remota de terminales y enrolamiento biométrico desde el navegador.'
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
    title: 'Smartsoft.',
    stack: 'Java, Kotlin, Android.',
    images: ['https://www.coasmedas.coop/index.php'],
    icon: '/images/smartsoft_icon.jpg',
    background: '/images/smartsoft.jpg',
    description:
      'Desarrollo de aplicación móvil para verificación biométrica. Integrando lector de huellas, lectura de PDF417 y captura de datos faciales.'
  },
  {
    title: 'InfoApp',
    stack: 'Typescript, Angular, Laravel.',
    images: ['http://infoapp.com.co/'],
    icon: '/images/infoapp_icon.jpg',
    background: '/images/infoapp.jpg',
    description:
      'Desarrollo de aplicación móvil turística, landing page y backend. Seleccionada como la aplicación oficial de turismo y reservas para la JMJ 2019 Panamá.'
  },
  {
    title: 'Antares',
    stack: 'React Native, Vue.js, Laravel.',
    images: ['https://antares.rigel.digital/'],
    icon: '/images/antares_icon.jpg',
    background: '/images/antares.jpg',
    description:
      'Desarrollo de aplicación móvil y backend para rastreo de trabajadores en empresas de domicilios. Con garantía de Real-time, background GPS y manipulación de masiva cantidad de datos.'
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
