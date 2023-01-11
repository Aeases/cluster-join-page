import { NextApiResponse, NextApiRequest } from "next";

export default function Handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // ! btw this needs to be the exact same name as the file e.g. const { query } = req.query won't work because the file isn't called [query].ts
    const { workshopids } = req.query
    if (typeof workshopids !== 'string') {
        res.status(400).json(`Your request is Invalid, it must be a string, and it aint, your request is: ${workshopids}`)
    }
    if (!workshopids) {
        res.status(400).json(`Your Request contains nothing. Your Request is ${workshopids}`)
    }
    const validatedIDs: Array<Number> = (function() {
        const stringworkshopids = workshopids as string
        if (stringworkshopids.match(/^[0-9]+\*[0-9]+((\*[0-9]+)*)$/)) {
            const StringmodIDs: Array<string> = (stringworkshopids.split('*'))
            if (StringmodIDs) {
                const modIDs: Array<Number> = StringmodIDs.map(e => parseInt(e))
                return modIDs
            }
        } else {
            res.status(400).json({message: `fuck didn't match ${stringworkshopids}`})
        }
        return([2])
    })()


var formdataiterated = new FormData()
// ? Find how many mods are in the array (length), this is not zero indexed which is what the api likes
// const ModIDArrayZeroIndexLength = (function() {return(ModIDArray.length - 1)})()
formdataiterated.append("itemcount", `${validatedIDs.length}`)

// ? Set I as zero, and iterate it every time a new mod ID is appended, as this is the format the api likes for some reason.
var i = 0
for (const mod of validatedIDs) {
    formdataiterated.append(`publishedfileids[${i}]`, `${mod}`)
    i++
}
console.log(formdataiterated)
//res.status(200).json(`${formdataiterated}, and the input was ${validatedIDs}`)



async function GetWorkshopInfo() {
    const response = await fetch('http://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
        method: 'POST',
        body: formdataiterated
    })
    return response.json()
}
GetWorkshopInfo().then((r) => {res.status(200).json(r.response.publishedfiledetails)})
}
