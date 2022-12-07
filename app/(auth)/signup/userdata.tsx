'use client'

import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function UserData() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <br className="mb-10" />
        <p>Component level</p>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={200}
          height={200}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-5xl font-mona">
        <b className="font-mona-bold">INTR</b>VNT
      </h1>

      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  )
}
