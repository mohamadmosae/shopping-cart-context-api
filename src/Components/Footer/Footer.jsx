import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-info w-100 text-center' style={{bottom:"0"}}>
      <p className='p-3'>this is footer <Link>@Mohamadmsy</Link></p>
    </div>
  )
}

export default Footer
