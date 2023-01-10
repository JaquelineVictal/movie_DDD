import { IPostEntity } from "../../../../domain/entities/posts/posts.entity.interface";

export default function (post: IPostEntity){
    const userGeneralPost = {
        idPost: post.idPost,
        content: post.content,
        idUser: post.idUser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
    }

    return {
        userGeneralPost: userGeneralPost
    };
}