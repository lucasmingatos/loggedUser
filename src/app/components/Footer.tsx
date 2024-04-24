import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const Footer = () => {

    const postCtx = useContext(PostContext);

    return(
        <footer>
            Total de posts: {postCtx?.posts.length}
        </footer>
    );
}