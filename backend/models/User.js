//auth
//user.js in /models
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String, // Store hashed password!
});
const User = mongoose.model('User', userSchema);
