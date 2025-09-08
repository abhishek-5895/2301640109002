import React, { useState } from 'react'
import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'
import LoggerPanel from './components/LoggerPanel'

export default function App() {
  const [urls, setUrls] = useState([])

  const addUrl = (url) => {
    const shortUrl = `short.ly/${Math.random().toString(36).substr(2, 6)}`
    const newEntry = { id: Date.now(), url, shortUrl }
    setUrls([newEntry, ...urls])
  }

  const deleteUrl = (id) => {
    setUrls(urls.filter((u) => u.id !== id))
  }

  return (
    <div>
      <h1 style={{ color: 'var(--primary)' }}>Alternate URL Shortener</h1>
      <UrlForm addUrl={addUrl} />
      <UrlList urls={urls} deleteUrl={deleteUrl} />
      <LoggerPanel />
    </div>
  )
}
