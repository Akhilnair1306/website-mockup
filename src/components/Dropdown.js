import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown({ label }) {
  return (
    <Menu as="div" className="relative inline-block text-left items-center">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-black">
          {label}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-700 text-white' : 'text-white',
                    'block px-4 py-2 text-sm font-semibold'
                  )}
                >
                  Account settings
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-700 text-white' : 'text-white',
                    'block px-4 py-2 text-sm font-semibold'
                  )}
                >
                  Support
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-700 text-white' : 'text-white',
                    'block px-4 py-2 text-sm font-semibold'
                  )}
                >
                  License
                </a>
              )}
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-700 text-white' : 'text-white',
                      'block w-full px-4 py-2 text-left text-sm font-semibold'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
