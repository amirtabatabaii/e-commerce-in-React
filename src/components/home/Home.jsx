import React, { Component } from "react";
import mainImage from "../../img/main.jpg";
import AOS from "aos";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className='site-blocks-cover overlay'
          style={{ backgroundImage: `url(${mainImage})` }}
          data-aos='fade'
          data-stellar-background-ratio='0.5'>
          <div className='container'>
            <div className='row align-items-center justify-content-center'>
              <div
                className='col-md-12'
                data-aos='fade-up'
                data-aos-delay='400'>
                <div className='row mb-4'>
                  <div className='col-md-7'>
                    <h1>Shop With Us</h1>
                    <p className='mb-5 lead'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa quae rem in magni magnam soluta veritatis nostrum
                      aspernatur non. Voluptas tenetur maiores quod ullam
                      voluptatem obcaecati rem, illo provident a!
                    </p>
                    <div>
                      <Link
                        to='/product-list'
                        className='btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block'>
                        Products
                      </Link>
                      <Link
                        to='login'
                        className='btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block'>
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
