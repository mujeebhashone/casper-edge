import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  image: string
  title: string
  description: string
  
  readMoreLink: string
}

const BlogCards: React.FC<BlogCardProps> = ({ image, title, description, readMoreLink }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[140px] p-4">
      <div className="flex-shrink-0 w-full h-full lg:w-[233px] lg:h-[183px] relative">
        <Image src={image} alt={title} width={233} height={183} unoptimized className="object-cover rounded-l-xl w-full" />
      </div>
      <div className="flex flex-col flex-1 p-4 justify-between">
        <div>
          <h2 className="text-lg font-bold mb-1 leading-snug text-[#303030] lg:max-w-[70%]">{title}</h2>
          <p className="text-[#565F5C] text-lg mb-3 line-clamp-2 lg:max-w-[80%]">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <Link href={readMoreLink} className="text-secondary text-lg font-semibold flex items-center gap-1 group">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default BlogCards