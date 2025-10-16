import React from 'react'
import HeroSection from '../../components/Hero'
import LatestAddedBooks from '../../components/LatestAddedBooks'
import SocialProofSection from '../../components/SocialProof'
import TestimonialSection from '../../components/Testimonial'
import FAQSection from '../../components/FAQ'
import CtaSection from '@/components/CTA'
import FeaturesSection from '@/components/Features'
import HowItWorksSection from '@/components/HowItWorks'
import { ComingSoonPage } from '@/components/ComingSoonPage'

function Home() {
  return (
    <>
      <ComingSoonPage />

      {/* <HeroSection />
      <SocialProofSection />
      <LatestAddedBooks />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <CtaSection />
      <FAQSection /> */}
    </>
  )
}

export default Home