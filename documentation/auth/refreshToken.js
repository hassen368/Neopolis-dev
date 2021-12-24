module.exports = {
    post: {
      tags: ["auth"],
      description: "refreshToken ",
      operationId: "refreshToken",
      parameters: [],
      requestBody: {
        //content Type
        content: {
            "application/json": {
                schema: {
                    $ref: '#/components/schemas/refreshToken'
                }
            }
        }
    },

      responses: {
        '200': {
          description: "refresh ",
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ApiResponse'
              }
            }
          }
  
        }
      }
    }
  
  
  
  }