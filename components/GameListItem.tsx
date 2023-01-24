import React from "react"

export default function GameListItem({imageurl, name, path}: {imageurl: string, name: string, path: string | undefined}) {
    return(
    <a href={path && `${path}`}>
        <div className="my-2 mx-auto h-14 flex bg-[#1e1e1e] active:bg-[#3a3a3a] active:ring-1 p-2 rounded-lg hover:ring-2 ring-gray-500 transition-all duration-200">
            <img className="scale-125 rounded-lg" src={`${imageurl}`}/>
            <p className="my-auto mx-auto font-bold text-2xl">{name}</p>
        </div>
    </a>

    )
}