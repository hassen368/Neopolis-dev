module.exports = {
    get: {
      tags: ["Transaction"],
      description: "Get All ",
      operationId: "getAllTransaction",
      parameters: [],
      security:[{Bearer:{} }],

      responses: {
        '200': {
          description: "get all ",
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