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
const inter = Inter({ subsets: ['latin'] })

interface EditorFile {
  name: string,
  language: string,
  value: any,
}

export default function Home() {

  const [state, setstate] = useState("")

  const options = {
    cursorSmoothCaretAnimation: true,
    cursorBlinking: "expand",
    minimap: {enabled: false},
    links: false,
    readOnly: true,
    smoothScrolling: true,
  }
  const files: { [key: string]: EditorFile } = {
    "gameini": {
      name: "gameini",
      language: "ini",
      value: gameini,
    },
    "gusini": {
      name: "gusini",
      language: "ini",
      value: gusini,
    },
  };
  const modIDURL = '2874066786*1522327484*1445395055*731604991*889745138*821530042*848498678*1404697612*670764308*702828089*1609138312*1814953878*2862832839*816908578*972887420*2871123928*1428596566*1295978823*1092784125*2876145300*2848812341*2856914628'

  const [fileName, setFileName] = useState("gameini");
  const CurrentIP = '124.187.142.191'
  const file = files[fileName];
  return (
    
    <>
      <Head>
        <title>Quartex</title>
        <meta name="description" content="See the status of Quartex Servers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className="font-bold text-red-500 p-3 mb-3 font-sans text-lg">Game may appear frozen while joining.</p>
        <div className={cn(styles.center, "flex-col gap-4 rotate-90")}/> 


        <div className="grid grid-flow-row gap-1 grid-cols-2 justify-around m-3 w-full max-w-5xl">
        <div className="bg-[#1e1e1e] p-3 col-span-2 text-center font-mono font-bold text-4xl m-0 rounded-md py-[0.45rem]">
          Quartex Cluster
        </div>
        <ServerButtonComponent Locked={false} IP={CurrentIP} queryport='27116' ServerName='Island' password='e' />
        <ServerButtonComponent Locked={false} IP={CurrentIP} queryport='27015' ServerName='Scorched' password='e' />
        <ServerButtonComponent Locked={false} IP={CurrentIP} queryport='27020' ServerName='Abberant' password='e' />
        <ServerButtonComponent Locked={false} IP={CurrentIP} queryport='27021' ServerName='Extinct' password='e' />
        <ServerButtonComponent Locked={true} IP={CurrentIP} queryport='27116' ServerName='Genesis' password='e' />
        <ServerButtonComponent Locked={true} IP={CurrentIP} queryport='27116' ServerName='Genesis 2' password='e' />
        </div>
        <div className="flex flex-col border-slate-600 border-4 rounded-lg hover:border-green-500 transition-colors duration-150 w-full max-w-5xl">
          <div className="flex gap-2">
          <button className={cn('bg-[#1e1e1e] outline-0 active:bg-[#3a3a3a]  disabled:bg-[#272727] enabled:hover:border-2 border-gray-500 py-1 px-2 w-full flex-grow shadow-md transition-all ')} disabled={fileName === "gameini"} onClick={() => setFileName("gameini")}>Game Settings</button>
          <button className={cn('bg-[#1e1e1e] outline-0 active:bg-[#3a3a3a] disabled:bg-[#272727] enabled:hover:border-2 border-gray-500 py-1 px-2 w-full flex-grow shadow-md transition-all')} disabled={fileName === "gusini"} onClick={() => setFileName("gusini")}>Game User Settings</button>
          </div>
        <div className="w-full h-full flex justify-center">
        <div className={cn(styles.center, "flex-col gap-4 rounded-lg overflow-hidden")}/> 
        <Editor
          height="50vh"
          width="100%"
          path={file.name}
          defaultLanguage={file.language}
          defaultValue={file.value}
          theme="vs-dark"
          options={options}
          className=""
          onChange={() => {console.log('aaa')}}
          />
        </div>

        </div>
        <div className="w-full max-w-5xl h-96 overflow-y-scroll">
          <WorkshopList ModIDsURL={modIDURL} />
        </div>

      </main>
    </>
  )
}
