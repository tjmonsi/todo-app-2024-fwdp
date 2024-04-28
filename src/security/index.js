export class Security {
  constructor (app) {
    this.app = app;
  }

  async cookieAuth (request, reply) {
    try {
      const token = request.session.get('token');
      if (!token) {
        return reply.unauthorized();
      }
      const { username } = await this.app.jwt.verify(token)
      request.username = username;
    } catch (error) {
      console.error();
      return reply.unauthorized()
    }
  }
} 