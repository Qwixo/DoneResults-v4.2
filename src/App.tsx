import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import WhatWeDo from './components/WhatWeDo'

const ScrollDemo = lazy(() => import('./components/ScrollDemo').then(m => ({ default: m.ScrollDemo })))
const WhyOptionsFail = lazy(() => import('./components/WhyOptionsFail'))
const WhatMakesDifferent = lazy(() => import('./components/WhatMakesDifferent'))
const MarketingComparison = lazy(() => import('./components/MarketingComparison'))
const Differentiators = lazy(() => import('./components/Differentiators'))
const Process = lazy(() => import('./components/Process'))
const Guarantee = lazy(() => import('./components/Guarantee'))
const Results = lazy(() => import('./components/Results'))
const IFailedSection = lazy(() => import('./components/IFailedSection'))
const TimelineDemo = lazy(() => import('./components/TimelineDemo').then(m => ({ default: m.TimelineDemo })))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <WhatWeDo />
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <ScrollDemo />
          <WhyOptionsFail />
          <WhatMakesDifferent />
          <MarketingComparison />
          <Differentiators />
          <Process />
          <Guarantee />
          <Results />
          <IFailedSection />
          <TimelineDemo />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
