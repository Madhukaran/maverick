import React from 'react'
import { useRouter } from 'next/router'

export default function scoretab() {
    const router = useRouter();
    const formData = router.query;
    console.log(formData);
  return (
    <div>
        <h1>{formData.overs}</h1>
        
    </div>
    

  )
}
