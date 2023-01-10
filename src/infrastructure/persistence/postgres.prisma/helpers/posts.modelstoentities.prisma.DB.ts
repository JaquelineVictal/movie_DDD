import { IPostEntity } from "../../../../domain/entities/posts/posts.entity.interface";

export default function (post:any): IPostEntity | undefined {
    if(!post)
    return

    let userGeneralPost: IPostEntity = {
        idPost: post.idPost,
        content: post.content,
        idUser: post.idUser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
     
    }

    if(post.logado){
        (userGeneralPost as IPostEntity).idPost = post.idPost;
        (userGeneralPost as IPostEntity).content = post.content
        (userGeneralPost as IPostEntity).idUser = post.idUser;
        (userGeneralPost as IPostEntity).createdAt = post.createdAt;
        (userGeneralPost as IPostEntity).updatedAt = post.updatedAt;
    }

    return (userGeneralPost as IPostEntity);
}