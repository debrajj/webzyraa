import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

const SingleBrand = ({ brand }: { brand: any }) => {
  const { image, title, darkImg } = brand

  return (
    <Slider.Slide>
      <div className='flex items-center justify-center px-2 md:px-4'>
        <div className='bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 w-28 h-14 flex items-center justify-center'>
          <Image
            src={image}
            alt={title}
            height={32}
            width={100}
            className='dark:hidden object-contain max-w-full max-h-full'
          />
          <Image
            src={darkImg}
            alt={title}
            height={32}
            width={100}
            className='dark:block hidden object-contain max-w-full max-h-full'
          />
        </div>
      </div>
    </Slider.Slide>
  )
}

export default SingleBrand
