

import Announcements from '@/components/announcements'
import AttendaceChart from '@/components/attendance-chart'
import CountChart from '@/components/count-chart'
import EventCalendar from '@/components/event-calendar'
import FinanceChart from '@/components/finance-chart'
import UserCard from '@/components/user-card'
import React from 'react'

const AdminPage = () => {

  return (

    <div className='p-4 flex flex-col gap-4 md:flex-row'>

        <div className='w-full lg:w-2/3 flex flex-col gap-8'>

          <div className='flex gap-4 justify-between flex-wrap'>
            <UserCard type='student' />
            <UserCard type='teacher' />
            <UserCard type='parent' />
            <UserCard type='staff' />
          </div>

          <div className='flex gap-4 flex-col lg:flex-row'>
            <div className='w-full lg:w-1/3 h-[450px]'>
                <CountChart />
            </div>
            <div className='w-full lg:w-2/3 h-[450px]'>
              <AttendaceChart />
            </div>
        
          </div>


          <div className='w-full h-[500px]'>

            <FinanceChart />

          </div>

        </div>


        <div className='w-full flex flex-col gap-8 lg:w-1/3'>

          <EventCalendar />
          <Announcements />

        </div>

    </div>

  )

}

export default AdminPage