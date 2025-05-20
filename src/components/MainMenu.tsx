import { navigation } from '../utils/consts'
import { useEffect, useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Ejecutar handler al inicio
    handleScroll();

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Detectar la ruta actual
    setCurrentPath(window.location.pathname)
  }, [])

  return (
    <div className={classNames(
      'w-full hidden sm:block transition-all duration-300',
      isScrolled 
        ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md py-2' 
        : 'mx-2'
    )}>
      <div className={classNames(
        "relative flex h-16 items-center justify-between transition-all duration-300",
        isScrolled ? "max-w-6xl mx-auto px-4" : ""
      )}>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div className="flex shrink-0 items-center">
            <a href="/">
              <img 
                src="/logo.webp" 
                width={isScrolled ? "200" : "300"} 
                className="transition-all duration-300"
                alt="Logo"
              />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 items-center h-full">
              {navigation.map((item) => {
                const isCurrent = currentPath === item.href || 
                                  (item.href !== '/' && currentPath.startsWith(item.href))
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={classNames(
                      isCurrent ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-primary-500',
                      'rounded-md px-3 py-2 uppercase font-medium transition-all duration-200',
                      isScrolled ? 'text-sm py-1.5' : ''
                    )}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu