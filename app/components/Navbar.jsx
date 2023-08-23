import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../components/helpdesk-logo.png'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav>
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Helpdesk Logo" width={32} />

        <h1>Helpdesk</h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>

      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}
