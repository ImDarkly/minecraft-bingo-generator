'use client';
import { BingoCardGrid } from "@/components/ui/bingo-card-grid";
import { Button } from "@/components/ui/button";
import items from "@/api/items.json";
import { useState } from "react";
import Link from "next/link";
    
export default function Home() {
    const [textToCopy, setTextToCopy] = useState('');
    const rand = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const cards: { id: number; name: string; title: string }[] = [];

    for (let i = 0; i < 25; i++) {
        const randomNum = rand(0, 394);
        cards.push(items[randomNum]);
    }

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
            <BingoCardGrid cards={cards}/>
            <div className="flex flex-col gap-2">
                <Button onClick={ refreshPage }>Generate</Button>
                <Link href={`https://imdarkly.github.io/minecraft-bingo-generator/card?${Array.from({ length: 25 }, (_, index) => `b${index + 1}=${cards[index].id}`).join('&')}`}>
                    <Button variant={"outline"}>Open Bingo card</Button>
                </Link>
            </div>
        </div>
    );
    
}
