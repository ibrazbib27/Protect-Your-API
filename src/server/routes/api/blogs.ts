import * as express from 'express';

import DB from '../../db';
import {RequestHandler} from "express";

const router = express.Router();

const checkRole: RequestHandler = (req: any, res, next ) => {
    if(!req.user || req.user.role !== "guest") return res.sendStatus(401);

    else next();
};

router.get('/',
    async (req: any, res, next) => {
            try{
                let blogs = await DB.Blogs.GetBlogs();
                res.send(blogs);
            }catch (e) {
                console.log(e);
                res.sendStatus(500);
            }
    });
router.get('/:id', checkRole,
    async (req: any, res, next) => {
        let id = req.params.id;
        try{
            let blog = await DB.Blogs.GetOneBlog(id);
            res.send(blog);
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
router.put('/:id', checkRole,
    async (req: any, res, next) => {
        let id = req.params.id;
        let title: string;
        let content: string;

        try{
            let [blog]: any = await DB.Blogs.GetOneBlog(id);

            if(!req.body.title) title = blog.title;
            else title = req.body.title;

            if(!req.body.content) content = blog.content;
            else content = req.body.content;

            await DB.Blogs.EditBlog(title, content, id);
            res.sendStatus(200)
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });
router.delete('/:id', checkRole,
    async (req: any, res, next) => {
        let id = req.params.id;
        try{
            await DB.Blogs.DeleteBlog(id);
            res.sendStatus(200)
        }catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });



export default router;