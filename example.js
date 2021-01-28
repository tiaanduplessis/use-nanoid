import React from 'react'

import { useNanoid } from 'use-nanoid'

export default function App () {
  const id = useNanoid()
  const otherId = useNanoid(10)
  const yeahId = useNanoid('1000')

  return (
    <div>
      <h1>{id}</h1>
      <h2>{otherId}</h2>
      <h3>{yeahId}</h3>
    </div>
  )
}
