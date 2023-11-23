"use client";
import { BingoCardGrid } from "@/components/ui/bingo-card-grid";
import items from "@/api/items.json";
import * as React from 'react';
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Home() {
    const searchParams = useSearchParams()

    const rand = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const cards: { id: number; name: string; title: string }[] = [];

    for (let i = 1; i < 26; i++) {
        const card = searchParams.get('b' + i)
        cards.push(items[card]);
    }

    return (
        <div className="flex flex-col items-center justify-center h-full w-full gap-4">
            <h1 className="text-3xl">
                Your <span className="text-rose-500">Bingo</span> card
            </h1>
            <BingoCardGrid cards={cards} />
            <Link href={"/"}><Button size="icon" variant={"ghost"}><HomeIcon className="h-4 w-4"/></Button></Link>
        </div>
    );
}

