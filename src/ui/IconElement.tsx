import HTMLReactParser from 'html-react-parser'

interface Props {
  icon: string
}

function IconElement({ icon }: Props) {
  return HTMLReactParser(icon)
}

export { IconElement }
