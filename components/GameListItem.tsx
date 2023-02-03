import { type } from "os"
import { Url } from "url"
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image"
import { Oval } from "react-loading-icons"

interface GameListItemProps {
    imageurl: Url,
    name: string,
    path?: string
    type?: 'ip' | 'page'
    serveraddress?: string
}




const GameListItem = (props: GameListItemProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const {imageurl, name, path, type, serveraddress} = props
    if (type == 'page' && path) {
        return (
          <a href={path && `${path}`}>
            <ListItemVisual imageurl={imageurl} name={name} /> 
          </a>
        )
    } else if (type == 'ip') {
        return(
          <>
          <button onClick={() => setIsOpen(true)} className="flex w-full">
              <ListItemVisual imageurl={imageurl} name={name}/>
          </button>

          <HoverAboveModelHeadlessUI isOpen={isOpen} setIsOpen={setIsOpen} name={name} imageurl={imageurl} serveraddress={serveraddress}  />
          </>

        )
    } else return (<p>nodata</p>)
}

function ListItemVisual({imageurl, name}: {imageurl: Url, name: string}) {
    return (
        <div className="my-2 w-full mx-auto h-14 flex-grow basis-full flex bg-[#1e1e1e] active:bg-[#3a3a3a] active:ring-1 p-2 rounded-lg hover:ring-2 ring-gray-500 transition-all duration-200">
            <Image width="256" height="256" alt="Image of Game Server" className="scale-125 h-auto w-auto rounded-lg" src={`${imageurl}`}/>
            <p className="my-auto mx-auto font-bold text-2xl">{name}</p>
        </div>
    )
}

interface HoverAboveModelHeadlessUIProps extends GameListItemProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

function HoverAboveModelHeadlessUI({name, imageurl, isOpen, setIsOpen, serveraddress}: HoverAboveModelHeadlessUIProps) {
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
    return(
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

<div className="fixed inset-0 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center">
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-[#1e1e1ee8] p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        <div className="flex">
        <p className="text-3xl font-bold my-auto text-white">{name}</p>
        <span className="ml-auto"><Image src={imageurl.toString()} width='256' alt="Image of Game" height='256' className="w-12 h-12 rounded-xl drop-shadow-2xl inline"></Image></span>
        </div>

      </Dialog.Title>
      <div className="mt-2 flex flex-row">
        <div className="text-sm text-white flex rounded-md w-max h-8 bg-[#1e1e1e] border">
          <p className="h-full p-1 flex justify-center px-2 border-r-2 ring-0 hover:ring-2 rounded-tl-md rounded-bl-md ring-gray-500 transition-all ">Copy</p>
          <p className="h-full p-1 flex justify-start px-3">{serveraddress ? serveraddress : '5' }</p>
        </div>
        <span className="ml-auto"><Oval strokeWidth='6' stroke="gray" height='33px' className='text-base scale-75 justify-self-end flex-grow  text-gray-300'/></span>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex transition-all justify-center rounded-md border border-transparent px-2 py-1 text-lg font-medium ring-0 hover:ring-2 ring-gray-500 bg-[#3a3a3a]"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Dialog.Panel>
  </Transition.Child>
</div>
</div>
</Dialog>
</Transition>
    )
}


export default GameListItem

