import { NextApiResponse, NextApiRequest } from "next";
import { Server } from "@fabricio-191/valve-server-query";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
const { serveraddr } = req.query
if (typeof serveraddr !== 'string') {
    res.status(400).json({message: `Your query is aids it ain't a string so u musta done something weird, the format should be IP@PORT e.g. 0.0.0.0@25565 `})
}
const AddressUnparsed = serveraddr as string
const Address = AddressUnparsed.split('@')
const IPRegExp = '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' // Source https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
const PortRegExp = '^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$' // Source https://ihateregex.io/expr/port/
const IP = (function() {
    if (Address[0].match(IPRegExp)) {
        return(Address[0])
    } else res.status(400).json({message: `Bad Query, No IP Provided.`})
})()
const Port = (function() {
    if (Address[1].match(PortRegExp)) {
        return(Address[1])
    } else res.status(400).json({message: `Bad Query, No Port Provided.`})
})()


async function serve(IP: string, Port: number) {
    const serve = await Server({
      ip: `${IP}`,
      port: Port,
      timeout: 3000,
    });
    const rules = await serve.getRules();
    return rules 
  }
  if (typeof IP === 'string' && typeof Port === 'string') {
    serve(`${IP}`, parseInt(Port)).then((r) => {res.status(200).json({responded: true, response: r})}).catch((err) => {res.status(200).json({responded: false, response: err})})
  } else {
    res.status(500).json({message: `Response Invalid, Validation Failed ${typeof IP} ${IP}, ${typeof Port }${Port}`}) 
  }
/* res.status(200).json({message: `${serveraddr} oh btw ${IP} and ${Port}`}) */
}