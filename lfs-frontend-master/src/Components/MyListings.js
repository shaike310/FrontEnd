import React, { useEffect, useState } from "react";
import { setConstraint } from "../constraints";
import Navbar from "../Components/Navbar";
import "../css/item_card.css";
import '../css/mylisting.css'
import Axios from "axios";
import { Card, Col, Container, Row, Badge } from "react-bootstrap";

export default function Feed() {

  setConstraint(true);

  const [item, setitem] = useState("")

  const [urlSimilar1, setUrlSimilar1] = useState();
  const [urlSimilar2, setUrlSimilar2] = useState();
  const [urlSimilar3, setUrlSimilar3] = useState();
  const [urlSimilar4, setUrlSimilar4] = useState();
  const [urlSimilar5, setUrlSimilar5] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 1 similar
      fetch("/similarImage1").then(
        data => {
          setUrlSimilar1(data.url)
          console.log("i am data", data.url);
        }
      )

      // 2 similar
      fetch("/similarImage2").then(
        data => {
          setUrlSimilar2(data.url)
          console.log("i am data", data.url);
        }
      )

      // 3 similar
      fetch("/similarImage3").then(
        data => {
          setUrlSimilar3(data.url)
          console.log("i am data", data.url);
        }
      )

      // 4 similar
      fetch("/similarImage4").then(
        data => {
          setUrlSimilar4(data.url)
          console.log("i am data", data.url);
        }
      )

      // 5 similar
      fetch("/similarImage5").then(
        data => {
          setUrlSimilar5(data.url)
          console.log("i am data", data.url);
        }
      )
    }, 8000)


    let items = [];
    items.push(
      <Col key={"1"} style={{ marginTop: "2%" }} md={3}>
        <Card bsPrefix="item-card" style={{ maxHeight: "465px" }} >
          <Card.Img
            variant="top"
            src={urlSimilar1}
          />
          <Card.Body bsPrefix="card-body" >
            <>
              <Badge pill variant="success">
                is it me?
              </Badge>
            </>
            <Card.Title>{"Best Similarity Score 1"}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );

    items.push(
      <Col key={"2"} style={{ marginTop: "2%" }} md={3}>
        <Card bsPrefix="item-card" style={{ maxHeight: "465px" }} >
          <Card.Img
            variant="top"
            src={urlSimilar2}
          />
          <Card.Body bsPrefix="card-body" >
            <>
              <Badge pill variant="success">
                is it me?
              </Badge>
            </>
            <Card.Title>{"Best Similarity Score 2"}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );

    items.push(
      <Col key={"3"} style={{ marginTop: "2%" }} md={3}>
        <Card bsPrefix="item-card" style={{ maxHeight: "465px" }} >
          <Card.Img
            variant="top"
            src={urlSimilar3}
          />
          <Card.Body bsPrefix="card-body" >
            <>
              <Badge pill variant="success">
                is it me?
              </Badge>
            </>
            <Card.Title>{"Best Similarity Score 3"}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );

    items.push(
      <Col key={"4"} style={{ marginTop: "2%" }} md={3}>
        <Card bsPrefix="item-card" style={{ maxHeight: "465px" }} >
          <Card.Img
            variant="top"
            src={urlSimilar4}
          />
          <Card.Body bsPrefix="card-body" >
            <>
              <Badge pill variant="success">
                is it me?
              </Badge>
            </>
            <Card.Title>{"Best Similarity Score 4"}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );


    items.push(
      <Col key={"5"} style={{ marginTop: "2%" }} md={3}>
        <Card bsPrefix="item-card" style={{ maxHeight: "465px" }} >
          <Card.Img
            variant="top"
            src={urlSimilar5}
          />
          <Card.Body bsPrefix="card-body" >
            <>
              <Badge pill variant="success">
                is it me?
              </Badge>
            </>
            <Card.Title>{"Best Similarity Score 5"}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
    setitem(items);

    return () => clearInterval(intervalId); //This is important

  }, [urlSimilar1, urlSimilar2, urlSimilar3, urlSimilar4, urlSimilar5]);

  return (
    <div>
      <Navbar />
      <div className="listing-title">
        <h2>Most Similar Images</h2>
        <div className="title-border"></div>
      </div>
      <div>
        <Container fluid>
          <Row>{item}</Row>
        </Container>
      </div>
    </div>
  );
}
