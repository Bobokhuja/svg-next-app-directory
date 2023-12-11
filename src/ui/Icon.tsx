'use client'
import { HTMLAttributes, useEffect, useState } from 'react'
import { IconElement } from '@/ui/IconElement'
import { fetcher } from '@/lib/fetcher'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  src: string
}

function Icon({ src, ...props }: Props) {
  const [icon, setIcon] = useState<string>('')

  useEffect(() => {
    fetcher(src)
      .then(icon => {
        setIcon(icon)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [src])

  if (!icon) {
    return <svg {...props}/>
  }

  return <IconElement icon={icon} {...props}/>
}

export { Icon }
