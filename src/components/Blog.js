import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div
            style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center"
            }

            }
        >
            <ul class="list-unstyled">
  <li class="media">
    <img style={{marginTop: '25px'}} class="mr-3" src={require('./images/flowers.jfif').default} height={ 150} width={ 100} alt="Generic placeholder image"/>
    <div class="media-body" style={{fontFamily: 'Courier New'}}>
      <h3 style={{fontWeight: "bold"}} className = "m-3 d-flex justify-content-center">List-based media object</h3>
      <h5 className = "m-3 d-flex justify-content-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</h5>
      <p className="forgot-password text-right">
                    <a className="text-success" href="#">read more...</a>
                </p>
    </div>
  </li>
  <li class="media my-4">
    <img style={{marginTop: '25px'}} class="mr-3" src={require('./images/flowers.jfif').default} height={ 150} width={ 100} alt="Generic placeholder image"/>
    <div class="media-body" style={{fontFamily: 'Courier New'}}>
      <h3 style={{fontWeight: "bold"}} className = "m-3 d-flex justify-content-center">List-based media object</h3>
      <h5 className = "m-3 d-flex justify-content-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</h5>
      <p className="forgot-password text-right">
                    <a className="text-success" href="#">read more...</a>
                </p>
    </div>
  </li>
  <li class="media" style={{fontFamily: 'Courier New'}}>
    <img style={{marginTop: '25px'}} class="mr-3" src={require('./images/flowers.jfif').default} height={ 150} width={ 100} alt="Generic placeholder image"/>
    <div class="media-body">
      <h3 style={{fontWeight: "bold"}} className = "m-3 d-flex justify-content-center">List-based media object</h3>
      <h5 className = "m-3 d-flex justify-content-center">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</h5>
      <p className="forgot-password text-right">
                    <a className="text-success" href="#">read more...</a>
                </p>
    </div>
  </li>
</ul>
        </div>
        );
    }
}

export default Blog;