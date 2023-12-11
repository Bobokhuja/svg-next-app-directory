import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  if (!searchParams.has('url')) {
    throw Response.json({
      message: 'URL не указан'
    }, {
      status: 422
    })
  }
  try {
    const response = await fetch(searchParams.get('url')!)
    if (response.status === 404) {
      throw new Response('Иконка не найдена', {
        status: 404,
      })
    }
    const icon = await response.text()
    if (!icon) {
      throw new Response('Не удалось загрузить иконку', {
        status: 500,
      })
    }
    return new Response(icon)
  } catch (e) {
    return e
  }
}
