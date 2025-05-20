import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '../utils/consts'
import { useEffect, useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainMenuMobile = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

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
    <Disclosure 
      as="nav" 
      className={classNames(
        'w-full sm:hidden transition-all duration-300',
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md py-1 px-2' 
          : 'mx-2'
      )}
    >
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black/60 hover:bg-black/60 hover:text-white focus:outline-none">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir menú principal</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
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
            </div>
          </div>
          
          <DisclosurePanel className={classNames(
            'transition-all duration-300',
            isScrolled ? 'bg-white/95' : ''
          )}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isCurrent = currentPath === item.href || 
                                  (item.href !== '/' && currentPath.startsWith(item.href))
                return (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={classNames(
                      isCurrent ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-primary-500',
                      'block rounded-md px-3 py-2 uppercase font-medium transition-all duration-200',
                      isScrolled ? 'text-sm py-1.5' : ''
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default MainMenuMobile