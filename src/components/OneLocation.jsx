import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from 'axios';
import '../css/OneLocation.css';

const OneLocation = () => {
	const [mapsData, setMapsData] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const { loc } = location.state;
	let placeID = "";

	//get data from Google Maps API
	const getData = async () => {
				//get Place ID
				var config1 = {
					method: 'get',
					url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + loc.name + '&inputtype=textquery&locationbias=point:39.1031,84.5120&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
					headers: { 
						'Accept': 'application/json'
					}
				};
				
				await axios(config1)
				.then(function (response) {
					let theData = response.data;
					placeID = theData.candidates[0].place_id;
				})
				.catch(function (error) {
					console.log(error);
				});
		
				console.log(placeID);
				//get Place Details
				var config2 = {
					method: 'get',
					url: 'https://cors-anywhere-ks.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeID + '&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8',
					headers: { 
						'Accept': 'application/json'
					}
				};
				
				await axios(config2)
				.then(function (response) {
					// setMapsData(response.data);
					let theData = response.data;
					setMapsData(theData.result);
				})
				.catch(function (error) {
					console.log(error);
				});
	}

	// Runs once when compponent renders, equivalent to ComponentDidMount
	// This will call Google Maps API
	useEffect(() => {
		getData();	
	}, [loc]);

	const getReviews = (reviewArr) => {
		return reviewArr.map(rvw => {
			return(
				<div>
				<p><img src={rvw.profile_photo_url} style={{maxHeight: '40px', maxWidth: '40px'}} /><a href={rvw.author_url}>{rvw.author_name}</a></p>
				<p>Rating: {rvw.rating}</p>
				<p>{rvw.relative_time_description}</p>
				<p>{rvw.text}</p>
				</div>
			)
		});
	}

	if (mapsData.length === 0) {
		return (<div>Loading...</div>)
	} else {
	return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>

      <Carousel>
			{mapsData.photos.map(photo => {
			return(
				<Carousel.Item interval={4000}>
			<img
				className="d-block w-100 my-car-img"
				src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=2560&photo_reference=" + photo.photo_reference +  "&key=AIzaSyCdU6rorFzmBl-NxqSRVJfVl7dy2nniTM8"}
				alt={loc.name}
			/>
			<Carousel.Caption>
				<h1>{loc.name}</h1>
				{/* <p>{location.description}</p> */}
			</Carousel.Caption>
		</Carousel.Item>

			)
		})}
      </Carousel>
			<button onClick={() => navigate(-1)}>Go back</button>
			{/* <img src={loc.image} alt={"Photo of " + loc.name} /> */}
			<p>Name: {loc.name}</p>
			<p>Address: {loc.address1}</p>
			<p>{loc.address2}</p>
			<p>Phone: {loc.phone}</p>
			{/* <p>Category: {loc.category}</p> */}
			<p>{loc.description}</p>
			<p><a href={mapsData.url}>View on Google Maps</a></p>
			<p>Website: <a href={mapsData.website}>{mapsData.website}</a></p>
			<p>{mapsData.opening_hours.weekday_text.map(line => {
				return (<p>{line}</p>)
			})}</p>
			<p>Average Rating: {mapsData.rating}</p>
			<p>Total Ratings: {mapsData.user_ratings_total}</p>
			<p>Reviews:</p>
			{getReviews(mapsData.reviews)}

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
	}
};

export default OneLocation;
