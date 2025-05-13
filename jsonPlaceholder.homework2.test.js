const {
  getPosts,
  getPostById,
  getUserById,
  createPost,
  createComment,
} = require("./controllers/jsonPlaceholderController");

describe("JSONPlaceholder API tests", () => {
  test("GET /posts should return an array of posts", async () => {
    const response = await getPosts();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test("GET /posts/1 should return a single post with ID 1", async () => {
    const response = await getPostById(1);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.title).toBe("string");
  });

  test("GET /users/1 should return a user with ID 1", async () => {
    const response = await getUserById(1);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.name).toBe("string");
  });

  test("POST /posts should create a new post", async () => {
    const newPost = {
      title: "Test title",
      body: "Test body content",
      userId: 1,
    };
    const response = await createPost(newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test("POST /comments should create a new comment", async () => {
    const newComment = {
      name: "Test comment",
      email: "test@example.com",
      body: "This is a comment",
      postId: 1,
    };
    const response = await createComment(newComment);
    expect(response.status).toBe(201);
    expect(response.data.email).toBe(newComment.email);
    expect(response.data.postId).toBe(newComment.postId);
  });
});
