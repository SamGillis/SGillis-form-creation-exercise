import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function mapTickets(ticketTypes) {
  let tmpMap = new Map();
  ticketTypes.map((ticket) =>
    tmpMap.set(ticket.type, { price: ticket.cost, amtInCart: 0 })
  );
  return tmpMap;
}

function BandForm({ band }) {
  const [ticketTotals, setTicketTotals] = useState(
    mapTickets(band.ticketTypes)
  );
  const [total, setTotal] = useState(0.0);

  const calculateTotal = () => {
    var tmpTotal = 0;
    ticketTotals.forEach((ticket) => {
      tmpTotal += ticket.price * ticket.amtInCart;
    });
    setTotal(tmpTotal / 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };

  useEffect(() => calculateTotal(), [ticketTotals]);

  const handleChange = (event) => {
    var ticketType = event.target.name;
    var value = event.target.value;
    const ticketInfo = ticketTotals.get(ticketType);
    const ticketPrice = ticketInfo.price;
    setTicketTotals(
      () =>
        new Map(
          ticketTotals.set(ticketType, {
            price: ticketPrice,
            amtInCart: value !== "" ? parseInt(value) : 0,
          })
        )
    );
  };

  return (
    <Form style={{ marginRight: 100 }} onSubmit={handleSubmit}>
      {band.ticketTypes.map((ticket) => (
        <Form.Group
          className={`ticket-input-${ticket.name}`}
          style={{ padding: 10 }}
          key={`ticket-input-${ticket.name}`}
        >
          <hr style={{ padding: 10 }}></hr>
          <Row>
            <Col style={{ maxWidth: 300 }}>
              <Form.Label>
                <h3>{ticket.name.toUpperCase()}</h3>
              </Form.Label>
              <Row>
                <Form.Text style={{ padding: 10 }}>
                  {ticket.description}
                </Form.Text>
              </Row>
              <Row>
                <Form.Text style={{ padding: 10 }}>
                  <h4>{`$${(parseInt(ticket.cost) / 100).toFixed(2)}`}</h4>
                </Form.Text>
              </Row>
            </Col>
            <Col>
              <Form.Control
                style={{ maxWidth: 80, float: "right" }}
                name={ticket.type}
                placeholder={0}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
      ))}
      <hr style={{ padding: 10 }}></hr>
      <Row>
        <Form.Text style={{ padding: 10 }}>
          <h3 style={{ display: "inline" }}>TOTAL:</h3>{" "}
          <h3 style={{ display: "inline", float: "right" }}>{`$${total.toFixed(
            2
          )}`}</h3>
        </Form.Text>
        <hr style={{ padding: 10 }}></hr>
      </Row>

      <Row style={{ padding: 10 }}>
        <Col>
          <Form.Group className="first-name">
            <Form.Control
              type="first-name"
              name="firstName"
              placeholder="First Name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="last-name">
            <Form.Control
              type="last-name"
              name="lastName"
              placeholder="Last Name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ padding: 10 }}>
        <Form.Group className="address">
          <Form.Control type="address" name="address" placeholder="Address" />
        </Form.Group>
      </Row>
      <hr style={{ padding: 10 }}></hr>
      <Form.Label>
        <h4>Payment Details</h4>
      </Form.Label>
      <Form.Group className="credit-card-number" style={{ padding: 10 }}>
        <Form.Control
          type="credit-card-number"
          name="creditCardNumber"
          placeholder="0000   0000   0000   0000"
        />
      </Form.Group>
      <Row style={{ padding: 10 }}>
        <Col>
          <Form.Group className="credit-card-exp">
            <Form.Control
              type="credit-card-exp"
              name="creditCardExp"
              placeholder="MM / YY"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="credit-card-cvv">
            <Form.Control
              type="credit-card-cvv"
              name="creditCardCvv"
              placeholder="CVV"
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Get Tickets
      </Button>
    </Form>
  );
}

export default BandForm;
