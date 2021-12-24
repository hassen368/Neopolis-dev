module.exports = {
    post: {
      tags: ["auth"],
      description: "logout ",
      operationId: "logoutUser",
      parameters: [],
      requestBody: {
        //content Type
        content: {
            "application/json": {
                schema: {
                    $ref: '#/components/schemas/logoutInput'
                }
            }
        }
    },
     responses: {
        '200': {
            description: "logout User ",
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