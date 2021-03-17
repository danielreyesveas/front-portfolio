import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

export const LayoutStyles = createGlobalStyle`
    
    :root {
        --clr-white: #fff;
        --ff-primary: "Bitter", sans-serif;
        --ff-terminal: "Ubuntu Mono", sans-serif;
        --ff-secondary: "Bitter", sans-serif;
        --transition: all 0.3s linear;
        --spacing: 0.2rem;
        --radius: 0.5rem;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        --max-width: 1170px;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--ff-secondary);
        background: var(--clr-white);
        color: ${({ theme }) => theme.grey1};
        line-height: 1.5;
        font-size: 0.875rem;
    }
    button:focus {
        outline:0 !important;
    }
    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }

    blockquote {
      border-left: 5px solid ${({ theme }) => theme.primary10};;
      margin: 1.5em 10px;
      padding: 0.5em 10px;
    }

    ${
      "" /* img:not(.nav-logo) {
        width: 100%;
        display: block;
    } */
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing: var(--spacing);
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: var(--ff-primary);
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 0.875rem;
    }
    p {
        margin-bottom: 1.25rem;
        color: ${({ theme }) => theme.grey5};
    }
    @media screen and (min-width: 800px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.75rem;
        }
        h4 {
            font-size: 1rem;
        }
        body {
            font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4 {
            line-height: 1;
        }
    }
    
    .terminal-window {
      background: #565950;
      font-family: var(--ff-terminal);;
      border-radius: 10px 10px 0 0;
      display: flex;
      color: white;
      font-weight: bold;
      flex-flow: row wrap;
      position: relative;
      align-items: center;
      width: 100%;
      height: 2em;
    }

    .terminal-title {
      flex: 1;
      text-align: center;
      font-size: 0.8em;
      padding: 0.65em 0.75em;
    }

    .terminal-icons {
      padding: 0.65em 0.75em;
      position: absolute;

      span{
        display: inline-block;
        float: left;
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        margin-right: 0.5em;
        background: #f4c025;
      }

      &:before {
        display: inline-block;
        float: left;
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        margin-right: 0.5em;
        content: '';
        background: #e4514f;
      }
      
      &:after {
        display: inline-block;
        float: left;
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        margin-right: 0.5em;
        content: '';
        background: #3ec930;
      }
    }

    .terminal-foot {
      background: #23241F;
      border-radius: 0 0 10px 10px;
      width: 100%;
      height: 1em;
    }
    
`

export const Section = styled.section`
  padding: 5rem 0;
`

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

export const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.primary5};
  margin-left: auto;
  margin-right: auto;
`

export const ButtonDark = styled(Link)`
  color: white;
  text-transform: uppercase;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
  position: relative;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.primary3};
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: dashed 3.5px ${({ theme }) => theme.primary5};
  background-image: repeating-linear-gradient(
    24deg,
    ${({ theme }) => theme.primary7},
    ${({ theme }) => theme.primary7} 2px,
    transparent 0,
    transparent 5px
  );

  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    font-size: 1.1rem;
  }
`

/* ABOUT PAGE */

export const AboutSection = styled.section`
  padding: 7rem 0;
`

export const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
`

export const AboutVideoContainer = styled.div`
  border-radius: var(--radius);
  width: auto;
  min-width: 15rem;
  max-width: 35rem;
  height: 20rem;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 576px) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1 / span 6;
  }
`

export const AboutVideo = styled.video`
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  animation: fadeIn ease 2.5s;
  -webkit-animation: fadeIn ease 2.5s;
  -moz-animation: fadeIn ease 2.5s;
  -o-animation: fadeIn ease 2.5s;
  -ms-animation: fadeIn ease 2.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const AboutText = styled.article`
  margin-left: 0;
  margin-right: 0;

  @media screen and (min-width: 992px) {
    grid-column: 7 / -1;
  }
`

export const AboutTitle = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`

export const AboutInfo = styled.p`
  line-height: 2;
`

export const AboutStackImg = styled.img`
  height: 40px !important;
  width: auto !important;
  margin: 5px;
  display: flex;
  align-items: center;
`

export const AboutStack = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }

  ${AboutStackImg} {
    display: inline-block;
    padding: 0.25rem 0.3rem;
  }
`

/* 404 PAGE */

export const NotFound = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const NotFoundError = styled.div`
  text-align: center;
  margin: 0;
  font-size: 96px;
  letter-spacing: -7px;
  animation: glitch 1s linear infinite;

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before {
    text-align: center;
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &:after {
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
`
