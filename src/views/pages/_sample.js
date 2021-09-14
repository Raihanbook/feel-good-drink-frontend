import './App.css';

function App() {
  const title = 'Welcome to the Blog!';
  const likes = 50;
  const link = "https://archiveofourown.org/";

  return (
    <div className="App">
      <div className="content">
        <h1>App content</h1>
        <p>Content is added here!</p>
        <br />
        <h1>{title}</h1>
        <p>Liked {likes} times!</p>
        <p>{"Hello, ninjas!"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Archive of Our Own</a>
      </div>
    </div>
  );
}

export default App;
