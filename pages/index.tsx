import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import cn from 'classnames'
import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { gameini, gusini } from './../components/files'
import ServerButtonComponent from '../components/ServerButtonComponent'
import WorkshopList from '../components/WorkshopList'
import GameListItem from '../components/GameListItem'
import serverjson from '../content/servers.json'
import { Url } from 'url'
const inter = Inter({ subsets: ['latin'] })

interface EditorFile {
  name: string,
  language: string,
  value: any,
}

type ServerJson = {
  name: string,
  address: string,
  imageurl: string
}

export default function Home() {

  const [state, setstate] = useState("")
  const servers: Array<ServerJson> = serverjson
  console.log(servers)
  return (
    
    <>
      <Head>
        <title>Quartex</title>
        <meta name="description" content="See the status of Quartex Servers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={cn(styles.center, "flex-col gap-4 rotate-90")}/> 
        <div className={cn(styles.center, "flex-col gap-4 rotate-45 top-1/4")}/>
        <div className={cn(styles.center, "flex-col gap-4 rotate-180 top-2/4")}/>
        <p className='text-gray-200 font-semibold text-4xl m-3 mb-5'>Servers</p>

        <ol className="w-full">
          <GameListItem imageurl={'https://media.discordapp.net/attachments/963117719752953876/1071020260280504330/UC61Xdr.png'} name="Ascension (Cluster)" path="./ark/ascension" type='page'/>
        {servers.map((server) => {
          return (<GameListItem imageurl={server.imageurl} name={server.name} serveraddress={server.address} type="ip"/>)
        })}


{/*           <GameListItem imageurl={'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg' as unknown as Url} name="Vanilla" type='ip'/>
          <GameListItem imageurl={'https://media.forgecdn.net/avatars/548/411/637883945542381234.png' as unknown as Url} name="Wild Fire" type='ip' serveraddress='192.168.0.1:24322'/>
          <GameListItem imageurl={'https://media.forgecdn.net/avatars/545/436/637878854786038744.png' as unknown as Url} name="Fabulous" type='ip' serveraddress='192.168.0.1:24323'/> */}

        </ol>
      </main>
    </>
  )
}
