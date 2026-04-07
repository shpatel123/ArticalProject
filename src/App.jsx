import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Code-split each page — only the visited page's JS is downloaded
const EmeraldYachts         = lazy(() => import('./pages/EmeraldYachts/EmeraldYachts'))
const DrakePassagePage      = lazy(() => import('./pages/DrakePassagePage/DrakePassagePage'))
const ScenicVSSilversea     = lazy(() => import('./pages/ScenicVSSilversea/ScenicVSSilversea'))
const AntarcticaCruise      = lazy(() => import('./pages/AntarcticaCruise/AntarcticaCruise'))
const ScenicAntarctica      = lazy(() => import('./pages/ScenicAntarctica/ScenicAntarctica'))
const ScenicvsEmeraldYachts = lazy(() => import('./pages/ScenicvsEmeraldYachts/ScenicvsEmeraldYachts'))
const LuxuryTravel          = lazy(() => import('./pages/LuxuryTravel/LuxuryTravel'))
const EmeraldAzzurraVsEmeraldSakara = lazy(() => import('./pages/EmeraldAzzurraVsEmeraldSakara/EmeraldAzzurraVsEmeraldSakara'))

const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7f9fb',
    fontFamily: 'Montserrat, sans-serif',
    color: '#274472',
    fontSize: '16px'
  }}>
    Loading…
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path='/' element={<EmeraldYachts />} />
          <Route path='/DrakePassagePage' element={<DrakePassagePage />} />
          <Route path='/scenic-vs-silversea-antarctica' element={<ScenicVSSilversea />} />
          <Route path='/antarctica-cruise-cost' element={<AntarcticaCruise />} />
          <Route path='/scenic-antarctica-cruise' element={<ScenicAntarctica />} />
          <Route path='/luxury-travel' element={<LuxuryTravel />} />
          <Route path='/ScenicvsEmeraldYachts' element={<ScenicvsEmeraldYachts />} />
          <Route path='/EmeraldAzzurraVsEmeraldSakara' element={<EmeraldAzzurraVsEmeraldSakara />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App