import NewsLetter from '@/components/mainlayout/NewsLetter'
import QuestionCards from '@/components/mainlayout/QuestionCards'
import WebLayout from '@/components/mainlayout/WebLayout'
import React from 'react'

const questions = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
]

const page = () => {
  return (
    <WebLayout>
      <section className="px-40 py-16 font-sans bg-white">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Scenarios</h1>
          <p className="text-gray-500 text-center max-w-2xl text-lg mb-8">
            Our free questions don&apos;t just prepare you—they push you to the next level.
          </p>
        </div>
        {questions.map((q, i) => (
          <QuestionCards key={i} text={q.text} />
        ))}
      </section>
      <NewsLetter />
    </WebLayout>
  )
}

export default page