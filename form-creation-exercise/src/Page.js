import { render } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { format } from "date-fns";

import { BsFillCalendar2Fill, BsFillPinMapFill } from "react-icons/bs";

import BandForm from "./BandForm";
import React from "react";

function Description({ blurb }) {
  var parse = require("html-react-parser");
  return parse(blurb);
}

function Page({ band }) {
  const selectedBand = band;

  const parseDate = (dateString) => {
    var date = new Date(dateString);

    var formattedDate = format(date, "PPPP");

    return formattedDate;
  };

  return (
    <div className="form-page">
      <Container style={{ margin: 100 }}>
        <Col style={{ maxWidth: 400 }}>
          <h1>{selectedBand.name}</h1>
          <h5>
            <BsFillCalendar2Fill style={{ marginRight: 10 }} />
            {parseDate(selectedBand.date)}
          </h5>
          <h5>
            <BsFillPinMapFill style={{ marginRight: 10 }} />
            {selectedBand.location}
          </h5>
        </Col>
        <Row>
          <Col
            className="band-info-col"
            style={{ maxWidth: 400, marginRight: 50 }}
          >
            <Image
              src={selectedBand.imgUrl}
              rounded
              style={{ maxWidth: 400, padding: 50 }}
            />
            <Description blurb={selectedBand.description_blurb} />
          </Col>
          <Col className="band-form-col">
            <BandForm className="band-form" band={selectedBand} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page;
