import React from 'react'
import SolutionsHeader from './SolutionsHeader'
import Solutionsontent from './Solutionsontent'
import SolutionsSwiper from './SolutionsSwiper'

const SolutionsMain = () => {
  return (
    <div style={{backgroundColor:"#f5f6fb"}}>
      <SolutionsHeader />
      <SolutionsSwiper />
      <Solutionsontent />
    </div>
  )
}

export default SolutionsMain