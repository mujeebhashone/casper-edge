import React from 'react'
import { Play } from 'lucide-react'

interface QuestionCardProps {
  text: string
  onPractice?: () => void
}

const QuestionCards: React.FC<QuestionCardProps> = ({ text, onPractice }) => {
  return (
    <div className="bg-white rounded-xl shadow-md px-8 py-7 mb-8">
      <p className="text-[#303030] text-lg leading-relaxed mb-6">
        {text}
      </p>
      <button
        onClick={onPractice}
        className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#DA3539] text-white font-semibold text-base shadow-none hover:bg-[#b82b2e] transition-colors"
      >
        <Play className="w-5 h-5" />
        Practice
      </button>
    </div>
  )
}

export default QuestionCards