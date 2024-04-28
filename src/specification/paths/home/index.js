export const home = {
  '/': {
    get: {
      summary: 'Root home get method',
      description: 'This is the root home get method that returns hello world',
      operationId: 'home',
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  hello: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    }
  },
};