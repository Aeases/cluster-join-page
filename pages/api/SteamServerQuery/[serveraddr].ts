import { NextApiResponse, NextApiRequest } from "next";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
const { serveraddr } = req.query
res.status(200).json({message: `${serveraddr}`})
}