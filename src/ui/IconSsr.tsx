'use server'
import { HTMLAttributes } from 'react'
import { IconElement } from '@/ui/IconElement'
import { fetcher } from '@/lib/fetcher'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  src: string
}

async function IconSsr({ src, ...props }: Props) {
  let icon = ''

  try {
    icon = await fetcher(src)
  } catch (error) {
    console.error(error)
  }

  if (!icon) {
    return <svg {...props}/>
  }

  return <IconElement icon={icon} {...props}/>
}

export { IconSsr }
