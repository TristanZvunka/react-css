/* eslint-disable react/no-unescaped-entities */
function Card() {
  return (
    <div className="container">
      <img src="public\images\banana.jpg" />
      <div className="text">
      <h1> Ceci n'est pas une banane </h1>
      <h2> Ceci n'est toujours pas une banane mais en plus petit</h2>
      </div>
      <section className="buttons">
        <button> Option banane 1</button>
        <button> Option banane 2</button>
        <button> Option banane 3</button>
      </section>
    </div>
  );
}

export default Card;
