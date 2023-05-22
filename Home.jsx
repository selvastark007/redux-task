import React, { useEffect, useState } from "react";
// import Axios from "axios";

// tooltip
// import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Bootstarp
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Router Dom
import { Link } from "react-router-dom";

// Data
import { services, settings2 } from "./../../components/data/DataHome";

// slik corousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// sass
import "./Home.scss";

// icons
import { MdLocationOn } from "react-icons/md";

// import { useDispatch } from "react-redux";
// import { getInvoicesList } from "./../../store/amenities";
import {
  getPropertiesForSaleLists,
  getPropertiesLists,
} from "./../../store/properties";
import { Divider, Typography } from "@mui/material";
import SliderItem from "./SliderItem";

// redux
import {useDispatch} from 'react-redux'
import {setFeatures,setPropSale} from '../../Redux/Store'
import { useSelector } from "react-redux";

// import InfiniteScroll from "react-infinite-scroll-component";

const imgURL = process.env.REACT_APP_IMAGE_URL;

const Home = () => {
  // const [propertyType, setPropertyType] = React.useState('');
  // const handleChange = (event) => {
  //   setPropertyType(event.target.value);
  // }

  // const [type, setType] = React.useState('');
  // const handleChange2 = (event) => {
  //   setType(event.target.value);
  // }

  // const [location, setLocation] = React.useState('');
  // const handleChange3 = (event) => {
  //   setLocation(event.target.value);
  // }

  const features = useSelector((state) => state.features);
  const propSale = useSelector((state) => state.propSale);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertiesLists()).then((res) => {
      dispatch(setFeatures(res[0].data));
    });
    dispatch(getPropertiesForSaleLists()).then((res) => {
      dispatch(setPropSale(res[0].data));
    });
  }, [dispatch]);


  // // json place-holder api
  // const [features, setFeatures] = useState([]);
  // const [propSale, setPropSale] = useState([]);

  // const params = {
  //   isFeatured: "false",
  // };
  // const [photos, setPhotos] = useState([]);
  //  const slicePhotos = photos.slice(4,10);

  // useEffect(() => {
  //   dispatch(getPropertiesLists()).then((res) => {
  //     setFeatures(res[0].data);
  //   });
  //   dispatch(getPropertiesForSaleLists(params)).then((res) => {
  //     setPropSale(res[0].data);
  //   });
  // }, []);

  return (
    <>
      <div className="home">
        {/* Banner section start */}
        <div className="banner">
          <Container className="text-center">
            <h5>Point of Contact for All</h5>
            <h1>Premium Building in Chennai</h1>
            <form className="form">
              <Form.Select aria-label="Default select example">
                <option>Property type</option>
                {features.map((post) => {
                  return (
                    <option key={post.id} value={post.name}>
                      {post.name}
                    </option>
                  );
                })}
              </Form.Select>

              <Form.Select aria-label="Default select example">
                <option>Type</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </Form.Select>

              <Form.Select aria-label="Default select example">
                <option>Loaction</option>
                {features.map((post) => {
                  return (
                    <option key={post.id} value={post.name}>
                      {post.name}
                    </option>
                  );
                })}
              </Form.Select>

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </Container>
        </div>
        {/* Banner section end */}

        {/* Section 2 start */}
        <div className="section2-wrapper">
          <Container className="d-flex section2">
            <div className="section2-content">
              <p>The best network of</p>
              <p>
                Commercial <br /> Property in Chennai
              </p>
            </div>
            <div className="section2-content">
              <p>
                121+ options to <br /> choose from <br /> in Chennai
              </p>
            </div>
            <div className="section2-content">
              <p>
                1Lakh+ <br /> Customers <br /> Connected <br /> Monthly
              </p>
            </div>
            <div className="section2-content">
              <p>
                Free LIst for <br /> All Properties
              </p>
            </div>
          </Container>
        </div>
        {/* Section 2 start */}

        {/* Service section start */}
        <div className="service-wrapper">
          <Container>
            <div className="service-head text-center">
              <h2>Service We Offer </h2>{" "}
              <p>based on the localities you have explored in Chennai South </p>
            </div>
            <div className="service-img d-grid">
              {services.map((service) => {
                return (
                  <div className="service-img-box text-center" key={service.id}>
                    <div className="service-img">
                      <img src={service.imgSrc} alt={service.alt} />
                    </div>
                    <div className="service-content">
                      <p>{service.serviceType}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
        {/* Service section End */}

        {/* sale property section start */}
        {features && (
          <div className="saleProperty-wrapper">
            <Container>
              <Divider>
                <Typography variant="h4" gutterBottom>
                  Features
                </Typography>
              </Divider>
              {/* <h2 className='py-3'> Properties for Sale</h2> */}
              <SliderItem sliderList={features} />
            </Container>
          </div>
        )}

        {/* sale property section start */}
        {propSale && (
          <div className="saleProperty-wrapper">
            <Container>
              <Divider>
                <Typography variant="h4" gutterBottom>
                  Property For Sale
                </Typography>
              </Divider>
              {/* <h2 className='py-3'> Properties for Sale</h2> */}
              <SliderItem sliderList={propSale} />
              <div
                id="parentScrollDiv"
                style={{ height: 400, overflow: "auto" }}
              >
                {/* <InfiniteScroll
                  dataLength={dataSource.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  // height={400}
                  loader={<p>Loading...</p>}
                  endMessage={<p>You are all set!</p>}
                  scrollableTarget="parentScrollDiv"
                >
                  {dataSource.map((item, index) => {
                    return (
                      <div style={style} key={index}>
                        This is a div #{index + 1} inside InfiniteScroll
                      </div>
                    );
                  })}
                </InfiniteScroll> */}
              </div>
            </Container>
          </div>
        )}

        {/* sale property section end */}
      </div>
    </>
  );
};

export default Home;
