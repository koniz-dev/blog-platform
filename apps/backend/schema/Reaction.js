const reactionSchema = new mongoose.Schema({
  postId: Number,
  userId: Number,
  type: String, // e.g. "like", "love", emoji, etc.
  createdAt: { type: Date, default: Date.now },
});
const Reaction = mongoose.model('Reaction', reactionSchema);

export default Reaction;
