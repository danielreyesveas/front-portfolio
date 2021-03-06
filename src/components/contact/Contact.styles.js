import styled from "styled-components"

export const ContactSection = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;
  min-height: calc(100vh - 5rem - 9rem);
`

export const FormContainer = styled.article`
  background: var(--clr-white);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  width: 90vw;
  position: relative;
  max-width: 35rem;

  &:before,
  &:after {
    content: "";
    height: 98%;
    position: absolute;
    border-radius: var(--radius);
    width: 100%;
    z-index: -1;
  }
  &:before {
    background: #fafafa;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    left: -5px;
    top: 4px;
    transform: rotate(-2.5deg);
  }
  &:after {
    background: #f6f6f6;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    right: -3px;
    top: 1px;
    transform: rotate(1.4deg);
  }

  &:hover {
    box-shadow: var(--dark-shadow);
  }
  h3 {
    padding-top: 1.25rem;
    color: ${({ theme }) => theme.grey5};
  }
`

export const FormGroup = styled.div`
  padding: 1rem 1.5rem;
`

export const SuccessMessage = styled.div`
  color: #32d190;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

export const ErrorMessage = styled.div`
  color: #cd5c5c;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

export const Field = styled.div`
  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: ${({ theme }) => theme.grey10};
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);

    &:placeholder {
      font-family: var(--ff-primary);
      color: ${({ theme }) => theme.grey1};
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
  }

  textarea {
    height: 200px;
  }
`

export const Submit = styled.button`
  pointer-events: ${({ isLoading }) => (isLoading ? "none" : "auto")};
  color: ${({ theme }) => theme.grey5};
  text-transform: uppercase;
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  position: relative;
  width: 12rem;
  height: 2.75rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
  background-color: white;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: dashed 3.5px ${({ theme }) => theme.primary5};
  background-image: repeating-linear-gradient(
    24deg,
    ${({ theme }) => theme.primary3},
    ${({ theme }) => theme.primary3} 2px,
    rgba(255, 255, 255, 0.75) 0,
    rgba(255, 255, 255, 0.75) 5px
  );

  -moz-transition: var(--theme-transition);
  -o-transition: var(--theme-transition);
  -webkit-transition: var(--theme-transition);
  -ms-transition: var(--theme-transition);
  transition: var(--theme-transition);

  &:hover {
    box-shadow: 2px 8px 4px -6px hsla(0, 0%, 0%, 0.3);
    font-size: 1.1rem;
  }
`

export const Spinner = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-top-color: ${({ theme }) => theme.primary5};
  border-left-color: ${({ theme }) => theme.primary5};
  animation: spinner 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  box-sizing: border-box;
  vertical-align: middle;
  z-index: 100;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
