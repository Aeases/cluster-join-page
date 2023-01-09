import { stringify } from "querystring";
import React, { useEffect, useState } from "react";

export function ServerQueryIndicator({IP, queryport}: {IP: string, queryport: string}) {
    const [Status, setStatus]: any = useState()

    async function CheckStatus() {
        const response = await fetch('/api/arkserver')
        const data = await response.json()
        console.log(data)
      }

    useEffect(() => {
        CheckStatus()
        .then((e) => {e ? stringify(e) : ""})
        .then((e) => {setStatus(e)})
    })


    return(
        <div>
            <p>fff data = {Status}</p>
        </div>
    )
}

