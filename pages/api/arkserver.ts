import { Server } from "@fabricio-191/valve-server-query";
import { NextApiRequest, NextApiResponse } from "next";
export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    async function serve() {
        const serve = await Server({
          ip: '124.187.142.191',
          port: 27020,
          timeout: 3000,
        });
        const rules = await serve.getRules();
        return rules
        
      }

    serve().then((e) => {res.status(200).json(e)})


}
