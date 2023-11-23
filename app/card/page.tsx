"use client";
import { BingoCardGrid } from "@/components/ui/bingo-card-grid";
import items from "@/api/items.json";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
    const searchParams = useSearchParams();

    const rand = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const cards: { id: number; name: string; title: string }[] = [];

    for (let i = 1; i < 26; i++) {
        const card = searchParams.get("b" + i);
        if (card) {
            cards.push(items[parseInt(card)]);
        }
    }
    return (
        <div className="flex flex-col items-center h-full w-full">
            <div className="flex py-4 gap-2">
                <ModeToggle />
                <Link href={"/"}>
                    <Button size="icon" variant={"ghost"}>
                        <HomeIcon className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full gap-8">
                    <Image
                        src={"/minecraft-bingo-generator/textures/logo.png"}
                        alt="Bingo Logo"
                        width={320}
                        height={80}
                    />
                    <BingoCardGrid cards={cards} />
            </div>
        </div>
    );
}
