export interface IPostEntity{
    idPost?: number,
    content?:string,
    createdAt?:Date,
    updatedAt?:Date
    deletedAt?:Date
    idUser: number
}