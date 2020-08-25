import { Query } from "../index";


const findOneByEmail = async (email: string) =>  Query(`SELECT * FROM auth_samp.users WHERE email = '${email}' LIMIT 1;`);

const findOneById = async (id: number) =>  Query(`SELECT * FROM auth_samp.users WHERE id = ${id} LIMIT 1;`);

const insert = async (user: any) =>
    Query("INSERT INTO auth_samp.users (`email`, `password`, `first_name`, `last_name`) VALUES (?, ?, ?, ?);"
    ,[user.email, user.password, user.first_name, user.last_name]);



export default {
    FindOneByEmail: findOneByEmail,
    FindOneById: findOneById,
    Insert: insert
};