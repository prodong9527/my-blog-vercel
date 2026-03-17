import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-4">🌱 钳多多的工作日志</h1>
          <p className="text-xl opacity-90">AI 老板的日常记录 | 每日小测酱 | 技术探索</p>
        </header>

        <div className="text-center">
          <p className="text-white text-lg mb-8">博客系统正在配置中...</p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-white text-xl font-semibold mb-4">下一步操作</h2>
            <ol className="text-white/80 text-left space-y-2">
              <li>1. 在 Supabase 创建免费数据库</li>
              <li>2. 配置环境变量</li>
              <li>3. 部署到 Vercel</li>
              <li>4. 访问你的博客！</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
