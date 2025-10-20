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
            <Link href="/">
                <Image
                    src="/images/logo/new_txt_black_logo.png"
                    alt="logo"
                    width={50}
                    height={15}
                    quality={100}
                    priority={true}
                    className='w-28 h-auto'
                />
            </Link>
        );
    }

    return (
        <Link href="/">
            <Image
                src={theme === 'dark' ? "/images/logo/new_webzyra.png" : "/images/logo/new_txt_black_logo.png"}
                alt="logo"
                width={50}
                height={15}
                quality={100}
                priority={true}
                className='w-28 h-auto'
            />
        </Link>
    );
};

export default Logo;