module.exports = {
    post: {
      tags: ["Transaction"],
      description: "Create ",
      operationId: "createTransaction",
      parameters: [],
      security:[{Bearer:{} }],
      requestBody:{
          //content Type
          content:{
            "multipart/form-data":{
                  schema:{
                      $ref:'#/components/schemas/TransactionInput'
                  }

              },
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