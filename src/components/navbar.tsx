import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


export function Navbar() {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <Button variant={'secondary'} className="flex items-center text-2xl" asChild><Link href={'/'}>ustav</Link></Button>
                {/* Desktop Nav */}
                <div className="hidden md:flex flex-row items-center gap-4  ">
                    <Button variant={'secondary'} asChild><Link href={'/'}>Linkzinho</Link></Button>
                    <ModeToggle />
                </div>
                {/* Mobile Nav */}
                <div className="flex md:hidden">
                    <Sheet>
                        <Button size={"icon"} variant={'outline'} asChild>
                            <SheetTrigger><Menu /></SheetTrigger>
                        </Button>
                        <SheetContent className="flex flex-col items-center">
                            <SheetClose asChild><Button variant={'secondary'} className="flex items-center text-2xl" asChild><Link href={'/'}>ustav</Link></Button></SheetClose>
                            <div className="flex flex-row gap-4 items-center">
                                <ModeToggle /><SheetClose ><Button variant={'outline'} asChild><Link href={'/'}>Linkzinho</Link></Button></SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}