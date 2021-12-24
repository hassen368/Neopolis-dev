module.exports = {
    post: {
      tags: ["User"],
      description: "Create ",
      operationId: "createUser",
      parameters: [],
      security:[{Bearer:{} }],
      requestBody:{
          //content Type
          content:{
            "multipart/form-data":{
                  schema:{
                      $ref:'#/components/schemas/UserInput'
                  }

              },
              "application/json":{
                schema:{
                    $ref:'#/components/schemas/UserInput'
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