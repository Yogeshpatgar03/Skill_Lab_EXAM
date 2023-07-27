const Home = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.yourstory.com/cs/1/159ee560ca5411eaa3a3a7a179960a6c/Food-Ordering-App-FoodPanda-1595229221308.jpg"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>

          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-burger-ingredients-with-chalkboard_23-2148235025.jpg"
              height="600px"
              class="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src="https://thumbs.dreamstime.com/z/food-flying-out-laptop-screen-green-background-40427741.jpg"
              class="d-block w-100"
              height="600px"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>OUR BRANCHES</h1>

      <div class="container" style={{ marginTop: "100px" }}>
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://www.tarangimussoorie.com/assets/img/about-us/distinctiveness.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Banglore</h5>
                <p class="card-text">
                
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://static.toiimg.com/photo/65783757.cms"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Mysur</h5>
                <p class="card-text">
                  
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/21/ed/42/b3/dead-and-deserted-on.jpg"
                class="card-img-top"
                alt="nothing"
              ></img>
              <div class="card-body">
                <h5 class="card-title">Hydrabad</h5>
                <p class="card-text">
                  
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://c8.alamy.com/comp/CWG15E/food-court-in-a-shopping-mall-in-cochin-CWG15E.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Mumbai</h5>
                <p class="card-text">
          
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
