import { IUsersEntity } from "../../entities/users/users.entity.interface";
import UsersRepository  from "../../../adapters/repositories/users.repository";
import { IUseCase } from "../usecase.interface";
import { IUsersRepository } from "../../repositories/users.repositories.interface";

class ReadUserUseCase implements IUseCase{
    constructor(private _repository:    IUsersRepository){}
    async execute(data: { idUser:number}): Promise<IUsersEntity | undefined> {
        return await this._repository.getById(data.idUser)        
    }
}

export default new ReadUserUseCase(
    UsersRepository
)