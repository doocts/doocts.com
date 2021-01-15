import React from 'react'

import styled from 'styled-components'
import Settings from '../styles/settings'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import Button from '../components/button'

const FormList = styled.dl`
  margin-bottom: 2rem;
`;

const FormTitle = styled.dt`
  margin-bottom: .6rem;
`;

const FormRequired = styled.span`
  margin-left: .6em;
  padding: .2em .6em;
  border-radius: 100px;
  background-color: ${Settings.colors.redColor};
  color: ${Settings.colors.textWhiteColor};
  font-size: ${Settings.fonts.fontSizeXsmall};
`;

const FormItem = styled.dd`
  margin-bottom: 2rem;
`;

const FormInput = styled.input`
  display: block;
  outline: none;
  width: 100%;
  padding: 1.2em .8em;
  font-size: ${Settings.fonts.fontSizeInput};
  border-width: 0;
  border-radius: .6em;
  box-sizing: border-box;
  box-shadow: 0 0 1rem ${Settings.colors.blackClearColor};
  background-color: ${Settings.colors.whiteClearColor};
  transition: background-color ${Settings.sizes.sec} ease-in-out;

  &:focus {
    background-color: ${Settings.colors.whiteColor};
  }
`;

const FormTextarea = styled(FormInput)`
  height: 6em;
`;

const FormError = styled.span`
  display: block;
  margin-top: .4em;
  color: ${Settings.colors.textRedColor};
  font-size: ${Settings.fonts.fontSizeXsmall};
`;

const FormFooter = styled.div`
  text-align: center;
`;

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = ( errors ) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: '',
      }
    }
  }

  handleChange = ( event ) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name =
          value.length == 0 ? '必須項目です。'
            : ''
        break
      case 'email':
        errors.email =
          value.length == 0 ? '必須項目です。'
            : validEmailRegex.test(value) ? ''
            : 'メールアドレスが無効です。'
        break
      case 'message':
        errors.message =
          value.length == 0
            ? '必須項目です。'
            : ''
        break
      default:
        break;
    }

    this.setState({errors, [name]: value})
  }

  render() {
    const { errors } = this.state;

    return (
      <Layout pageTitle="お問い合わせ">
        <SEO
          title="お問い合わせ"
          description=""
          keywords="お問い合わせ,フォーム"
          url="https://doocts.com/contact" />
        <Section>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field">

            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <FormList>
              <FormTitle>
                <label for="contactName">氏名<FormRequired>必須</FormRequired></label></FormTitle>
              <FormItem>
                <FormInput
                  id="contactName"
                  type="text"
                  name="name"
                  placeholder=" "
                  value={this.state.name}
                  onChange={this.handleChange} />
                  { errors.name.length > 0 &&
                    <FormError>{ errors.name }</FormError> }
              </FormItem>

              <FormTitle><label for="contactEmail">メールアドレス<FormRequired>必須</FormRequired></label></FormTitle>
              <FormItem>
                <FormInput
                  id="contactEmail"
                  type="email"
                  name="email"
                  placeholder=" "
                  value={this.state.email}
                  onChange={this.handleChange} />
                  { errors.email.length > 0 &&
                    <FormError>{ errors.email }</FormError> }
              </FormItem>

              <FormTitle><label for="contactMessage">本文<FormRequired>必須</FormRequired></label></FormTitle>
              <FormItem>
                <FormTextarea
                  id="contactMessage"
                  as="textarea"
                  name="message"
                  placeholder=" "
                  value={this.state.message}
                  onChange={this.handleChange} />
                  { errors.message.length > 0 &&
                    <FormError>{ errors.message }</FormError> }
              </FormItem>
            </FormList>

            <FormFooter>
              <Button
                as="button"
                type="submit"
                disabled={
                  errors.name.length == 0 &&
                  errors.email.length == 0 &&
                  errors.message.length == 0
                    ? false
                    : true }>送信する</Button>
            </FormFooter>
          </form>
        </Section>
      </Layout>
    )
  }
}

export default Contact
