'use client'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import EmployeeForm from '../../../../components/EmployeeForm'

export default function EditEmployeePage() {
  const { id } = useParams()
  const employee = useSelector(state => state.employee.employees.find(e => e.id === +id))
  return employee ? <EmployeeForm initialData={employee} /> : <p>Not Found</p>
}