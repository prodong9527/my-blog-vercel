import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { id } = params
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    let query = supabase.from('posts').select('*')
    
    if (slug) {
      query = query.eq('slug', slug).single()
    } else {
      query = query.eq('id', id).single()
    }

    const { data: post, error } = await query

    if (error) throw error

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params
    const body = await request.json()
    const { title, content, excerpt, cover_image, published } = body

    const { data, error } = await supabase
      .from('posts')
      .update({ title, content, excerpt, cover_image, published })
      .eq('id', id)
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
