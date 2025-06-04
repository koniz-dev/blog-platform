import express from 'express';
import { PrismaClient } from '@prisma/client';
// import Reaction from './schema/Reaction';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// Example route: get all posts
app.get('/api/posts', async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { author: true, tags: true },
  });
  res.json(posts);
});

// Example route: create a new post (admin)
app.post('/api/posts', async (req, res) => {
  const { title, content, authorId } = req.body;
  const post = await prisma.post.create({
    data: { title, content, authorId },
  });
  res.json(post);
});

// // Add a reaction
// app.post('/api/posts/:id/reactions', async (req, res) => {
//   const { type, userId } = req.body;
//   const reaction = await Reaction.create({
//     postId: Number(req.params.id),
//     userId,
//     type,
//   });
//   res.json(reaction);
// });
// // Get all reactions for a post
// app.get('/api/posts/:id/reactions', async (req, res) => {
//   const reactions = await Reaction.find({ postId: Number(req.params.id) });
//   res.json(reactions);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
