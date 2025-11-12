import type { APIRoute } from 'astro'
import { ImageResponse } from '@vercel/og'

export function getStaticPaths() {
  return [{ params: { route: 'index' } }]
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Josh Easter'
  const subtitle = url.searchParams.get('subtitle') || 'Engineering Leader & Designer'

  // Generate the OG image
  const html = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        fontSize: 60,
        height: '100%',
        display: 'flex',
        fontWeight: 700,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#000',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              borderRadius: '20px',
              padding: '60px 80px',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)'
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 72,
                    color: 'white',
                    fontWeight: 900,
                    marginBottom: 20,
                    textAlign: 'center'
                  },
                  children: title
                }
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: 36,
                    fontWeight: 600,
                    color: '#a855f7',
                    textAlign: 'center'
                  },
                  children: subtitle
                }
              }
            ]
          }
        }
      ]
    }
  }

  return new ImageResponse(html, {
    width: 1200,
    height: 630
  })
}
