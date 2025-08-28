import  { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { SignedIn, SignIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const { user } = useUser();
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link className="pl-6">
          <img src="/Hireura.png" alt="logo" className='h-15 ' />
        </Link>

        <div className='flex gap-8'>
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/job-post">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-job"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/all-job"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50 animate-in fade-in duration-200"
          onClick={handleOverlayClick}
        >
          <div className="relative animate-in zoom-in-95 duration-200">
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
              appearance={{
                elements: {
                  rootBox: "shadow-2xl rounded-lg border border-gray-200",
                  card: "shadow-none bg-white"
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );


};

export default Header