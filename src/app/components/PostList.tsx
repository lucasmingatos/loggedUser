import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const PostList = () => {

    const postCtx = useContext(PostContext);

    return(
        <div>
            {postCtx?.posts.map(item => (
                <div key={item.id} className="border-b p-3 border-green-300">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                    <button onClick={() => postCtx.removePost(item.id)}>[ remover ]</button>
                </div>
            ))}
        </div>
    );
}