import React from 'react'
import DashboardLayout from '@/components/mainlayout/DashboardLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'

const billingHistory = [
  { date: 'May 26, 2025', invoice: '#INV-001', amount: '$99' },
  { date: 'May 26, 2025', invoice: '#INV-002', amount: '$99' },
]

const YourPlanPage = () => {
  return (
    <DashboardLayout>
      <div className="w-full min-h-screen bg-[#FDF5F4] p-0">
        {/* Your Plan */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-[#0C0E12] mb-4">Your Plan</h2>
          <Card className="flex flex-row items-center justify-between p-6 mb-8 border border-[#E5E5E5] bg-white rounded-xl">
            <div>
              <div className="text-lg font-semibold text-[#0C0E12]">Access Expires</div>
              <div className="text-base text-[#7B7B7B] mt-1">May 7, 2025</div>
            </div>
            <Button className="bg-[#DA3539] hover:bg-[#b82b2e] text-white rounded-full px-8 py-2 text-base font-semibold shadow-none">Manage</Button>
          </Card>
        </div>
        {/* Payment Method */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-[#0C0E12] mb-4">Payment Method</h2>
          <Card className="flex flex-row items-center justify-between p-6 mb-8 border border-[#E5E5E5] bg-white rounded-xl">
            <div className="flex items-center gap-4">
              <span className="bg-[#FFE6E6] p-3 rounded-lg flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-[#DA3539]" />
              </span>
              <div>
                <div className="text-lg font-semibold text-[#0C0E12]">Credit Card</div>
                <div className="text-base text-[#7B7B7B] mt-1">Manage via stripe</div>
              </div>
            </div>
            <Button className="bg-[#DA3539] hover:bg-[#b82b2e] text-white rounded-full px-8 py-2 text-base font-semibold shadow-none">Updated</Button>
          </Card>
        </div>
        {/* Billing History */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-[#0C0E12] mb-4">Billing History</h2>
          <Card className="p-0 border border-[#E5E5E5] bg-white rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <tbody>
                {billingHistory.map((item, i) => (
                  <tr key={i} className="border-b last:border-b-0 border-[#E5E5E5]">
                    <td className="py-4 px-6 text-base text-[#0C0E12]">{item.date}</td>
                    <td className="py-4 px-6 text-base text-[#DA3539] font-semibold cursor-pointer hover:underline">
                      View Invoice
                    </td>
                    <td className="py-4 px-6 text-base text-[#0C0E12] text-right">{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default YourPlanPage