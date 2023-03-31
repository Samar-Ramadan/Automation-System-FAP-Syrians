import React, { Component } from "react";
import ParticlesBg from "particles-bg";
//import Fade from "react-reveal";

class index extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
        <section id="about">
        
        </section>
  
    );
  }
}

export default index;
