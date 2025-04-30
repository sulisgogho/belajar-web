function Article(props) {
  return (
    <>
      <h3 className="font-semibold text-lg">{props.title}</h3>
      <p className="mb-5">
        date : {props.date}, tags : {props.tags.join(", ")}
      </p>
    </>
  );
}

export default Article;
