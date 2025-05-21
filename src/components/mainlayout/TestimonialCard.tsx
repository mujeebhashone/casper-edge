import React from 'react'
import { Star } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface TestimonialCardProps {
  name: string
  role: string
  avatar: string
  text: string
  stars?: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, text, stars = 5 }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[260px] h-full">
      <div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#2563eb] fill-[#2563eb]" />
          ))}
        </div>
        <p className="text-gray-700 text-base leading-relaxed mb-6">{text}</p>
      </div>
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-base text-black leading-tight">{name}</div>
          <div className="text-xs text-gray-400 font-medium leading-tight">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard