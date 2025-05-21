'use client'

import AuthLayout from '@/components/auth/AuthLayout'
import React from 'react'
import { Form, FormItem, FormControl, FormMessage, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordPage = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  return (
    <AuthLayout>
      <div>
        <div className="flex flex-col items-center mb-8">
          <Image src="/assets/images/logo-casper.png" alt="CASPer Edge Logo" width={221} height={60} className="mb-2" />
          <h1 className="text-4xl font-semibold mt-12 mb-2">Forgot password</h1>
          <p className="text-gray-500 text-center text-base mb-8">Please enter your email to reset the password</p>
        </div>
        <Form {...form}>
          <form className="space-y-6 w-full flex flex-col items-center" onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="email" placeholder="Your Email" {...field} className='rounded-full w-[530px] h-14' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[530px] h-14 rounded-full bg-[#DA3539] hover:bg-[#b82b2e] text-white font-semibold text-base shadow-none">Reset Password</Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}

export default ForgotPasswordPage
