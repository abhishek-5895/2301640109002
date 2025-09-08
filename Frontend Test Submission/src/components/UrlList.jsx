import React from 'react'
import Logger from '../services/logger'

export default function UrlList({ urls, deleteUrl }) {
  return (
    <ul>
      {urls.map((u) => (
        <li key={u.id}>
          <strong>{u.shortUrl}</strong> → {u.url}
          <button onClick={() => {
            navigator.clipboard.writeText(u.shortUrl)
            Logger.log('URL_COPIED', { shortUrl: u.shortUrl })
          }}>Copy</button>
          <button onClick={() => {
            deleteUrl(u.id)
            Logger.warn('URL_DELETED', { id: u.id })
          }}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
