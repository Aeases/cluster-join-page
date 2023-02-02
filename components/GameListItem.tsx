import { type } from "os"
import { Url } from "url"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


interface GameListItemProps {
    imageurl: Url,
    name: string,
    path?: string
    type?: 'ip' | 'page'
}



const GameListItem = (props: GameListItemProps) => {
    const {imageurl, name, path, type} = props
    if (type == 'page' && path) {
        return (
        <a href={path && `${path}`}>
            <ListItemVisual imageurl={imageurl} name={name} /> 
        </a>
        )
    } else if (type == 'ip') {
      const [isOpen, setIsOpen] = useState(false)
  return (
    <button onClick={openModal}>
        <ListItemVisual imageurl={imageurl} name={name}/>
    </button>
    
    <HoverAboveModelHeadlessUI isOpen={isOpen} setIsOpen={setIsOpen} />
    
  )
    }
}

function ListItemVisual({imageurl, name}: {imageurl: Url, name: string}) {
    return (
        <div className="my-2 mx-auto h-14 flex bg-[#1e1e1e] active:bg-[#3a3a3a] active:ring-1 p-2 rounded-lg hover:ring-2 ring-gray-500 transition-all duration-200">
            <img className="scale-125 rounded-lg" src={`${imageurl}`}/>
            <p className="my-auto mx-auto font-bold text-2xl">{name}</p>
        </div>
    )
}

interface HoverAboveModelHeadlessUIProps {
  name: string,
  imageurl: Url,
  isOpen

}

function HoverAboveModelHeadlessUI({name, imageurl, isOpen, setIsOpen}: infer) {
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
    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        {name}
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          {imageurl as string}
        </p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={closeModal}
        >
          Return
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

