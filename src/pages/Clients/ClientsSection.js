import React from 'react'
import ClientHero from './ClientHero'
import ClientAppreciate from './ClientAppreciate'
import ClientExperience from './ClientExperience'
import { Box } from '@mui/material'

const ClientsSection = () => {
  return (
    <Box sx={{backgroundColor:"#f5f6fb"}}>
        <ClientHero/>
        <Box sx={{ px:{xs:0, md:4}}}>
          <ClientAppreciate/>
        <ClientExperience/>
        </Box>
    </Box>
  )
}

export default ClientsSection