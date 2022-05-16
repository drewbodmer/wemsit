import React from "react";
import { Button, Card } from "react-bootstrap";
import '../TabComponents/tabstyles.css';
import './searchTracking.css';

export function Dcgan() {
  const [dcganUrl, setDcganUrl] = React.useState(process.env.REACT_APP_API_URL + 'dcgan');

  function updateUrl() {
    setDcganUrl(process.env.REACT_APP_API_URL + 'dcgan' + '?_=' + (new Date()).getTime());
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div className="d-flex justify-content-center">
        <img style={{ width: 'auto', height: '35vh', margin: 'auto' }} src={dcganUrl + '?_=' + (new Date()).getTime()}></img>
      </div>
      <div className="d-flex justify-content-center" style={{ paddingTop: "2vh" }}>
        <Card className='search-tracking-card card-subtitle card-pretty center'>
          <Card.Body>
            <p style={{ textAlign: 'center', fontSize: '20px' }}>
              Above is an image generated by a Deep Convolutional Generative
              Adversarial Network (DCGAN) trained on the MNIST-fashion dataset to create
              (somewhat) realistic images of clothing. Each one of these images is generated
              by running a heroku-hosted model inference. Try hitting the button to see more examples.
              The image may take a few seconds to load.
            </p>
          </Card.Body>
          <div style={{ margin: 'auto', paddingBottom: "10px" }}>
            <Button variant="dark" style={{ margin: 'auto' }} onClick={updateUrl}>
              Regenerate Image
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}