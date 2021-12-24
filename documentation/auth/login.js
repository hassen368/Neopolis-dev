module.exports = {
    post: {
        tags: ["auth"],
        description: "login ",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
            //content Type
            content: {
                "application/json": {
                    schema: {
                        $ref: '#/components/schemas/loginInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: "login User ",
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