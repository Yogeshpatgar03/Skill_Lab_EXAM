const About = () => {
  return (
    <>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b> Food Fanda -</b> About Our Company
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            <strong>Welcome to [Food Panda], </strong>
            <p>Online food ordering is a process of ordering food from a local restaurant or food cooperative through a web page or app. Much like ordering consumer goods online, many of these allow customers to keep accounts with them in order to make frequent ordering convenient. A customer will search for a favorite restaurant, usually filtered via type of cuisine and choose from available items, and choose delivery or pick-up. Payment can be amongst others either by credit card or cash, with the restaurant returning a percentage to the online food company.</p>
            <p>
            Today, more people than ever order…show more content…
            Online Ordering System is a technique that allow customer to order their favorite food online via the internet by using a web browser that installed in their respective computer or smart phone. Implementing this system can help fast food industry to solve the problem that they face while using the traditional food ordering processes.

            </p>

            </div>
            
          </div>
          <center>
          <img src="https://media.istockphoto.com/id/1287186696/photo/food-delivery-app-order-with-phone-online-mobile-service-for-take-away-burger-and-pizza.jpg?s=612x612&w=0&k=20&c=s0g33OOVOT9nZiFat2wvo7HhRvmM5kx0CJBp1OSfbRE="></img>

          <img src="https://img.freepik.com/free-vector/safe-food-delivery-order-receive_23-2148549716.jpg"></img>

         

          <img src="https://assets-global.website-files.com/6345c20d6b42a523ecf89891/635125c1b251ea7fe7b772c5_food-deliver.jpeg"></img>
          </center>
        </div>
       
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Address</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                Lalbag, <br></br>
                market Road,<br></br>
                Manglore-575007<br></br>
              </strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Contact details</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Phone: 9019068738</strong>
              <br></br>
              <strong>Gmail: yogeshpatgar03@gmail.com</strong>
              <br></br>
              <strong>instagram: Yogesh_Patgar03</strong>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
