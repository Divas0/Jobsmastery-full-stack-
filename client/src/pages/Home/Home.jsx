import React from 'react'
import HeroPlatform from '../Herosection/HeroPlatform'
import SliderSection from '../Herosection/slider/SliderSection'
import WhatSection from '../whatsection/WhatSection'
import PlatformSection from '../platformsection/PlatformSection'
import MarketingSection from '../Marketingsec/MarketingSection'
import SelectionSection from '../selectionsection/SelectionSection'
import ProductSpotlightSection from '../productspotlightsec/ProductSpotlightSection'

const Home = () => {
  return (
    <div className='flex h-auto w-full  flex-col'>
      <div> <HeroPlatform/> </div>
         <div> 
        <SliderSection/>
        </div> 
        <div>
          <WhatSection/>
        </div>
        <div> 
          <PlatformSection/>
        </div>
        <div> 
          <MarketingSection/>
        </div>
        <div> 
          <ProductSpotlightSection/>
        </div>
        <div> 
          <SelectionSection/>
        </div>
   
   
    </div>
  )
}

export default Home