'use client'
import {LineChart,Line , XAxis , YAxis, CartesianGrid,ResponsiveContainer} from 'recharts'


import { Card , CardDescription, CardContent, CardHeader  , CardTitle } from '../ui/card'

import data from '@/data/analytics'
function AnalyticsChart() {
  return (
    <div> <Card>
    <CardHeader>
      <CardTitle>Analytics For This Year</CardTitle>
      <CardDescription>Views Per Month</CardDescription>
    </CardHeader>
    <CardContent>
      <div style={{  width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart width={1050} height={300} data={data}>
            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey='name' />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card></div>
  )
}

export default AnalyticsChart