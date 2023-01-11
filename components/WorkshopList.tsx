import { useEffect, useState } from "react"
import { z } from 'zod'

export default function WorkshopList({ ModIDsURL }: { ModIDsURL: string }) {

    const [modInfo, setModInfo] = useState([{}])

    const APIResponseValidator = z.array(z.object({
        title: z.string(),
        preview_url: z.string(),
        publishedfileid: z.string(),
    }))

    type SteamWorkshopResponse = z.infer<typeof APIResponseValidator>

    async function CallAPI() {
        const response = await fetch(`/api/WorkShopQuery/${ModIDsURL}`)
        const data = await response.json()
        const validatedData: SteamWorkshopResponse = APIResponseValidator.parse(data)
        console.log(data)
        console.log(validatedData)
        return(setModInfo(validatedData))
    }
    // TODO Figure out zod to get completiton on the API Response, can view the api response here: http://localhost:3000/api/WorkShopQuery/2874066786*1522327484*1445395055*731604991*889745138*821530042*848498678*1404697612*670764308*702828089*1609138312*1814953878*2862832839*816908578*972887420*2871123928*1428596566*1295978823*1092784125*2876145300*2848812341*2856914628

    useEffect(() => {
        CallAPI()
    }, [])
    return(
        <div>
            <p>{`${modInfo.at(0)}`}</p>
        {modInfo.map((e) => {return(<p>{`${e.title}`}</p>)})}
        </div>
    )
}