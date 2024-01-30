'use client'
import React from 'react'
import { useParams } from 'next/navigation'
const DetailsPage = () => {
const { id } = useParams()
// console.log('====================================');
// console.log(id);
// console.log('====================================');
  return (
    <div>DetailsPage { id }</div>
  )
}

export default DetailsPage