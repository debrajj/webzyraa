import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={50}
                height={15}
                quality={100}
                priority={true}
                className='dark:hidden w-28 h-auto'
            />
            <Image
                src="/images/logo/DarkModeLogo.png"
                alt="logo"
                width={50}
                height={15}
                quality={100}
                className='dark:block hidden w-28 h-auto'
            />
        </Link>
    );
};

export default Logo;
