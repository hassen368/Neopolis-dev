module.exports = {
    post: {
      tags: ["CompteBancaire"],
      description: "Create ",
      operationId: "createCompteBancaire",
      parameters: [],
      security:[{Bearer:{} }],
      requestBody:{
          //content Type
          content:{
            "multipart/form-data":{
                  schema:{
                      $ref:'#/components/schemas/CompteBancaireInput'
                  }

              },
              "application/json":{
                schema:{
                    $ref:'#/components/schemas/CompteBancaireInput'
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