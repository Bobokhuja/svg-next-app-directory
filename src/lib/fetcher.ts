export async function fetcher(src: string) {
  if (src.startsWith('/')) {
    src = process.env.NEXT_PUBLIC_APP_ORIGIN + src
  }
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_ORIGIN}/getIcon?url=${src}`)
  if (response.status !== 200) {
    throw new Error(await response.text())
  }
  return response.text()
}
