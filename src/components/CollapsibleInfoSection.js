import React, { useState } from 'react'

const InfoSection = ({ sectionInfo }) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <section
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className='section volunteerInfo'
    >
      <div className='container'>
        <h2 className='volunteerInfo-title'>{sectionInfo.title}</h2>
        <div className={`collapsible ${collapsed ? '' : 'expand'}`}>
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
