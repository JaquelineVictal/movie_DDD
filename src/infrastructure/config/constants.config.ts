export default {
    AUTHENTICATOR:{
        MESSAGES: {
            ERROR: {
                INCORRECT_EMAIL: `E-mail não encontrado`,
                INCORRECT_PASSWORD: `Senha incorreta`,
                AUTHORIZATION_NO: `Usuário não autorizado, verifique se está logado`,
                LOGININCORRECT_YES: `Senha ou e-mail inválidos`
            }
        }
    },
    MIDDLEWARE:{
        MESSAGES:{
            ERROR:{
                BODYFIELDS_NO: `Por favor preencher todos os campos`,
                USERSEXISTS_NO: `Usuário {req.params.iduser} não encontrado`,
                USERSREPEATED_YES: `Usuário {rId} já existe`,
                SERVIDORERROR_YES: `Erro no servidor, chame o Batman`,
                ERRORDELETED_YES: `Erro ao deletar ao post`,
                ERRORUPDATED_YES: `Erro ao atualizar o post`,
                ERRORCREATED_YES: `Erro ao criar o post`,
                ERRORGETBYID_YES: `Erro ao buscar o post por id`,
                ERRORLIST_YES: `Erro ao listar post.`,

            }
        }
    },
    RETURN:{
        MESSAGES:{
            SENDS:{
                EMAILINVALID_YES: `Email (req.body.email) não encontrado`,
                KEYANDEMAILINVALID_YES: `Senha ou e-mail inválidos.`,
                

            }
        }
    }
}