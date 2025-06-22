'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter(); // ✅ moved inside

  const user = true; // example user condition

  return (
    <header className="navbar">
      <nav className="flex justify-between items-center px-4 py-2">
        <div className="logo-container flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} />
            <h1 className="text-xl font-bold">CastBolt</h1>
          </Link>
        </div>

        {user && (
          <div className="flex items-center space-x-4">
            <button onClick={() => router.push('/profile/123456')}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User Avatar"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="Logout Icon"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
