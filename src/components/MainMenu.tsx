import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'Nosotros',
    href: '/',
    current: false
  },
  {
    name: 'Obras y proyectos',
    href: '/obras-y-proyectos',
    current: false
  },
  {
    name: 'Novedades',
    href: '/novedades',
    current: false
  },
  {
    name: 'Contacto',
    href: '/contacto',
    current: false
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MainMenu = () => {
  return (
    <Disclosure as="nav" className='w-full mx-2'>
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
          <a href="/"><img src="/logo.webp" width="300"/></a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-primary-500',
                    'rounded-md px-3 py-2 uppercase font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-primary-500',
                'block rounded-md px-3 py-2 uppercase font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


export default MainMenu