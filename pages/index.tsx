import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import cn from 'classnames'
import Editor from '@monaco-editor/react'
import { useState } from 'react'
import { gameini, gusini } from './../components/files'
const inter = Inter({ subsets: ['latin'] })

interface EditorFile {
  name: string,
  language: string,
  value: any,
}

export default function Home() {
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

  const [fileName, setFileName] = useState("gameini");

  const file = files[fileName];
  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className="font-bold text-red-500 p-3 mb-3 font-sans text-lg">Game may appear frozen while joining.</p>
        <div className={cn(styles.center, "flex-col gap-4 rotate-90")}/> 

        <div className={cn("flex-row flex flex-wrap gap-2 my-2")}>
          
        <a>
          <div className={cn(styles.thirteen, "transition=all ring-0 hover:ring-2 ring-gray-500 transition-all duration-200 my-3 bg-clip-content cursor-not-allowed bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            Join Quartex - Island
          </div>
        </a>
          <a href="steam://connect/58.169.7.212:27015/e">
            <div className={cn(styles.thirteen, styles.thirteenanim, "rounded-lg ring-0 hover:ring-2 ring-green-500 transition-all duration-200 my-3")}>
              Join Quartex - Scorched
            </div>
          </a>
          <a href="steam://connect/58.169.7.212:27020/e">
          <div className={cn(styles.thirteen, "flex-grow animate-bounce ring-0 hover:ring-2 ring-red-500 transition-all duration-200 my-3 bg-clip-content cursor-pointer bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            Join Quartex - Abberation
          </div>
          </a>
          <a>
          <div className={cn(styles.thirteen, "flex-grow ring-0 hover:ring-2 ring-red-500 transition-all duration-200 my-3 bg-clip-content cursor-not-allowed bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            Join Quartex - Extinction
          </div>
          </a>
          <a>
          <div className={cn(styles.thirteen, "flex-grow ring-0 hover:ring-2 ring-red-500 transition-all duration-200 my-3 bg-clip-content cursor-not-allowed bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            Join Quartex - Genesis 1
          </div>
          </a>
          <a>
          <div className={cn(styles.thirteen, "flex-grow w-full ring-0 hover:ring-2 ring-red-500 transition-all duration-200 my-3 bg-clip-content cursor-not-allowed bg-linear-gradient-to-br from-[rgb(239,68,68,1)] to-[rgb(239,68,68,1)]")}>
            Join Quartex - Genesis 2
          </div>
          </a>
        </div>
        <div className="flex flex-col border-slate-600 border-4 rounded-lg hover:border-green-500 transition-colors duration-150 w-full max-w-5xl">
          <div className="flex gap-2">
          <button className={cn('bg-[#1e1e1e] ring-0 active:bg-[#3a3a3a]  disabled:bg-[#272727] enabled:hover:ring-2 ring-gray-400 py-1 px-2 flex-grow shadow-md transition-colors ')} disabled={fileName === "gameini"} onClick={() => setFileName("gameini")}>Game Settings</button>
          <button className={cn('bg-[#1e1e1e] ring-0 active:bg-[#3a3a3a] disabled:bg-[#272727] enabled:hover:ring-2 ring-gray-400 py-1 px-2 flex-grow shadow-md transition-colors')} disabled={fileName === "gusini"} onClick={() => setFileName("gusini")}>Game User Settings</button>
          </div>
        <div className="w-full h-full flex justify-center">
        <div className={cn(styles.center, "flex-col gap-4")}/> 
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


      </main>
    </>
  )
}
