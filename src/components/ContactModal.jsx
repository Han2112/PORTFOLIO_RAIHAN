import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ContactModal = ({ show, handleClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      handleClose();
      onSuccess();
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      backdrop="static"
      // TAMBAHKAN BARIS INI:
      backdropClassName="modal-backdrop-blur" 
      className="contact-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-bold text-uppercase">Get in Touch</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="pt-2 pb-4 px-4">
        <p className="text-secondary small mb-4">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">NAME</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              placeholder="Your Name"
              required 
              value={formData.name}
              onChange={handleChange}
              className="rounded-0 border-dark"
            />
          </Form.Group>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">EMAIL</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="name@example.com"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-0 border-dark"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">PHONE</Form.Label>
                <Form.Control 
                  type="tel" 
                  name="phone" 
                  placeholder="+62..."
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-0 border-dark"
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-4">
            <Form.Label className="small fw-bold">MESSAGE</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message" 
              rows={4} 
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="rounded-0 border-dark"
            />
          </Form.Group>

          <div className="d-grid">
            <Button 
              type="submit" 
              variant="dark" 
              className="rounded-0 py-3 fw-bold"
              disabled={isSending}
            >
              {isSending ? "SENDING MESSAGE..." : "SEND MESSAGE"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;