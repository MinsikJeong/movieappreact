import React from 'react';
import { Jumbotron, Container, Row, Col} from 'react-bootstrap'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colStyle1 = {
  fontSize: 44,
  fontWeight: "bolder",
  color: "black",
  textAlign: "center",
  marginTop: 130
}

const Loading = () => {
  return (
    <Jumbotron style={{
        backgroundColor: "white",
        borderRadius: 0,
        height: 700
      }}
    >
      <Container>
        <Row>
          <Col style={colStyle1}>
            <FontAwesomeIcon icon={faSpinner} color="red" size="2x" pulse />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Loading;
