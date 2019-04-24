import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state  = {
      menu: "collapsed",
      list: "",
      top: "nav"
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleClick(event) {
    if (this.state.menu === "collapsed"){
      this.setState({menu:"open",list:"open"})
    }
    else {
      this.setState({menu:"collapsed",list: ""})
    }
  }
  handleScroll() {
    if (window.scrollY >= 200) {
      this.setState({top: "down"})
  }
  else {
    this.setState({top: "nav"})
  }
  }
  render (){
  return (
    <div className="App">
      <nav className={this.state.top} >
        <div className={"container-" + this.state.menu}>
          <h1>Start Bootstrap</h1>
          <button onClick={this.handleClick} className="menu">MENU</button>
          <ul  className={"links-" + this.state.list}>
            <li ><a onClick={this.handleClick} href="#services">SERVICES</a></li>
            <li ><a onClick={this.handleClick} href="#portfolio">PORTFOLIO</a></li>
            <li ><a onClick={this.handleClick} href="#welcome">ABOUT</a></li>
            <li ><a onClick={this.handleClick} href="#welcome">TEAM</a></li>
            <li ><a onClick={this.handleClick} href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
      <div className="scroll">
        <article className="welcome" id="welcome" onScroll={this.handleScroll}>
          <h3>Welcome To Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button className="more">TELL ME MORE</button>
        </article>
        <article className="services-section" id="services" >
          <h1>SERVICES</h1>
          <div className="services">
            <div className="icon">
              <div className="circle"><i className="fas fa-shopping-cart"></i></div>
              <h2>TELL ME MORE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="icon">
              <div className="circle"><i className="fas fa-laptop"></i></div>
              <h2>TELL ME MORE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="icon">
              <div className="circle"><i className="fas fa-lock"></i></div>
              <h2>TELL ME MORE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </article>
        <article className="portfolio" id="portfolio">
          <h1>Portfolio</h1>
          <h3>Some nice words about the thing</h3>
          <div className="boxes" >
            <div className="box" >
            <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg" />
              <div className="info">
                <h2>Threads</h2>
                <h4>Illustration</h4>
              </div>
            </div>
            <div className="box" >
              <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg" />
              <div className="info">
                <h2>Explore</h2>
                <h4>Graphic Design</h4>
              </div>
            </div>
            <div className="box" >
            <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg" />
              <div className="info">
                <h2>Finish</h2>
                <h4>Identity</h4>
              </div>
            </div>
            <div className="box" >
            <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg" />
              <div className="info">
                <h2>Lines</h2>
                <h4>Branding</h4>
              </div>
            </div>
            <div className="box" >
            <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg" />
              <div className="info">
                <h2>Southwest</h2>
                <h4>Website Design</h4>
              </div>
            </div>
            <div className="box" >
            <img className="photo" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg" />
              <div className="info">
                <h2>Window</h2>
                <h4>Photography</h4>
              </div>
            </div>
          
          </div>
        </article>
        <article className="contact" id="contact">
          <h3>Contact</h3>  
          <h1>Call For Help!!</h1>
        </article>
      </div>

      </div>
  );
}
}
export default App;
