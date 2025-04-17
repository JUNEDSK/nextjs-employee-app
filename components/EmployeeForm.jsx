'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee, editEmployee } from '../redux/slices/employeeSlice'

export default function EmployeeForm({ initialData }) {
  const [data, setData] = useState(
    initialData || {
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
      position: '',
      profilePic: '',
    }
  )
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleFile = (e) => {
    const reader = new FileReader()
    reader.onload = () => setData(prev => ({ ...prev, profilePic: reader.result }))
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
  }

  const handleSubmit = () => {
    if (!data.name || !data.email) return alert('Name and email are required.')

    if (initialData) {
      dispatch(editEmployee(data))
    } else {
      dispatch(addEmployee(data))
      setShowModal(true)
      setData({
        id: Date.now(),
        name: '',
        email: '',
        phone: '',
        position: '',
        profilePic: '',
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {initialData ? 'Edit Employee' : 'Add New Employee'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Name*</label>
          <input
            name="name"
            placeholder="John Doe"
            value={data.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email*</label>
          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            value={data.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={data.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <input
            name="position"
            placeholder="Software Engineer"
            value={data.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <div className="flex items-center space-x-4">
            {data.profilePic && (
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                <img src={data.profilePic} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
            <label className="cursor-pointer">
              <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition">
                Choose File
              </span>
              <input type="file" onChange={handleFile} className="hidden" accept="image/*" />
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {initialData ? 'Update Employee' : 'Add Employee'}
        </button>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">
                The employee profile has been successfully {initialData ? 'updated' : 'added'}.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}