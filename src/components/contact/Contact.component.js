import React, { useState } from "react"

import FormInput from "../layout/form-input/FormInput.component"
import FormTextarea from "../layout/form-input/FormTextarea.component"

import {
  ContactSection,
  FormContainer,
  FormGroup,
  Submit,
} from "./Contact.styles"
import Title from "../layout/title/Title.component"
import axios from "axios"

const Contact = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    from: "",
    subject: "",
    content: "",
  })

  const { name, from, content, subject } = userCredentials

  const handleSubmit = event => {
    event.preventDefault()

    const template_slug = process.env.GATSBY_CONTACT_TEMPLATE_SLUG

    axios
      .post(`${process.env.GATSBY_EMAIL_API_URL}/add-email`, {
        ...userCredentials,
        template_slug,
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <ContactSection>
      <Title title="Contacto" />

      <FormContainer>
        <form onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <FormInput
              name="name"
              type="name"
              handleChange={handleChange}
              value={name}
              label="nombre"
              required
            />
            <FormInput
              name="from"
              type="email"
              handleChange={handleChange}
              value={from}
              label="email"
              required
            />
            <FormInput
              name="subject"
              type="text"
              handleChange={handleChange}
              value={subject}
              label="asunto"
              required
            />
            <FormTextarea
              name="content"
              handleChange={handleChange}
              rows="5"
              value={content}
              label="mensaje"
              required
            />
          </FormGroup>
          <FormGroup>
            <Submit type="submit">enviar</Submit>
          </FormGroup>
        </form>
      </FormContainer>
    </ContactSection>
  )
}

export default Contact
