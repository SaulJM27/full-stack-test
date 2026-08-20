import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseOver = (e) => {
      if (e.target.closest('button, a, input, select, [role="button"], .cursor-pointer, img')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const onMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] ${isHovered ? 'cursor-hover' : ''}`}>
      <div
        className="custom-cursor-core"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="custom-cursor-frame"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  )
}

export default CustomCursor