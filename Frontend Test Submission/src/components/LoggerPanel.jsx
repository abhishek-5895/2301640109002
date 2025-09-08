import React, { useState } from 'react'
import Logger from '../services/logger'

export default function LoggerPanel() {
  const [logs, setLogs] = useState(Logger.getAll())

  return (
    <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--primary)', borderRadius: '10px' }}>
      <h2 style={{ color: 'var(--secondary)' }}>Event Logs</h2>
      <button onClick={() => setLogs(Logger.getAll())}>Refresh</button>
      <button onClick={() => {
        Logger.clear()
        setLogs([])
      }}>Clear</button>
      <ul>
        {logs.map((l, idx) => (
          <li key={idx}>
            [{l.level}] {l.event} at {l.timestamp}
          </li>
        ))}
      </ul>
    </div>
  )
}
