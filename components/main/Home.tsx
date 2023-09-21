'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Combobox } from '../ui/combobox'
const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

const Home = () => {
  const [framework, setFramework] = useState<string | number>('')
  return (
    <div>
      <Input type="email" placeholder="Email" />
      <Combobox
        items={frameworks}
        value={framework}
        onChange={(value) => {
          setFramework(value)
        }}
        placeholder="Tìm kiếm"
      />
    </div>
  )
}

export default Home
