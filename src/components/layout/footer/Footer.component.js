import React, { useEffect } from "react"

import socialLinks from "../../../utils/socialLinks"

import {
  FooterContainer,
  FooterSocialIcons,
  FooterSocialIcon,
} from "./Footer.styles"

const Footer = () => {
  useEffect(() => {
    const date = document.querySelector("#date")
    date.innerHTML = new Date().getFullYear()
  }, [])

  return (
    <FooterContainer>
      <FooterSocialIcons>
        {socialLinks.map(link => {
          return (
            <li key={link.id}>
              <FooterSocialIcon href={link.url}>{link.icon}</FooterSocialIcon>
            </li>
          )
        })}
      </FooterSocialIcons>
      <p>
        &copy; <span id="date"></span> www.reciclatusanimales.com
      </p>
    </FooterContainer>
  )
}

export default Footer