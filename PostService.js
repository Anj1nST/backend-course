import Post from "./Post.js";
import FileService from "./FIleService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        const createdPost = await Post.create({ ...post, picture: fileName });
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id is not defined')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('Id is not defined')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    }

    async delete(id) {
        if (!id) {
            res.status(400).json({ message: 'Id is not defined' })
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }

    async deleteAll() {
        const post = await Post.deleteMany();
        return post;
    }
}

export default new PostService();