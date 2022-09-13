import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import '../css/OneLocation.css';

const OneLocation = () => {
  const [mapsData, setMapsData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loc } = location.state;

  // Runs once when compponent renders, equivalent to ComponentDidMount
  // This will call Google Maps API
  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJA-qv_um1QYgRAhCxo0Jd_1o"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then((response) => {
        setMapsData(response.data);
      })
      .then((contents) => console.log(contents))
      .catch(() =>
        console.log("Can't access " + url + " response. Blocked by browser?")
      );
  }, [loc]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>

      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 my-car-img"
            src="assets/img/course-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>{location.name}</h3> */}
            {/* <p>{location.description}</p> */}
            {/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 my-car-img"
            src="assets/img/course-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>{location.name}</h3> */}
            {/* <p>{location.description}</p> */}
            {/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 my-car-img"
            src="assets/img/course-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>{location.name}</h3> */}
            {/* <p>{location.description}</p> */}
            {/* <p><a className="btn btn-primary" href="#" role="button">Learn More &raquo;</a></p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p>This is the One Location Page</p>
      <img src={loc.image} alt={"Photo of " + loc.name} />
      <p>{loc.name}</p>
      <p>{loc.address1}</p>
      <p>{loc.address2}</p>
      <p>{loc.phone}</p>
      <p>{loc.category}</p>
      <p>{loc.description}</p>
      <p>{console.log(mapsData)}</p>

      <section class="location-cards">
        <div class="container location-capston">
          <div class="row">
            <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="blue"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category">
                      <i class="fa-sharp fa-solid fa-user"></i>
                    </h6>
                    <h4 class="loc-title">
                      <a href="#">About Us</a>
                    </h4>
                    <p class="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et pariatur accusamus exercitationem quis est! Sapiente
                      culpa labore quasi, praesentium dolores obcaecati eaque
                      aliquid doloribus quo officia rerum quas optio dolor!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}

            <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="green"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category-h6">
                      Location <i class="fa-solid fa-location-dot"></i>
                    </h6>
                    <h4 class="loc-title">
                      <a href="#">Find Us</a>
                    </h4>
                    <p class="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam voluptatem molestias fugit quos vero labore! Sint
                      possimus omnis iusto, molestias, maxime dolor facere
                      similique ad iure odit saepe incidunt asperiores?{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}
            <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="yellow"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category">
                      HOURS OF OPERATIONS <i class="fa-solid fa-clock"></i>
                    </h6>
                    <h4 class="loc-title">
                      <a href="#">Website</a>
                    </h4>
                    <table>
                      <tr>
                        <th>Sunday</th>
                        <td>Closed</td>
                      </tr>
                      <tr>
                        <th>Monday</th>
                        <td>9am - 12pm</td>
                      </tr>
                      <tr>
                        <th>Tuesday</th>
                        <td>9am - 12pm</td>
                      </tr>
                      <tr>
                        <th>Wednesday</th>
                        <td>9am - 12pm</td>
                      </tr>
                      <tr>
                        <th>Thursday</th>
                        <td>9am - 12pm</td>
                      </tr>
                    </table>

                    <p class="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem quo repellendus magni,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}
            <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="brown"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category">
                      Contact Us <i class="fa-solid fa-address-book"></i>
                    </h6>
                    <h4 class="loc-title">
                      <a href="#">Brown Card</a>
                    </h4>
                    <p class="description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore odit nihil distinctio. Cum fuga ad at. Veritatis
                      doloremque quis perferendis inventore ex, exercitationem
                      commodi maiores doloribus explicabo hic quas id!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}
            <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="purple"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="loc-title">
                      <a href="#">Purple Card</a>
                    </h4>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia numquam a sequi, repellat iusto debitis quaerat,
                      unde nostrum saepe sunt nisi aliquam tempora
                      exercitationem dolor odit quas! Suscipit, officia sit?{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}
            {/* <div class="col-md-4 col-sm-6 content-card">
              <div class="card-big-shadow">
                <div
                  class="card-loc card-just-text"
                  data-background="color"
                  data-color="orange"
                  data-radius="none"
                >
                  <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title">
                      <a href="#">Orange Card</a>
                    </h4>
                    <p class="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur inventore ea debitis minus veritatis adipisci?
                      Esse laudantium quis, deserunt, impedit debitis neque
                      recusandae explicabo minus doloribus, pariatur iusto.
                      Nemo, mollitia.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section class="customer-reviews">
        <div class="container">
          <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h4
              class="font-cond-l fg-accent lts-md mgb-10"
              contenteditable="false"
            >
              Not Yet Convinced?
            </h4>
            <h1
              class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
              contenteditable="false"
            >
              Read Customer Reviews
            </h1>
          </div>
          <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt="image"
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Name of Customer
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Business Woman - New York
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt="image"
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Name of Customer
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Recording Artist - Los Angeles
              </small>
            </li>
            <li>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar5.png"
                class="wpx-100 img-round mgb-20"
                title=""
                alt="image"
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p class="fs-110 font-cond-l" contenteditable="false">
                " Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. "
              </p>
              <h5
                class="font-cond mgb-5 fg-text-d fs-130"
                contenteditable="false"
              >
                Name of Customer
              </h5>
              <small
                class="font-cond case-u lts-sm fs-80 fg-text-l"
                contenteditable="false"
              >
                Fund Manager - Chicago
              </small>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OneLocation;
