import React, { useState } from 'react'

const InfoSection = ({ sectionInfo }) => {
  const [showHide, setShowHide] = useState('none')

  const handleClick = () => {
    showHide === 'none' ? setShowHide('block') : setShowHide('none')
    console.log(showHide)
  }

  return (
    <section onClick={() => handleClick()} className='section volunteerInfo'>
      <div className='container'>
        <h2 className='volunteerInfo-title'>{sectionInfo.title}</h2>
        <div style={{ display: showHide }}>
          {sectionInfo.description}
          {!!sectionInfo.link && (
            <div>
              <a href={sectionInfo.link.url}>
                <button className='volunteerInfo-link'>
                  {sectionInfo.link.title}
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default InfoSection
