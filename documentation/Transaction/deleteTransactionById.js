module.exports = {
    delete: {
      tags: ["Transaction"],
      description: "Delete ",
      operationId: "deleteTransaction",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"deleting a done Transaction"
        }
        
      ],
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