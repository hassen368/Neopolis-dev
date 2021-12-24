module.exports = {
    put: {
      tags: ["User"],
      description: "Get All ",
      operationId: "updateUser",
      parameters: [
        {
          name:"id",
          in:"path",
          schema:{
            $ref: '#/components/schemas/id'

          },
          required:true,
          description:"updating a done User"
        }
      ],
      security:[{Bearer:{} }],

      requestBody:{
        //content Type
        content:{
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