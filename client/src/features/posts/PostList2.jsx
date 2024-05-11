import React, { useState, useEffect } from 'react'
import {API_URL} from '../../constant'

const PostList = () =>{
    const [posts, setPost] = useState([])
    const [, setLoading] = useState(true)
    const [, setError] = useState(null)
    
    useEffect(() => {
        async function loadPost(){
            try{
                const response = await fetch(API_URL)
                if(response.ok){
                    const json = await response.json()
                    setPost(json)
                }else{
                    throw response
                }
            } catch(e) {
                setError("There's an error")
                console.log("An error occured: ", e)
            } finally {
                setLoading(false)
            }
        }
        loadPost()
    }, [])

    return(
        <div>
            {
            posts.map((post)=>(
                <div key={post.id} className='post-container'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList