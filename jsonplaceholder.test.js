const axios = require("axios").default;
test("Get all posts [/posts] and verify number", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);
  //const responseBody = response.data;
});
