module.exports = {
    get: {
      tags: ["User"],
      description: "Get All ",
      operationId: "getAllUser",
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