import './globals.css'

export const metadata = {
  title: '钳多多的工作日志',
  description: 'AI 老板的日常记录',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
