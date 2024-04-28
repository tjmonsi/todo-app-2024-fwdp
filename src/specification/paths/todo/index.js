export const todo = {
  '/todo': {
    post: {
      summary: 'Create a todo',
      description: 'Create a new todo when logged in into the system',
      operationId: 'createTodo',
      requestBody: {
        description: 'Body of the todo',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string'
                },
                text: {
                  type: 'string'
                },
                done: {
                  type: 'boolean'
                }
              }
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
                  },
                  data: {
                    type: 'object',
                    properties: {
                      todoId: {
                        type: 'string'
                      }
                    }
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
    },
    get: {
      summary: 'Get many todos',
      description: 'Get many todos when logged in into the system',
      operationId: 'getManyTodos',
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
                  },
                  data: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        todoId: {
                          type: 'string'
                        },
                        title: {
                          type: 'string'
                        },
                        text: {
                          type: 'string'
                        },
                        done: {
                          type: 'boolean'
                        }
                      }
                    }
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
  '/todo/{todoId}': {
    get: {
      summary: 'Get one todo',
      description: 'Get one todo when logged in into the system',
      operationId: 'getTodo',
      parameters: [
        {
          "name": "todoId",
          "in": "path",
          "description": "todo to fetch",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
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
                  },
                  data: {
                    type: 'object',
                    properties: {
                      todoId: {
                        type: 'string'
                      },
                      title: {
                        type: 'string'
                      },
                      text: {
                        type: 'string'
                      },
                      done: {
                        type: 'boolean'
                      }
                    }
                  }  
                }
              }
            }
          }
        }
      }
    },
    patch: {
      summary: 'Update one todo',
      description: 'Update one todo when logged in into the system',
      operationId: 'updateTodo',
      parameters: [
        {
          "name": "todoId",
          "in": "path",
          "description": "todo to fetch",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      requestBody: {
        description: 'Body of the todo',
        content: {
          "application/json": {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string'
                },
                text: {
                  type: 'string'
                },
                done: {
                  type: 'boolean'
                }
              }
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
                  },
                  data: {
                    type: 'object',
                    properties: {
                      todoId: {
                        type: 'string'
                      },
                      title: {
                        type: 'string'
                      },
                      text: {
                        type: 'string'
                      },
                      done: {
                        type: 'boolean'
                      }
                    }
                  }  
                }
              }
            }
          }
        }
      }
    },
    delete: {
      summary: 'Delete one todo',
      description: 'Delete one todo when logged in into the system',
      operationId: 'deleteTodo',
      parameters: [
        {
          "name": "todoId",
          "in": "path",
          "description": "todo to fetch",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
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
                  },
                  data: {
                    type: 'object',
                    properties: {
                      todoId: {
                        type: 'string'
                      }
                    }
                  }  
                }
              }
            }
          }
        }
      }
    }
  }
};