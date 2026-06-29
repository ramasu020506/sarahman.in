'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { siteData as staticSiteData } from '@/lib/site-data'
import { fetchSiteDataFromSupabase, type SiteData } from '@/lib/fetch-site-data'

const SiteDataContext = createContext<SiteData>(staticSiteData)

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(staticSiteData)

  useEffect(() => {
    fetchSiteDataFromSupabase().then((result) => {
      if (result) setData(result)
    })
  }, [])

  return (
    <SiteDataContext.Provider value={data}>
      {children}
    </SiteDataContext.Provider>
  )
}

export function useSiteData(): SiteData {
  return useContext(SiteDataContext)
}