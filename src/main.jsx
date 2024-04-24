import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme(
  {
    palette: {
      background:{
        default: "#F1F1F4",
      },
      primary: {
        main: "#F1F1F4",
        light: "#FFFFFF",
        contrastText: "#000000",
      },
      secondary:{
        main: "#33A071",
        light: "#0CAE26",
        dark: "#045431",
        contrastText: "#FFFFFF",
      },
    },
    typography:{
      fontFamily: [
        'Poppins',
        'Arial',
      ].join(','),
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
