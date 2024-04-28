export const user = {
  '/logout': {
    get: {
      summary: 'Logs out user',
      description: 'This is to log out user',
      operationId: 'logout',
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }      
  },
  '/check-auth': {
    get: {
      summary: 'Checks authentication',
      description: 'This is to check auth',
      operationId: 'checkAuth',
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      },
      security: [
        {
          cookieAuth: []
        }
      ]
    }
  },
  '/login': {
    post: {
      summary: 'Login method',
      description: 'This is to login to the system',
      operationId: 'login',
      requestBody: {
        description: 'User to login',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string'
                },
                password: {
                  type: 'string'
                }
              },
              required: [
                'username',
                'password'
              ]
            }
          }
        }
      },
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
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
  }
};