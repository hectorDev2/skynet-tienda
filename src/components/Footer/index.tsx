import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-transparent rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Skynet™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm  text-white font-bold dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Nosotros
            </a>
          </li>
          <li>
            <Link href="/privacidad" className="hover:underline me-4 md:me-6">
              Politicas de privacidad
            </Link>
          </li>
          <li>
            <Link
              href="/terminos-y-condiciones"
              className="hover:underline me-4 md:me-6"
            >
              Terminos y condiciones
            </Link>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
