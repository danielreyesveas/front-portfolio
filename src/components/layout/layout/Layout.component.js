import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"

import Footer from "../footer/Footer.component"
import Navbar from "../navbar/Navbar.component"
import Sidebar from "../sidebar/Sidebar.component"

import { lightTheme, darkTheme } from "./themes"

import icon from "../../../assets/icon.png"
import useSeo from "../../../hooks/use-seo"
import ThemeContext from "../../../context/ThemeContext"
import { LayoutStyles } from "./Layout.styles"

const Layout = ({ children }) => {
  const seo = useSeo()

  const { title, description } = seo

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeContext.Consumer>
      {theme => (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href={icon} />
          </Helmet>
          <ThemeProvider
            theme={theme.theme === "light" ? lightTheme : darkTheme}
          >
            <LayoutStyles />
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
            <Footer />
          </ThemeProvider>
        </>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
