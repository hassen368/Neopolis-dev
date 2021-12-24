module.exports = {
    put: {
      tags: ["CompteBancaire"],
      description: "Get All ",
      operationId: "updateCompteBancaire",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"updating a done CompteBancaire"
        }
      ],
      security:[{Bearer:{} }],

      requestBody:{
        //content Type
        content:{
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