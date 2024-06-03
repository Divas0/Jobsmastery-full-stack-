import React from 'react'

const ToggleButton = () => {
  return (

     
<div classNameName="bg-white dark:bg-gray-900 min-h-screen w-full justify-center flex flex-row items-center">
    <div className="flex flex-row justify-between toggle">
        <label for="dark-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
            <input  type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden"/>
            <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 dark:text-white text-gray-900 font-medium">
          
            </div>
        </label>
    </div>
</div>
  )
}

export default ToggleButton