import Image from 'next/image'

interface OptimizedAvatarProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function OptimizedAvatar({ src, alt, priority = false, className }: OptimizedAvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={44}
      height={44}
      quality={75}
      priority={priority}
      className={className}
      sizes="(max-width: 768px) 28px, 44px"
    />
  )
}