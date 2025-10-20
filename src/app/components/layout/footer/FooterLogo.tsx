'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const FooterLogo: React.FC = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Link href="/">
                <Image
                    src="/images/logo/ footer_dark.png"
                    alt="Webzyra Footer Logo"
                    width={120}
                    height={40}
                    quality={100}
                    priority={true}
                    className='w-24 h-auto'
                />
            </Link>
        );
    }

    const logoSrc = theme === 'dark' ? '/images/logo/ footer_dark.png' : '/images/logo/new_txt_black_logo.png';

    return (
        <Link href="/">
            <Image
                src={logoSrc}
                alt="Webzyra Footer Logo"
                width={120}
                height={40}
                quality={100}
                priority={true}
                className='w-24 h-auto'
            />
        </Link>
    );
};

export default FooterLogo;