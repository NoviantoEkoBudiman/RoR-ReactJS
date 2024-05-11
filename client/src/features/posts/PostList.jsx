import React, {useState, useEffect} from "react"
import { API_URL } from "../../constant"

const PostList = () => {
    const [posts, setPost] = useState([])
    const [, setLoading] = useState(true)
    const [, setError] = useState(null)

    useEffect(() => {
        async function loadPost(){
            const response = await fetch(API_URL)
            try{
                if(response.ok){
                    const json = await response.json()
                    setPost(json)
                }else{
                    throw await response.json()
                }
            } catch(e) {
                setError("There's error occured")
                console.log("Error: ", e)
            } finally {
                setLoading(false)
            }
        }
        loadPost()
    }, [])

    return(
        <div>
            {posts.map((post)=>(
                <div key={ post.id }>
                    <h2>{ post.header }</h2>
                    <p>{ post.body }</p>
                </div>
            ))}
        </div>
    )
}

export default PostList