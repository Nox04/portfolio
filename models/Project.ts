export default interface Project {
  title: string
  stack: string
  auth?: {
    required: boolean
    user: string
    password: string
  }
  link: string
  icon: string
  background: string
}
