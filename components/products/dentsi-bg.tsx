"use client";

import Image from "next/image";

export function DentsiBg() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative mt-10 overflow-hidden">
                <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border bg-background p-2 shadow-xl shadow-zinc-950/10 ring-1 ring-border">

                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            src="/Dashboard-bg.png"
                            alt="Dentsi dashboard preview"
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     1200px"
                            className="object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DentsiBg;