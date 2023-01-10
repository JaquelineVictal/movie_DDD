import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository  from "../../../adapters/repositories/users.repository";
import { IUsersRepository } from "../../repositories/users.repositories.interface";
import { IUseCase } from "../usecase.interface";

class updateUserUsecase implements IUseCase{
    constructor(private _repository: IUsersRepository){}
    async execute(data: IUsersEntity): Promise<IUsersEntity | undefined> {
         console.log(data)  
         return await this._repository.updateById(data.idUser, data)               
    }
}



export default new updateUserUsecase(
    UsersRepository
)