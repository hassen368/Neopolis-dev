module.exports = {

    components: {
        schemas: {
            id: {

                type: 'string',
                description: ""
            },
            ApiResponse: {
                type: 'object',
                properties: {
                    status: {
                        type: 'string'
                    },
                    message: {

                        type: 'string'
                    },
                    data: {

                        type: 'array',
                        items:{
                            type:'object'
                        }
                    }
                }


            },
            Transaction: {

                type: 'object',
                properties: {

                    id: {
                        type: 'string',

                    },
                    mantant: {

                        type: 'number'
                    },
                    date: {

                        type: 'string'
                    },
                    descriptif: {

                        type: 'string'
                    },
                    CompteCredite:{
                        
                            type:'string'
                        
                    },
                }
            },
            TransactionInput: {
                type: "object",
                properties: {
                    mantant: {

                        type: 'number'
                    },
                    date: {

                        type: 'string'
                    },
                    descriptif: {

                        type: 'string'
                    },
                    CompteCredite:{
                        
                            type:'string'
                    
                    },
                }
            },
            TransactionUpdate: {
                type: "object",
                properties: {
                    mantant: {

                        type: 'number'
                    },
                    date: {

                        type: 'string'
                    },
                    descriptif: {

                        type: 'string'
                    },
                }
            },


            CompteBancaire: {

                type: 'object',
                properties: {

                    id: {
                        type: 'string',

                    },
                    libelle: {

                        type: 'number'
                    },
                    type: {

                        type: 'string'
                    },
                    transaction: {

                        type:'array',
                        items:{
                            type:'string'
                        }
                    },
                   
                }
            },
            CompteBancaireInput: {
                type: "object",
                properties: {
                    libelle: {

                        type: 'number'
                    },
                    type: {

                        type: 'string'
                    },
                    transaction: {

                        type:'array',
                        items:{
                            type:'string'
                        }
                    },
                }
            },
            CompteBancaireUpdate: {
                type: "object",
                properties: {
                    libelle: {

                        type: 'number'
                    },
                    type: {

                        type: 'string'
                    },
                }
            },

            User: {
                type: 'object',
                properties: {

                    id: {
                        type: 'string',

                    },
                    firstName: {
                        type: 'string',

                    },
                    lastName: {
                        type: 'string',

                    },
                    email: {
                        type: 'string',

                    },
                    password: {
                        type: 'string',

                    },

                }

            },
            UserInput: {
                type: 'object',
                properties: {

                    firstName: {
                        type: 'string',

                    },
                    lastName: {
                        type: 'string',

                    },
                    email: {
                        type: 'string',

                    },
                    password: {
                        type: 'string',

                    },

                }

            },
            UserUpdate: {
                type: 'object',
                properties: {

                    firstName: {
                        type: 'string',

                    },
                    lastName: {
                        type: 'string',

                    },
                    email: {
                        type: 'string',

                    },
                    password: {
                        type: 'string',

                    },

                },
    
            },

            loginInput:{
                type:'object',
                properties:{
                    email:{
                        type:'string'
                    },
                    password:{
                        type:'string'
                    }
                }


            },
            logoutInput:{
                type:'object',
                properties:{
                    refreshToken:{
                        type:'string'
                    }
                }
            },
            refreshToken:{
                type:'object',
                properties:{
                    refreshToken:{
                        type:'string'
                    }


                }
            }
        },
        
            securitySchemes:{
                Bearer:{
                    type:"apiKey",
                    name:"authorization",
                    in:"header"
                }
    
            
        }
        
    


    }

}