import Image from 'next/image'
import React from 'react'

interface Props {
  imagePath:string,
  imageAlt: string,
  title: string,
  description: string,
  buttonText: string,
  path: string,
  }
export default function Card( props: Props ) {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image className="w-full" src={props.imagePath} alt={props.imageAlt} width={125} height={125} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.title}</div>
      <p className="text-gray-700 text-base">
      {props.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={props.path} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.buttonText}</a>
    </div>
  </div>
  )
}
