import Project from '~/models/Project'

const Projects: Project[] = [
  {
    title: 'Tempo.',
    stack: 'PHP, Laravel, Vue.js, Postgresql.',
    link: 'https://orioncol.com/',
    icon: '/images/tempo_icon.jpg',
    background: '/images/tempo.jpg',
    description:
      'Plataforma web para control de tiempos y asistencia de empleados. Con visualización en tiempo real, configuración remota de terminales y enrolamiento biométrico desde el navegador.'
  },
  {
    title: 'Venus.',
    stack: 'Java, Kotlin, C++.',
    link: 'https://orioncol.com/',
    icon: '/images/venus_icon.jpg',
    background: '/images/venus.jpg',
    description:
      'Desarrollo de firmware para terminal fija de marcación de tiempos, asistencia y control de accesos. Con sensor biométrico integrado, sincronización en tiempo real y funcionamiento offline.'
  },
  {
    title: 'Smartsoft.',
    stack: 'Java, Kotlin, Android.',
    link: 'https://orioncol.com/',
    icon: '/images/smartsoft_icon.jpg',
    background: '/images/smartsoft.jpg',
    description:
      'Desarrollo de aplicación móvil para verificación biométrica. Integrando lector de huellas, lectura de PDF417 y captura de datos faciales.'
  }
]

export default Projects
