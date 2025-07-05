"use client"
import AppContext from '@/components/AppContextFolder/AppContext';
import { type } from 'os';
import React, { useRef, useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const timerCookieRef = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookieRef.current,
      windowSizeTracker: windowSizeTrackerRef.current,
      mousePositionTracker: mousePositionRef.current,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

 

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
}
