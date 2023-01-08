import React, { useEffect, useState } from "react";
//import { Server } from '@fabricio-191/valve-server-query'
const { Server } = require('@fabricio-191/valve-server-query');

export function ServerQueryIndicator({IP, queryport}: {IP: string, queryport: string}) {
    const [Status, setStatus]: any = useState()



    return(
        <div>
            <p>fff data = {Status}</p>
        </div>
    )
}

async function GetServerSideProps({IP, Port}: {IP: string, Port: string}) {
    const { Server } = require('@fabricio-191/valve-server-query');
    async function serve() {
        const arkserver = await Server({
            ip: `${IP}`,
            port: `${Port}`,
            timeout: 3000,
            })
    }
}