'use client'

import AuthLayout from '@/components/auth/AuthLayout'
import React, { useState } from 'react'
import { Form, FormItem, FormControl, FormMessage, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'

const registerSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: '', email: '', password: '' },
  })

  return (
    <AuthLayout>
      <div>
        <div className="flex flex-col items-center mb-8">
          <Image src="/assets/images/logo-casper.png" alt="CASPer Edge Logo" width={221} height={60} className="mb-2" />
          <h1 className="text-4xl font-semibold mb-1 mt-12">Sign Up</h1>
          <p className="text-gray-500 text-center text-base mt-5">Create your account in seconds!</p>
        </div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="User Name" {...field} className='rounded-full w-[530px] h-14' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email address" {...field} className='rounded-full w-[530px] h-14' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...field}
                        className='rounded-full w-[530px] h-14 pr-12'
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none bg-transparent"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="w-6 h-6" />
                        ) : (
                          <Eye className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-11 rounded-full bg-[#DA3539] hover:bg-[#b82b2e] text-white font-semibold text-base shadow-none">Sign Up</Button>
            <div className="flex items-center gap-2 my-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-sm">Or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <Button type="button" variant="outline" className="w-full h-11 rounded-full font-semibold text-base flex items-center justify-center gap-2 text-black">
              <Image src="/assets/images/googleicon.svg" alt="Google" width={20} height={20} />
              Continue with Google
            </Button>
          </form>
        </Form>
        <div className="mt-8 text-center text-sm text-gray-500">
          Forget your password?{' '}
          <Link href="/forgot-password" className="text-secondary font-semibold hover:underline">Retrieve Now</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage