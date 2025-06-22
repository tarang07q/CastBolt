import React from 'react'
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'

const page = async ({params} : ParamsWithSearch) => {
    const {id} = await params;
    
  return (
    <div >
        <Header subHeader = "tarangbhargava09@gmail.com" title = "Tarang Bhargava" userImg = "/assets/images/dummy.jpg" />
       <section className='video-grid'>
         {dummyCards.map((card) => (
           <VideoCard username={''} key={card.id} {...card} />
         ))}
       </section>
    </div>
  )
}

export default page