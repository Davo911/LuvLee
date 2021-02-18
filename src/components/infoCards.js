import React from "react"

import Card from "react-bootstrap/Card"

const InfoCards = props => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg m-3" data-aos="fade-right">
          <Card className="p-3">
            <Card.Body>
              <Card.Title>
                {props.first[0]}
                <h2>{props.first[1]}</h2>
              </Card.Title>
              <Card.Text>{props.first[2]}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg m-3" data-aos="fade-up">
          <Card className="p-3">
            <Card.Body>
              <Card.Title>
                {props.second[0]}
                <h2>{props.second[1]}</h2>
              </Card.Title>
              <Card.Text>{props.second[2]}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg m-3" data-aos="fade-left">
          <Card className="p-3">
            <Card.Body>
              <Card.Title>
                {props.third[0]}
                <h2>{props.third[1]}</h2>
              </Card.Title>
              <Card.Text>{props.third[2]}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default InfoCards
