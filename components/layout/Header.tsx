'use client'

import { useState } from 'react'
import Logo from './Logo'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaXmark } from 'react-icons/fa6'
import ConsultationBtn from '../Buttons/ConsultationBtn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
]

const SocialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/mohamed.tharwat.101442/', icon: <FaFacebookF size={18} /> },
    { name: 'Instagram', href: 'https://www.instagram.com/mo7hamed_tharwat/', icon: <FaInstagram size={18} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-thawrat-194a42371/', icon: <FaLinkedinIn size={18} /> }
]

function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    if (pathname?.startsWith('/studio')) return null

    return (
        <>
            <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-20">
                <div className="flex items-center gap-20">
                    <div className="flex items-center gap-2">
                        <Logo className="w-12 h-12" />
                    </div>

                    <nav className="hidden lg:flex items-center gap-2">
                        {NavLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                key={link.name}
                                href={link.href}
                                className={`px-6 py-2.5 rounded-full border transition text-sm ${
                                    isActive
                                        ? 'bg-white text-black border-white'
                                        : 'text-white border-white/20 hover:bg-white/10'
                                }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="flex items-center gap-20">
                    <div className="hidden md:flex items-center gap-4 text-white/80">
                        {SocialLinks.map((social) => (
                            <Link
                            key={social.name}
                            href={social.href}
                            className="p-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:block">
                        <ConsultationBtn />
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-white p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                    >
                        <FaBars size={20} />
                    </button>
                </div>
            </header>

            <div
            className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
            />

            <div
            className={`fixed top-0 right-0 h-full w-[75vw] sm:w-[60vw] max-w-sm bg-zinc-950 border-l border-white/5 z-50 p-8 flex flex-col justify-between transition-transform duration-300 ease-out transform lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div>
                    <div className="flex justify-between items-center mb-16">
                        {/* <Logo className="w-10 h-10" /> */}
                        <button
                        onClick={() => setIsOpen(false)}
                        className="text-white p-2 border border-white/10 rounded-full hover:bg-white/5 transition"
                        >
                            <FaXmark size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-4">
                        {NavLinks.map((link) => {
                            const isActive = pathname === link.href
                            return (
                                <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-6 py-3 rounded-full border text-center text-sm transition ${
                                isActive
                                    ? 'bg-white text-black border-white'
                                    : 'text-white border-white/10 hover:bg-white/5'
                                }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="flex flex-col gap-8 items-center">
                    <div className="w-full flex justify-center md:hidden">
                        <ConsultationBtn />
                    </div>

                    <div className="flex items-center gap-4 text-white/60">
                        {SocialLinks.map((social) => (
                            <Link
                            key={social.name}
                            href={social.href}
                            className="p-2.5 border border-white/10 rounded-full hover:bg-white hover:text-black transition"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header