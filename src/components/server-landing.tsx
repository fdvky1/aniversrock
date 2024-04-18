/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/aV0RWDxrjyB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

"use client";
import Link from "next/link"
import Image from "next/image";
// import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useEffect, useState } from "react"

export function ServerLanding() {
  const [stats, setStats] = useState({
    isOnline: false,
    online: 0,
    max: 0
  });

  useEffect(()=> {
    fetch(`https://api.mcsrvstat.us/bedrock/3/play.anivers.my.id:19132`).then(async res => {
      if(!res.ok) return;
      const json: { online: boolean, players: { online: number, max: number }} = await res.json();
      setStats({
        isOnline: json.online,
        max: json.players.max,
        online: json.players.online
      })
    })
  }, [])
  return (
    <>
      <header className="flex h-20 w-full items-center px-4 md:px-6">
        <div className="w-[150px]">
          <Link href="#">
            <MouseIcon className="h-6 w-6" />
            <span className="sr-only">Minecraft Server</span>
          </Link>
        </div>
        {/* <div className="flex w-full justify-center">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Rules
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="#"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div> */}
        <div className="ml-auto w-[150px]">
        <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="minecraft://?addExternalServer=AniversROCK|play.anivers.my.id:19132"
          >
            Join Server
          </Link>
          {/* <Button>Join Server</Button> */}
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image alt="Server Image" className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" height="310" src="/images/server-image.jpg" width="550"/>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Server Status
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Welcome to Anivers Minecraft Server!
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our Minecraft server for an immersive and fun gaming experience. We offer a variety of game modes
                  and unique features.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Player Count: { stats.online } / {stats.max}
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Status: {stats.isOnline ? "Online" : "Offline"}
                </li>
              </ul>
              <div className="flex flex-col gap-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="minecraft://?addExternalServer=AniversROCK|play.anivers.my.id:19132"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function MouseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  )
}