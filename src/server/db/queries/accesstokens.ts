import { Query } from "../index";


const findOne = async (id: number, token: string) =>
    Query(`SELECT * FROM auth_samp.accesstokens WHERE id = ${id} AND token = '${token}';`);

const insert = async (userid: number) => Query(`INSERT INTO auth_samp.accesstokens (userid) VALUES (${userid});`);

const last = async () => Query(`SELECT id FROM auth_samp.accesstokens ORDER BY id DESC LIMIT 1;`);

const update = async (id: number, token: string) =>
    Query(`UPDATE auth_samp.accesstokens SET token = '${token}' WHERE id = ${id};`);


export default {
    FindOne: findOne,
    Insert: insert,
    Update: update,
    Last: last
};