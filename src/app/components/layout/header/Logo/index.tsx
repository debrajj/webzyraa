'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Link href="/" aria-label="Webzyraa Homepage">
                <Image
                    src="/images/logo/new_txt_black_logo.webp"
                    alt="Webzyraa - Professional Web Development Company Logo"
                    width={112}
                    height={32}
                    priority={true}
                    className='w-28 h-auto'
                />
            </Link>
        );
    }

    return (
        <Link href="/" aria-label="Webzyraa Homepage">
            <Image
                src={theme === 'dark' ? "/images/logo/new_webzyra.webp" : "/images/logo/new_txt_black_logo.webp"}
                alt="Webzyraa - Professional Web Development Company Logo"
                width={112}
                height={32}
                priority={true}
                className='w-28 h-auto'
            />
        </Link>
    );
};

export default Logo;