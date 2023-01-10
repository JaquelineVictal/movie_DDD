import bcrypt from "bcrypt";
import { IUsersEntity } from "../../../../domain/entities/users/users.entity.interface";

export default function (user:any): IUsersEntity | undefined {
    if(!user)
    return

    let shufflePass = bcrypt.hashSync(user.password, 10) 

    let userGeneral: IUsersEntity = {
        idUser: user.idUser,
        name: user.name,
        email: user.email,
        password: shufflePass,
        roles: user.roles
    }
//
    if(user.logado){
        (userGeneral as IUsersEntity).idUser = user.idUser;
        (userGeneral as IUsersEntity).name = user.name
        (userGeneral as IUsersEntity).email = user.email;
        (userGeneral as IUsersEntity).password = user.password;
        (userGeneral as IUsersEntity).roles = user.roles;       
    }

    return (userGeneral as IUsersEntity);
}