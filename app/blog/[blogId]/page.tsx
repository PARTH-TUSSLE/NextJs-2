import axios from "axios";

export default async function ({
  params,
}: {
  params: {
    blogId: string;
  };
}) {
  const blogId = (await params).blogId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  const data = response.data;

  return (
    <div>
      Blog Page {blogId} <hr />
      Title - {data.title} <hr />
      Description - {data.body}
    </div>
  );
}
