module.exports = {
    delete: {
      tags: ["CompteBancaire"],
      description: "Delete ",
      operationId: "deleteCompteBancaire",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"deleting a done CompteBancaire"
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