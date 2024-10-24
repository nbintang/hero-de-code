import React from 'react'
import img1 from "@/public/img/mental.png"
import img2 from "@/public/img/docktor.png"
import img3 from "@/public/img/peace.png"
import Image from 'next/image'


export default function Explore() {
  return (
    <div className='flex flex-col max-w-6xl mx-auto gap-20 py-10'>
        <div className='text-center md:text-start'>
            <p className='text-primary'>What We Offer</p>
            <h1 className='text-4xl font-medium' >Explore Our Comprehensive<br/>Wellness Services</h1>
            <p className='font-medium pt-10 text-[#4F4F4F]'>We believe mental health is a journey, and every journey<br/>deserves personalized guidance.</p>
        </div>
        <div className='flex items-center md:flex-row flex-col gap-10 justify-between'>
            <div>
                <div className='bg-tertiary w-fit px-5 pt-5 rounded-xl flex flex-col'>
                    <h1 className=' text-2xl '>Personalized Mental<br/>Health Plans</h1>
                    <div className='flex justify-between items-center'>
                        <button className='border text-primary border-primary bg-white py-1 px-3 rounded-md'>Read More</button>
                        <Image src={img1} alt='doctor' width={200} height={133}/>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-primary/50 w-fit px-5 pt-5 rounded-xl flex flex-col'>
                    <h1 className=' text-2xl '>Personalized Mental<br/>Health Plans</h1>
                    <div className='flex justify-between items-center'>
                        <button className='border text-primary border-primary bg-white py-1 px-3 rounded-md'>Read More</button>
                        <Image src={img2} alt='doctor' width={200} height={133}/>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-secondary/50 w-fit px-5 pt-5 rounded-xl flex flex-col'>
                    <h1 className=' text-2xl '>Holistic Healing<br/>Approach</h1>
                    <div className='flex justify-between items-center'>
                        <button className='border text-primary border-primary bg-white py-1 px-3 rounded-md'>Read More</button>
                        <Image src={img3} alt='doctor' width={200} height={133}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
