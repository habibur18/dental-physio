'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Clock, AlertCircle, Calendar } from 'lucide-react'
import { format, differenceInYears } from 'date-fns'
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ReservationPageJsx({ params }) {
  const [data, setData] = useState({
    _id: '',
    date: '',
    time: '',
    doctor: '',
    gender: '',
    reservation: ''
  })
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [showPassword, setShowPassword] = useState(false)
  const [birthDate, setBirthDate] = useState(undefined)
  const [age, setAge] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // In a real scenario, we would use the actual API endpoint
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/slots/${params.slotId}`)
        // const slotData = await res.json()
        
        // For demonstration, we'll use the sample data
        const slotData = {
          _id: '672f8035a20c1e01d275d5b5',
          date: '2024-11-15',
          time: '08:00 AM',
          doctor: 'Dr. Debra',
          gender: 'Female',
          reservation: '2024-11-20T15:25:46.269Z'
        }
        setData(slotData)
      } catch (err) {
        setError('Failed to fetch appointment data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [params.slotId])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer);
  }, [])

  const addExtraTime = async () => {
    try {
      // In a real scenario, we would make an actual API call
      // await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/slots/${params.slotId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ addMinutes: 5 })
      // })
      
      // For demonstration, we'll just update the local state
      setTimeLeft(prev => prev + 300) // Add 5 minutes (300 seconds)
    } catch (error) {
      console.error('Failed to add extra time:', error)
    }
  }

  const calculateAge = (date) => {
    if (date) {
      const age = differenceInYears(new Date(), date)
      setAge(age)
    }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    (<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Timer Card */}
        <Card className="border-teal-500/20">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-teal-700">
              Reservation Timer
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div
              className="flex items-center space-x-2 text-4xl font-mono font-bold text-teal-600">
              <Clock className="h-8 w-8" />
              <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
            {timeLeft < 180 && timeLeft > 0 && (
              <Button onClick={addExtraTime} className="bg-teal-600 hover:bg-teal-700">
                Add 5 Minutes Extra Time
              </Button>
            )}
            {timeLeft === 0 && (
              <div className="flex items-center text-red-500 space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Reservation time expired</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Appointment Details Card */}
        <Card className="border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-teal-700">Appointment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Date</Label>
              <div className="font-medium">{format(new Date(data.date), 'MMMM d, yyyy')}</div>
            </div>
            <div className="space-y-2">
              <Label>Time</Label>
              <div className="font-medium">{data.time}</div>
            </div>
            <div className="space-y-2">
              <Label>Doctor</Label>
              <div className="font-medium">{data.doctor}</div>
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <div className="font-medium">{data.gender}</div>
            </div>
          </CardContent>
        </Card>

        {/* User Registration Card */}
        <Card className="border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-teal-700">Patient Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="border-teal-500/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-teal-500/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="border-teal-500/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthdate">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        !birthDate && "text-muted-foreground"
                      }`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      {birthDate ? format(birthDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={birthDate}
                      onSelect={(date) => {
                        setBirthDate(date)
                        calculateAge(date)
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus />
                  </PopoverContent>
                </Popover>
                {age > 0 && (
                  <div className="text-sm text-teal-600">Age: {age} years</div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Create Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pr-10 border-teal-500/20" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Options Card */}
        <Card className="border-teal-500/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-teal-700">Payment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="h-40 flex items-center justify-center border-2 border-dashed border-teal-500/20 rounded-lg">
              <p className="text-gray-500">Payment options will be integrated here</p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg">
          Confirm Reservation
        </Button>
      </div>
    </div>)
  );
}