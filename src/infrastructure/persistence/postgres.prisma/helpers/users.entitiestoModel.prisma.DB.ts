import bcrypt from 'bcrypt';
import { IUsersEntity } from "../../../../domain/entities/users/users.entity.interface";
//brcrypt


export default function (user: IUsersEntity){
    let shufflePass = bcrypt.hashSync(user.password,10)
    const userGeneral = {
        data: {
            idUser: user.idUser,
            name: user.name,
            email: user.email,
            password: shufflePass,
            roles: user.roles  
        }       
    }

    return {
        userGeneral: userGeneral
    };
}