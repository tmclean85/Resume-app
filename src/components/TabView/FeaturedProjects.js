import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import Masonry from 'react-masonry-component';
import './styles.css';
import inhabitent from '../../assets/inhabitent-new.png';
import resume from '../../assets/resume-screenshot.png';
import instanews from '../../assets/instanews-screenshot.png';
import unya from '../../assets/unya-screenshot.png';
import pong from '../../assets/pong.png';
import r10screenshot from '../../assets/r10-screenshot.png';
import vendomatic from '../../assets/vendomatic.png';

class FeaturedProjects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pong: false,
      inhabitent: false,
      r10: false,
      vendOMatic: false,
      resume: false,
      instanews: false,
      unya: false,
    };
  }
  
  pong = () => {
    if(this.state.pong){
      this.setState({pong: false})
    } else {
      this.setState({pong: true})
    }
  }

  vendOMatic = () => {
    if(this.state.vendOMatic){
      this.setState({vendOMatic: false})
    } else {
      this.setState({vendOMatic: true})
    }
  }

  r10 = () => {
    if(this.state.r10){
      this.setState({r10: false})
    } else {
      this.setState({r10: true})
    }
  }

  inhabitent = () => {
    if(this.state.inhabitent){
      this.setState({inhabitent: false})
    } else {
      this.setState({inhabitent: true})
    }
  }

  resume = () => {
    if(this.state.resume){
      this.setState({resume: false})
    } else {
      this.setState({resume: true})
    }
  }

  instanews = () => {
    if(this.state.instanews){
      this.setState({instanews: false})
    } else {
      this.setState({instanews: true})
    }
  }

  unya = () => {
    if(this.state.unya){
      this.setState({unya: false})
    } else {
      this.setState({unya: true})
    }
  }

  render() {
    return (
      <div className="featured-component-wrapper">
      <Masonry>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={pong} />
            <div className="featured-component-item-info-wrapper" onClick={this.pong}>
              <h3>Genghis Pong</h3>
              <p>An exercise in object-oriented programming</p>
              <Ionicon className="expander-arrow" icon={(this.state.pong) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.pong) ? "featured-component-item-expander" : "hider" }>
            <p>This was a great introduction to object-oriented programming principles.
              I had to think about things like ball vector and velocity, paddle movement, 
              and collision reaction. I also implemented some fun features like an extra ball, 
              variable ball velocity, and a satisfying victory game-state to help you savor your win.</p>
            <a className="featured-item-link" href="https://github.com/tmclean85/pong"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={vendomatic} />
            <div className="featured-component-item-info-wrapper" onClick={this.vendOMatic}>
              <h3>Vend-O-Matic</h3>
              <p>An exercise in test-driven development using Jest</p>
              <Ionicon className="expander-arrow" icon={(this.state.vendOMatic) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.vendOMatic) ? "featured-component-item-expander" : "hider" }>
            <p>A vending machine program written in Javascript and tested using Jest. The machine audits and refills stock, tracks 
               outgoing inventory, and dispenses change based on cost of item and coins provided.</p>
            <a className="featured-item-link" href="https://github.com/tmclean85/Vend-O-Matic"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>    

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={inhabitent} />
            <div className="featured-component-item-info-wrapper" onClick={this.inhabitent}>
              <h3>Inhabitent</h3>
              <p>A custom Wordpress theme for a fictional camping supplier</p>
              <Ionicon className="expander-arrow" icon={(this.state.inhabitent) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.inhabitent) ? "featured-component-item-expander" : "hider" }>
            <p>This project was a fantastic first foray into the world of Wordpress development. I gained a familiarity with PHP, 
              structuring a Wordpress theme, and using Wordpress's onboard methods. This work gave me a great knowledge base for the 
              custom themes I've built since and will hopefully go on to build.</p>
            <a className="featured-item-link" href="https://github.com/tmclean85/Inhabitent"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={r10screenshot} />
            <div className="featured-component-item-info-wrapper" onClick={this.r10}>
              <h3>R10</h3>
              <p>An iOS/Android companion app for a fictional tech conference</p>
              <Ionicon className="expander-arrow" icon={(this.state.r10) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.r10) ? "featured-component-item-expander" : "hider" }>
            <p>My introduction to native app development using React Native and Redux. The user can browse available conferences 
              and speakers, add and remove specific talks from their favourites, and even use the map scene to find the conference!</p>
            <a className="featured-item-link" href="https://github.com/tmclean85/R10"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={resume} />
            <div className="featured-component-item-info-wrapper" onClick={this.resume}>
              <h3>Personal web app</h3>
              <p>The React/Redux web app you're using right now, actually!</p>
              <Ionicon className="expander-arrow" icon={(this.state.resume) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.resume) ? "featured-component-item-expander" : "hider" }>
            <p>I created this web app using React, with Redux to manage state here and there. The main projects 
              section is populated using the Github API, so it shows all of my personal repos. 
            </p>
            <a className="featured-item-link" href="https://github.com/tmclean85/R10"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={instanews} />
            <div className="featured-component-item-info-wrapper" onClick={this.instanews}>
              <h3>InstaNews</h3>
              <p>Quickly and easily check the top stories in your favourite news categories!</p>
              <Ionicon className="expander-arrow" icon={(this.state.instanews) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.instanews) ? "featured-component-item-expander" : "hider" }>
            <p>InstaNews makes an AJAX request to the New York Times API and returns the top news stories in
              any of the user-selected categories. Happy reading!
            </p>
            <a className="featured-item-link" href="https://github.com/tmclean85/Instanews"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

        <div className="featured-component-item">
          <div className="featured-component-item-image-wrapper">
            <img className="featured-component-item-image" src={unya} />
            <div className="featured-component-item-info-wrapper" onClick={this.unya}>
              <h3>UNYA</h3>
              <p>A custom Wordpress theme for Vancouver-based Urban Native Youth Association</p>
              <Ionicon className="expander-arrow" icon={(this.state.unya) ? "ion-arrow-up-b" : "ion-arrow-down-b" } fontSize="30px" color="white"></Ionicon>
            </div>
          </div>
          <div className={(this.state.unya) ? "featured-component-item-expander" : "hider" }>
            <p>UNYA provides fantastic and much-needed resources for native youth in Vancouver.
              I was lucky enough to have the opportunity to help build them a highly customizable Wordpress theme to
              assist in the good work they're doing (deployment pending). This was my first professional venture as 
              a developer.
            </p>
            <a className="featured-item-link" href="https://github.com/redacademy/unya-spring-2017"><Ionicon icon="ion-social-github" fontSize="30px" color="black"></Ionicon></a>
          </div>
        </div>

      </Masonry>
      </div>
    );
  }
}

export default FeaturedProjects;
