import { Server } from "@fabricio-191/valve-server-query";
export default function Handler(req, res) {
    async function serve() {
        const serve = await Server({
          ip: '58.169.7.212',
          port: 27020,
          timeout: 3000,
        });
        const rules = await serve.getRules();
        return rules
        
      }

    serve().then((e) => {res.status(200).json(e)})


}
