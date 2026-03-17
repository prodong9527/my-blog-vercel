# 钳多多博客系统 - Vercel 部署指南

## 技术栈

- 🚀 **前端**: Next.js 14 (App Router)
- 🗄️ **数据库**: Supabase (免费 PostgreSQL)
- 📦 **托管**: Vercel (免费)

---

## 第一步：创建 Supabase 数据库

### 1. 注册 Supabase
访问 https://supabase.com 注册账号

### 2. 创建新项目
- 点击 "New Project"
- 填写项目信息：
  - **Name**: `my-blog`
  - **Database Password**: 设置密码（记住它）
  - **Region**: 选择离你近的区域（如 `Northeast Asia`）

### 3. 获取配置信息
项目创建完成后，在 Settings 中找到：
- **Project URL**: `https://xxxxx.supabase.co`
- **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 4. 初始化数据库
1. 在 Supabase 控制台点击 "SQL Editor"
2. 复制 `supabase-init.sql` 文件内容
3. 点击 "Run" 执行

---

## 第二步：部署到 Vercel

### 方式一：GitHub 部署（推荐）

1. **推送代码到 GitHub**
```bash
cd my-blog-vercel
git init
git add .
git commit -m "Initial blog commit"
git branch -M main
git remote add origin https://github.com/你的用户名/my-blog-vercel.git
git push -u origin main
```

2. **在 Vercel 部署**
- 访问 https://vercel.com
- 使用 GitHub 登录
- 点击 "New Project"
- 导入 `my-blog-vercel` 仓库
- 在 "Environment Variables" 中添加：
  - `NEXT_PUBLIC_SUPABASE_URL`: 你的 Supabase Project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: 你的 anon public key
- 点击 "Deploy"

### 方式二：Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
cd my-blog-vercel
vercel

# 按提示操作
# 添加环境变量
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# 重新部署
vercel --prod
```

---

## 第三步：配置环境变量

在 Vercel 项目 Settings 中添加：

| 变量名 | 值 |
|--------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `你的 anon key` |

---

## 第四步：访问你的博客！

部署完成后，Vercel 会给你一个域名，例如：
`https://my-blog-vercel.vercel.app`

打开浏览器访问即可！

---

## 第五步：自定义域名（可选）

1. 在 Vercel 项目 Settings 中选择 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

---

## 管理文章

### 方式一：直接操作数据库
在 Supabase Dashboard → Table Editor → posts 中管理文章

### 方式二：通过 API
```bash
# 获取所有文章
curl https://你的域名/api/posts

# 创建文章
curl -X POST https://你的域名/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"新文章","content":"文章内容"}'
```

---

## 项目结构

```
my-blog-vercel/
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.js        # 文章列表 API
│   │       └── [id]/
│   │           └── route.js    # 单篇文章 API
│   ├── globals.css
│   ├── layout.js
│   └── page.js                  # 首页
├── lib/
│   └── supabase.js              # Supabase 客户端
├── supabase-init.sql            # 数据库初始化
├── next.config.js
└── package.json
```

---

## 常见问题

### Q: 部署后显示空白
A: 检查 Supabase 环境变量是否正确配置

### Q: 数据库连接失败
A: 确保 Supabase 的 Project URL 和 Anon Key 正确

### Q: 文章不显示
A: 确保文章已发布（published = true）

---

## 下一步扩展

- [ ] 添加用户认证（NextAuth）
- [ ] 添加文章分类/标签
- [ ] 添加评论功能
- [ ] 添加搜索功能
- [ ] 添加图片上传

---

**有任何问题随时问我！** 🌱💼
