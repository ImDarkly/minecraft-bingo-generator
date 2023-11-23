'use client';
import * as React from "react";
import { useState } from "react";
import Image from "next/image";

type Card = {
    id: number;
    name: string;
    title: string;
};

type BingoCardGridProps = {
    cards: Card[];
};

export const BingoCardGrid = ({ cards }: BingoCardGridProps) => {
    const [selectedCards, setSelectedCards] = useState<number[]>([]);

    const handleCardClick = (cardId: number) => {
        if (selectedCards.includes(cardId)) {
            setSelectedCards((prevSelectedCards) =>
                prevSelectedCards.filter((id) => id !== cardId)
            );
        } else {
            setSelectedCards((prevSelectedCards) => [
                ...prevSelectedCards,
                cardId,
            ]);
        }
    };

    return (
        <div className="bingo-card-grid grid grid-cols-5 grid-rows-5 gap-2 select-none">
            {cards.map(({ id, name, title }) => (
                <div
                    key={id}
                    className={`
                        group 
                        relative 
                        w-16 
                        aspect-square 
                        rounded-lg 
                        overflow-hidden 
                        dark:bg-slate-800  
                        bg-slate-200
                        outline  
                        outline-none
                        outline-2 
                        transition-all 
                        hover:scale-105
                        ${selectedCards.includes(id) ? "outline-green-500 hover:outline-offset-0 outline-offset-[-2px]" : "hover:outline-blue-500 outline-offset-0"}`}
                    onClick={() => handleCardClick(id)}
                >
                    <Image
                        key={id}
                        src={`/minecraft-bingo-generator/textures/${name}.png`}
                        alt={`${title}`}
                        width={72}
                        height={72}
                        className="bingo-item p-2 object-cover brightness-110 group-hover:scale-150 transition-all"
                    />
                    <div className="opacity-0 invisible absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 break-words text-center cursor-pointer bg-slate-200 dark:bg-slate-900 w-full h-full group-hover:visible group-hover:opacity-100 transition-opacity flex items-center justify-center bg-opacity-80">
                        <div key={id} className="dark:text-slate-100 text-slate-800 text-xs">
                            {title}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};