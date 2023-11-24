"use client";
import { BingoCardGrid } from "@/components/ui/bingo-card-grid";
import { Button } from "@/components/ui/button";
import items from "@/api/items.json";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
    const [textToCopy, setTextToCopy] = useState("");
    const rand = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const cards: { id: number; name: string; title: string }[] = [];

    const copyLinkToClipboard = () => {
        const bingoCardLink = `https://imdarkly.github.io/minecraft-bingo-generator/card?${Array.from(
            { length: 25 },
            (_, index) => `b${index + 1}=${cards[index].id}`
        ).join("&")}`;

        navigator.clipboard.writeText(bingoCardLink).then(() => {
            console.log("Bingo card link copied to clipboard!");
        }).catch((error) => {
            console.error("Failed to copy link to clipboard:", error);
        });
    };

    for (let i = 0; i < 25; i++) {
        const randomNum = rand(0, 394);
        cards.push(items[randomNum]);
    }

    function generateCards() {
        window.location.reload();
    }

    return (
        <div className="flex flex-col items-center py-4 h-full w-full">
            <div className="py-4">
                <ModeToggle />
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full gap-8">
                <Image src={"/minecraft-bingo-generator/textures/logo.png"} alt="Bingo Logo" width={320} height={80} />
                <BingoCardGrid cards={cards} />
                <div className="flex flex-col gap-2">
                    <Button onClick={generateCards}>Generate</Button>
                    <Link
                        href={`https://imdarkly.github.io/minecraft-bingo-generator/card?${Array.from(
                            { length: 25 },
                            (_, index) => `b${index + 1}=${cards[index].id}`
                        ).join("&")}`}
                    >
                        <Button onClick={copyLinkToClipboard} variant={"outline"}>Open Bingo card</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
