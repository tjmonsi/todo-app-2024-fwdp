import { paths } from './paths/index.js'

export const specification = {
  openapi: '3.1.0',
  info: {
    title: 'Todo App API',
    description: 'My Todo App documentation',
    version: '0.0.0'
  },
  paths,
  components: {
    securitySchemes: {
      cookieAuth: {
        type: 'apiKey',
        in: 'cookie',
        name: 'token'
      }
    }
  },
  security: [
    {
      cookieAuth: []
    }
  ]
}
