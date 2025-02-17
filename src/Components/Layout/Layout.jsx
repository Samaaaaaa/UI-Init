import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      {/* Navbar - Full Width */}
      <Navbar />

      {/* Grid Layout */}
      <Container fluid>
        <Row>
          {/* Sidebar - Fixed Width */}
          <Col xs={2} className="sidebar-container">
            <Sidebar />
          </Col>

          {/* Main Content - Takes Remaining Space */}
          <Col xs={10} className="main-content">
            <div className="full-screen-text">
              <h1>مرحبًا بك في الأكاديمية</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
