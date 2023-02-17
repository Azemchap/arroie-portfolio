import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hello. My name is Chenwie Asang. an aspiring young Game Developer/Designer in Cameroon, Africa. Playing games is my passion
          but even more so is making them. Putting my credibility, intellect and ingenuity to the ultimate test can be
          considered a consistent goal of mine. I always stand ready to get work done and spread fun across the continent and globe.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault()
          window.location.href = '/files/cv.pdf'
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
