import Fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import apiRef from '@scalar/fastify-api-reference';
import cookie from '@fastify/cookie';
import session from '@fastify/secure-session'
import jwt from '@fastify/jwt';
import sensible from '@fastify/sensible'
import { specification } from './specification/index.js';
import { Service } from './service/index.js';
import { Security } from './security/index.js';

export async function build () {
  const fastify = Fastify({
    logger: true
  });

  fastify.register(cookie);
  fastify.register(session, {
    secret: '12345678901234567890123456789012',
    salt: '1234567890123456',
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60
    }
  })

  fastify.register(jwt, {
    secret: 'secret-string'
  });

  fastify.register(sensible);

  const options = {
    specification,
    serviceHandlers: new Service(),
    securityHandlers: new Security(fastify)
  }

  await fastify.register(swagger, {
    openapi: specification
  });

  await fastify.register(apiRef, {
    routePrefix: '/docs'
  });

  await fastify.register(openApiGlue, options);

  return fastify;
}