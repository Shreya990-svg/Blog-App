import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const response = await service.getPosts([])
                if (response) {
                    setPosts(response.documents)
                }
            } catch (error) {
                console.error("Error fetching posts:", error)
                setError("Failed to fetch posts")
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <p>Loading posts...</p>
                </Container>
            </div>
        )
    }

    if (error) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <p className="text-red-500">{error}</p>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts