'use client'

import AuthLayout from '@/components/auth/AuthLayout'
import React, { useState } from 'react'
import { Form, FormItem, FormControl, FormMessage, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'

const newPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string().min(6, { message: 'Please confirm your password' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

type NewPasswordFormValues = z.infer<typeof newPasswordSchema>

const NewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const form = useForm<NewPasswordFormValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  })

  return (
    <AuthLayout>
      <div>
        <div className="flex flex-col items-center mb-8">
          <Image src="/assets/images/logo-casper.png" alt="CASPer Edge Logo" width={221} height={60} className="mb-2" />
          <h1 className="text-4xl font-semibold mt-12 mb-2">Set a new password</h1>
          <p className="text-gray-500 text-center text-base mb-8">Create a new password. Ensure it differs from previous ones for security.</p>
        </div>
        <Form {...form}>
          <form className="space-y-6 w-full flex flex-col items-center" onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your new password"
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirm ? 'text' : 'password'}
                        placeholder="Re-enter password"
                        {...field}
                        className='rounded-full w-[530px] h-14 pr-12'
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none bg-transparent"
                        onClick={() => setShowConfirm((v) => !v)}
                        aria-label={showConfirm ? 'Hide password' : 'Show password'}
                      >
                        {showConfirm ? (
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
            <Button type="submit" className="w-[530px] h-14 rounded-full bg-[#DA3539] hover:bg-[#b82b2e] text-white font-semibold text-base shadow-none">Reset Password</Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}

export default NewPasswordPage
