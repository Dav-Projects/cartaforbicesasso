"use client"

import Image from "next/image";

export default function MoveButton({ move, onClick, image}) {
    return (
        <div className="flex-1 max-w-[15rem] cursor-pointer flex justify-center items-center rounded-lg p-3 aspect-square" onClick={() => onClick(move)} key={move}>
            <Image src={image} alt={move} className="w-full" />
        </div>
    );
}
