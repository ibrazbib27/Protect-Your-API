import { Query } from "../index";


const getBlogs = async () =>  Query(`SELECT * FROM auth_samp.Blogs;`);

const getOneBlog = async (id: number) =>  Query(`SELECT * FROM auth_samp.Blogs WHERE id = ${id};`);

const postBlog = async (title: string, content: string) =>
    Query('INSERT INTO auth_samp.Blogs (`title`, `content`) VALUES(?, ?);',
        [title, content]);

const editBlog = async (title: string, content: string, id: number) =>
    Query('UPDATE auth_samp.Blogs SET `title` = ?, `content` = ? WHERE `id` = ?;',
          [title, content, id]);

const deleteBlog = async (id: number) =>  Query(`DELETE FROM auth_samp.Blogs WHERE id = ${id};`);

export default {
  GetBlogs: getBlogs,
  GetOneBlog: getOneBlog,
  PostBlog: postBlog,
  EditBlog: editBlog,
  DeleteBlog: deleteBlog
};
