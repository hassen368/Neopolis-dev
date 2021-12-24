module.exports = {
    get: {
      tags: ["CompteBancaire"],
      description: "Get All ",
      operationId: "getAllCompteBancaire",
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