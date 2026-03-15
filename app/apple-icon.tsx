import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F172A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
        }}
      >
        <span style={{ color: '#F59E0B', fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>
          CL
        </span>
      </div>
    ),
    { ...size }
  )
}
