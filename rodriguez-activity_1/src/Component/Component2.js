import React from 'react';
import Card from 'react-bootstrap/Card';

function Component2() {
    const cardStyle = {
        width: '20rem',
        marginBottom: '20px', // Add margin at the bottom of each card
      };
    
      return (
        <div> 
        <h2 style={{ padding: '30px' }}>Top 5 Actors</h2>
        <div className="row">
          <div className="col-md-4">
            <Card style={cardStyle}>
              <div style={{ paddingBottom: '100%', position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src="/Depp.jpg"
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
                <Card.Title>Johnny Depp</Card.Title>
                <Card.Text>
"But why's the RUM GONE?"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <div style={{ paddingBottom: '100%', position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src="/Stone.jpg"
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
                <Card.Title>Emma Stone</Card.Title>
                <Card.Text>
                  "Gwen "Alive" Stacy"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <div style={{ paddingBottom: '100%', position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src="/Watson.jpg"
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
                <Card.Title>Emma Watson</Card.Title>
                <Card.Text>
                  "Wingardium Leviosa"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <div style={{ paddingBottom: '100%', position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src="/Jack.jpg"
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
                <Card.Title>Jack</Card.Title>
                <Card.Text>
                  " I dont Play Video Games no More"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={cardStyle}>
              <div style={{ paddingBottom: '100%', position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src="/Ryan.jpg"
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
                <Card.Title>Ryan</Card.Title>
                <Card.Text>
                  "Deadpool"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          </div>
        </div>
      );
    }
    
export default Component2;