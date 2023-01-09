import React, { useState } from "react";
import cn from 'classnames'
import styles from '../styles/ServerButtonComponent.module.css'
import { GiCombinationLock } from 'react-icons/gi'
import { GetServerSideProps } from "next";
import { ServerQueryIndicator } from "./ServerQueryIndicator";
export default function ServerButtonComponent({ Locked, IP, queryport, ServerName, password }: {Locked: boolean, IP: string, queryport: string, ServerName: string, password: string}) {
  const [message, setMessage] = useState("")  
  let Address: string = ''
    if (Locked === true ) {
        Address = ''
    } else if (Locked === false && IP && queryport) {
        Address = `${IP}:${queryport}`
    }

    const OnClickHandler = () => {
      CallAPI().then((r) => {
        if (typeof r.message === 'string') {
          setMessage(r.message)
          console.log(r.message)
        }
      })
      return("Success!")
    }
    
    async function CallAPI() {
      const response = await fetch(`/api/SteamServerQuery/${IP}@${queryport}`)
      return response.json()
    }

    return(
        <a onClick={OnClickHandler} href={Locked ? undefined : `steam://connect/${Address}/${password}`}>
          <div className={cn(Locked ? 'cursor-not-allowed bg-[#101010] text-[#101010] select-none' : 'active:bg-[#3a3a3a]', "relative transition=all w-full text-center text-2xl rounded-md flex-grow ring-0 hover:ring-2 ring-gray-500 bg-[#1e1e1e] p-3 transition-all duration-200 my-3 mb-0 bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            {ServerName} {/* <ServerQueryIndicator IP={IP} queryport={queryport}/> */}
            {message}
            {Locked && (<GiCombinationLock size="2.5em" className="text-base absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto text-gray-300"/>)}
          </div>
        </a>
    )
}

