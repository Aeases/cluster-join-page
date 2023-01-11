import { useEffect, useState } from "react"
import { z } from 'zod'
import Image from "next/image"

export default function WorkshopList({ ModIDsURL }: { ModIDsURL: string }) {



    const APIResponseValidator = z.array(z.object({
        title: z.string(),
        preview_url: z.string(),
        publishedfileid: z.string(),
    }))

    type SteamWorkshopResponse = z.infer<typeof APIResponseValidator>
    const [modInfo, setModInfo] = useState<SteamWorkshopResponse>()
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
            <ol>
            {modInfo && modInfo.map((e) => {return(<WorkshopListItem title={e.title} preview_url={e.preview_url} publishedfileid={e.publishedfileid} key={e.publishedfileid}/>)})}
            </ol>
        </div>
    )
}


function WorkshopListItem({ title, preview_url, publishedfileid, key }: {title: string, preview_url: string, publishedfileid: string, key: string }) { // TODO See if I can avoid typing the API Repsonse here and somehow use SteamWorkshopResponse type instead of retyping

    return(
        <li className="flex bg-[#1e1e1e] p-1 m-2 rounded-md">
            <img src={`${preview_url}`} alt={"Mod Image"} className="w-24 h-24 flex rounded-lg mr-2 " />
            <div >
            <p className="font-bold text-xl flex-grow w-full break-words">{title}</p>
            <p className="text-gray-700 text-md">{publishedfileid}</p>
            </div>
        </li>
    )
}