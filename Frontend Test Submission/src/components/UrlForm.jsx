import React, { useState } from 'react'
import Logger from '../services/logger'

export default function UrlForm({ addUrl }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return
    addUrl(input)
    Logger.log('URL_ADDED', { url: input })
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  )
}
