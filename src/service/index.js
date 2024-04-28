export class Service {
  home (req, rep) {
    return { hello: 'world' }
  }

  logout (req, rep) {
    req.session.delete();
    return { success: true }
  }

  // change this for checking auth
  checkAuth (req, rep) {
    console.log(req.username)
    return { success: true }
  }

  async login (req, rep) {
    const { body } = req;
    const { username, password } = body;

    if (username !== 'tjmonsi') {
      return rep.unauthorized()
    }

    if (password !== 'password') {
      return rep.unauthorized();
    }

    const token = await rep.jwtSign({
      username
    })

    req.session.set('token', token);

    return { success: true }
  }
}