import classNames from "classnames";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { Oval } from 'react-loading-icons'
import cn from 'classnames'

export function ServerQueryIndicator({IP, queryport, className}: {IP: string, queryport: string, className?: string}) {

    const [QueryStatus, setQueryStatus] = useState(2)

   
    // 0 is Not Found 1 is Found 2 is Unknown
    const OnClickHandler = () => {
        CallAPI().then((r) => {
          if (typeof r === 'object') {
            if (r.responded == false) {
                setQueryStatus(0)
            } else if (r.responded == true) {
                setQueryStatus(1)
            } else setQueryStatus(2)
            
            console.log(r.response)
          }
        })
        return("Success!")
      }
      
      async function CallAPI() {
        const response = await fetch(`/api/SteamServerQuery/${IP}@${queryport}`)
        return response.json()
      }
      OnClickHandler()

      if (QueryStatus == 1) {
        return(
            <Oval strokeWidth='6' stroke="green" height='33px' strokeOpacity='0' className={className}/>
        )
      } else if (QueryStatus == 0) {
        return (
            <Oval strokeWidth='6' stroke="red" height='33px' strokeOpacity='0' className={cn(className)}/>
        )
      } else {
        return (
            <Oval strokeWidth='6' stroke="gray" height='33px' className={className}/>
        )
      }


}

