import { Link } from "react-router-dom";

function PostListItem ({post}) {

  const date = (timestamp) => {
    const d = new Date(timestamp);
    return d.toLocaleString('ru-RU');
  }

  return (
    <Link className="post-link" to={'/posts/' + post.id}>
      <div className="post">
        <div className="row">
          <div className="avatar"></div>
          <div>
            <div className="name">Имя Фамилия</div>
            <div>{date(post.created)}</div>
          </div>
        </div>
        <div className="content">{post.content}</div>
      </div>
    </Link>
  )
}

export default PostListItem;