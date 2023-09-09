import React from 'react';
import Card from 'react-bootstrap/Card';

function Component1() {
  const cardStyle = {
    width: '20rem',
    marginBottom: '20px', // Add margin at the bottom of each card
  };

  return (
    <div> 
    <h2 style={{ padding: '30px' }}>Top 5 Game Characters</h2>
    <div className="row">
      <div className="col-md-4">
        <Card style={cardStyle}>
          <div style={{ paddingBottom: '100%', position: 'relative' }}>
            <Card.Img
              variant="top"
              src="/Kratos.jpg"
              alt="Dad of Boy"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>Kratos</Card.Title>
            <Card.Text>
              "Dad of Boy"<br />
              My forehead can't fit
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={cardStyle}>
          <div style={{ paddingBottom: '100%', position: 'relative' }}>
            <Card.Img
              variant="top"
              src="/Cloud.jpg"
              alt="Profile"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>Cloud Strife</Card.Title>
            <Card.Text>
              "Never had a date, Why do you ask?"
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={cardStyle}>
          <div style={{ paddingBottom: '100%', position: 'relative' }}>
            <Card.Img
              variant="top"
              src="/Tifa.jpg"
              alt="Profile"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>Tifa Lockhart</Card.Title>
            <Card.Text>
              "What will it take cloud?!"
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={cardStyle}>
          <div style={{ paddingBottom: '100%', position: 'relative' }}>
            <Card.Img
              variant="top"
              src="/Dante.jpg"
              alt="Profile"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>Dante</Card.Title>
            <Card.Text>
              " If I can cut it its an enemy"
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card style={cardStyle}>
          <div style={{ paddingBottom: '100%', position: 'relative' }}>
            <Card.Img
              variant="top"
              src="/Leon.jpg"
              alt="Profile"
              style={{
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>Leon S. Kennedy</Card.Title>
            <Card.Text>
              Daddy?!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default Component1;
