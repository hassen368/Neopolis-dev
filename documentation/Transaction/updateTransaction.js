module.exports = {
    put: {
      tags: ["Transaction"],
      description: "Get All ",
      operationId: "updateTransaction",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"updating a done Transaction"
        }
      ],
      security:[{Bearer:{} }],

      requestBody:{
        //content Type
        content:{
            "application/json":{
                schema:{
                    $ref:'#/components/schemas/TransactionInput'
                }

            }
        }
    },
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