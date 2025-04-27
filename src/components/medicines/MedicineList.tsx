'use client'

import Link from 'next/link'
import { Medicine } from '@/types'

export default function MedicineList({ medicines }: { medicines: Medicine[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {medicines.map((medicine) => (
        <Link
          key={medicine.id}
          href={`/medicines/${medicine.id}`}
          className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white"
        >
          <h2 className="font-semibold">{medicine.name}</h2>
          <p className="text-sm text-gray-600">
            Expires: {new Date(medicine.expiry_date).toLocaleDateString()}
          </p>
        </Link>
      ))}
    </div>
  )
}