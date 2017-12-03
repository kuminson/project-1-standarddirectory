import React, { Component } from 'react';

class Directory extends Component{
  render(){
    return(
      <div>
        this is directory {this.props.match.params.dirId}
      </div>
    )
  }
}

export default Directory;