// Link.react.js
import React from 'react';
import asyncdemo from 'asyncdemo'

export default class AsyncDemoComponent extends React.Component {
  constructor(props) {
    super(props);

   
    this.state = {
      status: "searching",
      term: 'term',
    images: []
    };


  }
  componentDidMount() {
    this.fetchImages("Mountains");
  }

  fetchImages = async term => {
console.log('hello')
  this.setState({
    status: "searching",
    term: term,
    images: []
  });

  try {
  const images = await asyncdemo(term);

  this.setState({
    status: "done",
    images
  });
  console.log(this.state.images)
} catch (error) {
  this.setState({
    status: "error"
  });
}
};



  render() {

    return (
     <p>{this.fetchImages}</p>
    );
  }
}