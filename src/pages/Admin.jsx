import React, { useState, useEffect } from 'react'
import './Admin.css'

function Admin() {
  const [password, setPassword] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [hackerText, setHackerText] = useState('')
  const [isGranted, setIsGranted] = useState(false)
  
  const targetText = 'ENTER ACCESS CODE'
  const hintText = 'Be4uty 1s m1n3 2'
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  
  useEffect(() => {
    let iteration = 0
    const maxIterations = 60 // About 10 seconds at 6 iterations per second
    
    const interval = setInterval(() => {
      if (iteration < maxIterations) {
        // Random hacker text effect
        setHackerText(
          targetText.split('').map((char, index) => {
            if (char === ' ') return ' '
            if (Math.random() > 0.5) {
              return chars[Math.floor(Math.random() * chars.length)]
            }
            return char
          }).join('')
        )
        iteration++
      } else if (!showHint) {
        // Show the hint after 10 seconds
        setShowHint(true)
        setHackerText(targetText)
        clearInterval(interval)
      }
    }, 167) // ~6 times per second
    
    return () => clearInterval(interval)
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === 'behold') {
      setIsGranted(true)
      setTimeout(() => {
        // You can redirect or show secret content here
        console.log('ACCESS GRANTED')
      }, 2000)
    } else {
      // Flash error
      const input = e.target.querySelector('input')
      input.style.animation = 'shake 0.5s'
      setTimeout(() => {
        input.style.animation = ''
      }, 500)
    }
  }
  
  if (isGranted) {
    return (
      <div className="admin-container granted">
        <div className="access-granted">
          <pre className="ascii-art">
{`
 █████╗  ██████╗ ██████╗███████╗███████╗███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝
███████║██║     ██║     █████╗  ███████╗███████╗
██╔══██║██║     ██║     ██╔══╝  ╚════██║╚════██║
██║  ██║╚██████╗╚██████╗███████╗███████║███████║
╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝
                                                 
 ██████╗ ██████╗  █████╗ ███╗   ██╗████████╗███████╗██████╗ 
██╔════╝ ██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
██║  ███╗██████╔╝███████║██╔██╗ ██║   ██║   █████╗  ██║  ██║
██║   ██║██╔══██╗██╔══██║██║╚██╗██║   ██║   ██╔══╝  ██║  ██║
╚██████╔╝██║  ██║██║  ██║██║ ╚████║   ██║   ███████╗██████╔╝
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═════╝ 
`}
          </pre>
        </div>
      </div>
    )
  }
  
  return (
    <div className="admin-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-title">SHARDTECH SECURITY SYSTEM v2.3.1</span>
        </div>
        <div className="terminal-body">
          <div className="hacker-code">
            {hackerText || 'INITIALIZING...'}
          </div>
          
          {showHint && (
            <div className="hint-container">
              <div className="hint-label">HINT:</div>
              <div className="hint-text">{hintText}</div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="password-form">
            <div className="input-group">
              <span className="prompt">&gt;</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                placeholder="..."
                autoFocus
              />
            </div>
          </form>
          
          <div className="matrix-bg">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="matrix-column" style={{ animationDelay: `${i * 0.1}s` }}>
                {Array.from({ length: 30 }).map((_, j) => (
                  <span key={j}>{chars[Math.floor(Math.random() * chars.length)]}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
