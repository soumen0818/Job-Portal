import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link className="pl-6">
          <img src="/Hireura.png" alt="logo" className='h-15 ' />
        </Link>

        <Button variant="outline">Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );


};

export default Header