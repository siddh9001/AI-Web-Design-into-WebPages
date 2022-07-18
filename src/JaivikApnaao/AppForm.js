import { Box, Container, Paper } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const AppForm = (props) => {
    const {children} = props;
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url()',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm" sx={{marginTop: "7em"}}>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            background="dark"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
            elevation = "2"
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}

AppForm.propTypes = {
    children: PropTypes.node,
};

export default AppForm
