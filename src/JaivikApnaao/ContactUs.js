import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          bgcolor: "#cfe8fc",
          borderRadius: 4,
          marginTop: "8em",
          paddingBottom: "2em",
        }}
      >
        <Grid container spacing={5}>
          <Grid item md={12} xs={12}>
            <h3 style={{ textAlign: "center", marginTop: "1em" }}>
              CONTACT US
            </h3>
          </Grid>
          <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: "2% 0%" },
              }}
              noValidate
              autoComplete="off"
              fullWidth
            >
              <form
                id="contact-form"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <div className="form-group">
                  <TextField
                    label="Name"
                    size="small"
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Email address"
                    size="small"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    className="form-control"
                    id="message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                    label="Message"
                    multiline
                    rows={3}
                  />
                </div>
                <Button type="submit" fullWidth variant="contained" sx={{marginTop:'0.2em'}}>
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ textAlign: "center" }}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                backgroundColor: "pink",
                borderRadius: 4,
              }}
              noValidate
              autoComplete="off"
              padding="1em"
            >
              <CallRoundedIcon sx={{ fontSize: 40 }} />
              <p>+916114165454</p>
              <LocationOnRoundedIcon sx={{ fontSize: 40 }} />
              <p>Huhfkvbfd Jdjkasndk, Sijojfsjd, Chennai</p>
              <EmailRoundedIcon sx={{ fontSize: 40 }} />
              <p>sp7574@gmail.com</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactUs;
