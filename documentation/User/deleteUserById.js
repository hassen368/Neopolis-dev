module.exports = {
    delete: {
      tags: ["User"],
      description: "Delete ",
      operationId: "deleteUser",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"deleting a done User"
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