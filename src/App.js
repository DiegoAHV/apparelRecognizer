import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({apiKey: CLARIFY_KEY});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state ={
      input: '',
      imageUrl: '',
      route: 'signIn',
      isSignedIn: false,
      results: null,
    }
  }

  getFirstThreeApparels = (data) => {
    const results = [];
    for (let i = 2; i >= 0; i--) {
      results.push(data[i].name);
    }
    return results;
  }

  displayApparelResults = (data) => {
    console.log(data);
    this.setState({results: data});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value })
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true});
    } else {
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.initModel({id: Clarifai.APPAREL_MODEL,})
      .then(generalModel => {
        return generalModel.predict(this.state.imageUrl);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']
        console.log(concepts);
        this.displayApparelResults(this.getFirstThreeApparels(concepts));
      })
      .catch(err => console.log(err));
  }

  render() {
    const {isSignedIn, imageUrl, route, results} = this.state
    return (
      <div className="App">
        <Particles 
          className="particles"
          params={particlesOptions}
        />
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn} />
        { route === 'home' ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition 
              imageUrl={imageUrl}
              results={results}/>
          </div> :
          (
            route === 'signIn' ?
            <SignIn onRouteChange={this.onRouteChange}/> :
            <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;