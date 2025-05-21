'use client'
import NewsLetter from '@/components/mainlayout/NewsLetter'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Form, FormItem, FormControl, FormMessage, FormField, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import WebLayout from '@/components/mainlayout/WebLayout'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { Separator } from '@/components/ui/separator'

const packageData: Record<string, { name: string; price: number }> = {
  '1': { name: '1 Week of Access', price: 99 },
  '2': { name: '1 Month of Access', price: 299 },
}

const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Enter a valid email'),
  deliveryDate: z.string().min(1, 'Delivery Date is required'),
  cardNumber: z.string().min(12, 'Card Number is required'),
  cardName: z.string().min(2, 'Name on Card is required'),
  expiry: z.string().min(4, 'Expiry Date is required'),
  cvv: z.string().min(3, 'CVV is required'),
  paymentMethod: z.string(),
  promo: z.string().optional(),
})

type CheckoutFormValues = z.infer<typeof checkoutSchema>

const validPromo = 'REFER23'
const promoDiscount = 5

const CheckoutPage = () => {
  const params = useParams()
  const id = params?.id as string
  const pkg = packageData[id] || packageData['1']
  const [promoApplied, setPromoApplied] = useState(false)
  const [discount, setDiscount] = useState(0)

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      email: '',
      deliveryDate: '',
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
      paymentMethod: 'online',
      promo: '',
    },
  })

  const handlePromo = () => {
    if (form.getValues('promo')?.toUpperCase() === validPromo) {
      setPromoApplied(true)
      setDiscount(promoDiscount)
    } else {
      setPromoApplied(false)
      setDiscount(0)
    }
  }

  const subtotal = pkg.price
  const total = subtotal - discount

  return (
    <WebLayout>
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-start md:p-8 min-h-[80vh] font-sans bg-[#FDF5F4]">
      {/* Left: Personal & Payment Details */}
      <div className="bg-white rounded-xl shadow-md md:p-8 p-2 flex-1">
        <Button variant="ghost" className="mb-4 px-0 font-medium bg-transparent text-primary flex items-center w-fit gap-2" type="button">
            <Link href="/pricing">
                <ArrowLeft size={28} />
            </Link>
          Back
        </Button>
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(() => {})}>
        <Card className='p-8'>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-base font-bold'>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} className="h-12 rounded-none" />
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
                    <FormLabel className='text-base font-bold'>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} className="h-12 rounded-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryDate"
              render={({ field }) => (
                <FormItem>
                    <FormLabel className='text-base font-bold'>Delivery Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={
                            'flex w-full h-12 items-center justify-between rounded-none border border-input bg-transparent px-3 py-2 text-base text-muted-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50'
                          }
                        >
                          <span className={field.value ? 'text-black' : 'text-muted-foreground'}>
                            {field.value
                              ? format(new Date(field.value), 'dd-MM-yyyy')
                              : 'Select date'}
                          </span>
                          <CalendarIcon className="ml-2 h-5 w-5 text-primary" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar 
                        className=''
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={date => {
                            field.onChange(date ? format(date, 'yyyy-MM-dd') : '')
                          }}
                          initialFocus
                          classNames={{
                            day: 'rounded-full w-8 h-8 gap-2 text-black hover:bg-[#DA3539]/80 focus:bg-[#DA3539]/80 transition-colors',
                            day_selected: 'bg-black text-white rounded-full',
                            day_today: 'bg-[#DA3539] text-white rounded-full',
                            day_outside: 'bg-transparent text-gray-300',
                            day_disabled: 'bg-transparent text-gray-300',
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </Card>
            <h2 className="text-2xl font-bold mt-8 mb-4">Payment Details</h2>
            <Card className='p-8'>
            <div className="mb-2">
              <RadioGroup defaultValue="online" className="flex items-center gap-2">
                <RadioGroupItem
                  className='w-6 h-6 border-2 border-[#DA3539] bg-white rounded-full data-[state=checked]:bg-white data-[state=checked]:border-[#DA3539] shadow-none focus:ring-0 focus:ring-offset-0 relative after:content-[""] after:absolute after:inset-0 data-[state=checked]:after:block after:hidden data-[state=checked]:after:w-2.5 data-[state=checked]:after:h-2.5 data-[state=checked]:after:rounded-full data-[state=checked]:after:border-2 data-[state=checked]:after:bg-secondary data-[state=checked]:after:border-secondary data-[state=checked]:after:top-1/2 data-[state=checked]:after:left-1/2 data-[state=checked]:after:-translate-x-1/2 data-[state=checked]:after:-translate-y-1/2 data-[state=checked]:after:absolute'
                  value="online"
                  id="pay-online"
                />
                <label htmlFor="pay-online" className="text-lg font-bold">Pay Online</label>
              </RadioGroup>
            </div>
            <div className="flex gap-6 my-4 flex-wrap">
              <Image src="/assets/images/mastercard.png" alt="Mastercard" width={146} height={60} unoptimized className=''/>
              <Image src="/assets/images/visa.png" alt="Visa" width={146} height={60} unoptimized className=''/>
              <Image src="/assets/images/rupay.png" alt="Rupay" width={146} height={60} unoptimized className=''/>
              <Image src="/assets/images/discover.png" alt="Discover" width={146} height={60} unoptimized className=''/>
            </div>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Card Number" {...field} className="rounded-none h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="cardName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Name on Card" {...field} className="rounded-none h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiry"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Expiry Date" {...field} className="rounded-none h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="CVV" {...field} className="rounded-none h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            </Card>
          </form>
        </Form>
      </div>
      {/* Right: Package Details */}
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-[500px] min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4">Package Details</h2>
        <Separator className='my-4' />
        <div className="mb-2 font-semibold">Items in Cart <span className="text-primary rounded-full bg-secondary w-8 h-8 inline-flex items-center justify-center">01</span></div>
        <div className="my-4 flex justify-between items-center">
          <span className='text-lg font-semibold'>{pkg.name}</span>
          <span className="font-semibold text-lg">${pkg.price}</span>
        </div>
        <Separator className='my-4' />
        <div className="mb-4 flex items-center">
          <Input
            placeholder="#REFER23"
            value={form.watch('promo')}
            onChange={e => form.setValue('promo', e.target.value)}
            className="rounded-md inline-block mr-2"
          />
          <Button
            type="button"
            size="sm"
            className={`rounded-full px-6 ${promoApplied ? 'bg-green-500 hover:bg-green-600' : 'bg-[#DA3539] hover:bg-[#b82b2e]'}`}
            onClick={handlePromo}
          >
            {promoApplied ? 'Applied' : 'Apply'}
          </Button>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span>Discount</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span>Cart Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-4 mb-6">
          <span>Order Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full h-12 rounded-full bg-[#DA3539] hover:bg-[#b82b2e] text-white font-semibold text-base shadow-none">Confirm</Button>
      </div>
    </div>
    <NewsLetter />
    </WebLayout>
  )
}

export default CheckoutPage