'use client'

import { useTheme } from 'next-themes'
import { flushSync } from 'react-dom'
// import { tv } from 'tailwind-variants'
import { Icon } from "@iconify/react/dist/iconify.js";


import { useIsClient } from '@/utils/use-is-client'
import { transitionViewIfSupported } from '@/utils/dom'

// const styles = tv({
//   base: 'rounded-inherit inline-flex h-[32px] w-[32px] items-center justify-center border-0 text-current',
//   variants: {
//     status: {
//       active: '',
//     },
//   },
// })

const iconClassNames = 'h-4 w-4 text-current z-[1]'

export const ThemeSwitcher = () => {
  return (
    <div className="relative inline-block">
      <ThemeIndicator />
      <ButtonGroup />
    </div>
  )
}

const ThemeIndicator = () => {
  const { theme } = useTheme()

  const isClient = useIsClient()

  if (!isClient) return null
  if (!theme) return null
  return (
    <div
      className="absolute top-[4px] z-[0] size-[32px] rounded-full bg-default-100 shadow-[0_1px_2px_0_rgba(127.5,127.5,127.5,.2),_0_1px_3px_0_rgba(127.5,127.5,127.5,.1)] duration-200"
      style={{
        left: { light: 4, system: 36, dark: 68 }[theme],
      }}
    />
  )
}

const ButtonGroup = () => {
  const { setTheme } = useTheme()

  const buildThemeTransition = (theme: 'light' | 'dark' | 'system') => {
    transitionViewIfSupported(() => {
      flushSync(() => setTheme(theme))
    })
  }

  return (
    <div className="w-fit-content inline-flex rounded-full border border-zinc-200 p-[3px] dark:border-zinc-700">
      <button
        aria-label="Switch to light theme"
        type="button"
        className='rounded-inherit inline-flex h-[32px] w-[32px] items-center justify-center border-0 text-current'
        onClick={() => {
          buildThemeTransition('light')
        }}
      >
        <Icon icon="tabler:sun" className={iconClassNames}/>
      </button>
      <button
        aria-label="Switch to system theme"
        className='rounded-inherit inline-flex h-[32px] w-[32px] items-center justify-center border-0 text-current'
        type="button"
        onClick={() => {
          buildThemeTransition('system')
        }}
      >
        <Icon icon="tabler:device-desktop" className={iconClassNames}/>
      </button>
      <button
        aria-label="Switch to dark theme"
        className='rounded-inherit inline-flex h-[32px] w-[32px] items-center justify-center border-0 text-current'
        type="button"
        onClick={() => {
          buildThemeTransition('dark')
        }}
      >
        <Icon icon="tabler:moon" className={iconClassNames}/>
      </button>
    </div>
  )
}