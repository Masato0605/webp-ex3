function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Cats</h1>
          <p>日本大学文理学部情報科学科 Webプログラミング演習課題</p>
          <p>5421027 佐野雅仁</p>
        </div>
      </div>
    </header>
  );
}


function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute cat" />
        </figure>
      </div>
    </div>
  );
}
function Loading() {
  return <p>Loading...</p>;
}

  
  function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
      return <Loading />;
    }
     return (
       <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
         return (
            <div key={url} className="column is-3">
              <Image src={url} />
            </div>
          );
        })}
       </div>
     );
   }
  
   function Main() {
    const urls = [
      "https://cataas.com/cat?t=sq&time=167143878410024",
      "https://cataas.com/cat?t=sq&time=167143878410025",
      "https://cataas.com/cat?t=sq&time=167143878410026",
      "https://cataas.com/cat?t=sq&time=167143878410027",
      "https://cataas.com/cat?t=sq&time=167143878410023",
      "https://cataas.com/cat?t=sq&time=167143878410022",
      "https://cataas.com/cat?t=sq&time=167143878410021",
      "https://cataas.com/cat?t=sq&time=167143878410028",
      "https://cataas.com/cat?t=sq&time=167143878410029",
      "https://cataas.com/cat?t=sq&time=167143878410020",
      "https://cataas.com/cat?t=sq&time=167143878410019",
      "https://cataas.com/cat?t=sq&time=167143878410018",
    ];
     return (
       <main>
         <section className="section">
           <div className="container">
           <Gallery urls={urls} />
           </div>
           
         </section>
       </main>
     );
   }

   function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Cat images are retrieved from CATTAS</p>
          <p>
            <a href="https://cataas.com/#/">Donate to CATAAS</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;

// 
 