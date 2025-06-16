import Image from 'next/image'

interface PhotoGridProps {
  photos: string[]
}

export const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
      {photos.map((src, index) => (
        <Image
          key={index}
          width={500}
          height={500}
          src={src}
          alt={`Foto ${index + 1}`}
          className='rounded-xl shadow-md w-full object-cover max-h-72'
        />
      ))}
    </div>
  )
}
