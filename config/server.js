const hapi = require("@hapi/hapi")
const serverOptions={
    port:4000,
    host:"localhost"
}
const server=async ()=>{
    const server=hapi.server(serverOptions)

    await server.start()
    console.log(`Server is Running at http://${serverOptions.host}:${serverOptions.port}`);


    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    })
}

module.exports=server