import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

// 获取所有文章
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit') || 10
    
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(parseInt(limit))

    if (error) throw error

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// 创建新文章
export async function POST(request) {
  try {
    const body = await request.json()
    const { title, content, slug, excerpt, cover_image } = body

    const { data, error } = await supabase
      .from('posts')
      .insert([{ 
        title, 
        content, 
        slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
        excerpt: excerpt || content.slice(0, 150),
        cover_image 
      }])
      .select()

    if (error) throw error

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
