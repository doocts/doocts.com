import React from 'react'
import { graphql, Link } from 'gatsby'

import styled, { css } from 'styled-components'
import Settings from '../styles/settings'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Section from '../components/section'
import SectionContent from '../components/section/content'
import Button from '../components/button'

const SectionImage = styled.img`
  display: block;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionButton = styled.div`
  text-align: center;
`;

const ButtonNotes = styled.span`
  display: block;
  font-size: ${Settings.fonts.fontSizeXsmall};
`;

const InfoList = styled.dl`
  display: flex;
  flex-wrap: wrap;
`;

const InfoTerm = styled.dt`
  width: 20%;
  margin-bottom: .4em;
  font-weight: bold;
`;

const InfoItem = styled.dd`
  width: 80%;
  margin-bottom: .4em;
`;

const InfoItemLink = styled.a`
  color: ${Settings.colors.textWhiteColor};

  &:hover {
    text-decoration: none;
  }
`;

const InfoTag = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const InfoTagItem = styled.li`
  margin: 0 .4em .4em 0;
  font-size: ${Settings.fonts.fontSizeSmall};
`;

const InfoTagLink = styled(Link)`
  display: block;
  padding: 1px .8em;
  border-radius: 100px;
  text-decoration: none;
  color: ${Settings.colors.whiteColor};
  background-color: ${Settings.colors.greenColor};
  transition: background-color ${Settings.sizes.sec} ease-in-out;

  &:hover {
    background-color: ${Settings.colors.greenShineColor};
  }
`;

const InfoSocialLink = styled.a`
  transition: opacity ${Settings.sizes.sec};

  &:hover {
    opacity: .6;
  }
`;

const InfoSocialIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: ${Settings.colors.whiteColor};
  transition: fill ${Settings.sizes.sec} ease-in-out;
`;

const Work = ({ data }) => {
  const {
    title,
    slug,
    description,
    content,
    color,
    bgColor,
    ogpImage,
    image01,
    image02,
    image03,
    file,
    date,
    client,
    url,
    createdAt,
    topics,
    twitter,
    facebook,
    instagram,
    line,
  } = data.contentfulWorks
  return (
    <Layout
      pageTitle={ title }
      pageDescription={ description }>
      <SEO
        title={ title }
        description={ description }
        keywords={`${ title }, ${ topics && topics.map(( e ) => ( e.title ))}`}
        url={`https://doocts.com/work/${ slug }`}
        ogpImage={ ogpImage.fixed.src } />
      <Section>
        { content &&
          <Section sectionTag="div" inline>
            <SectionContent content={{ __html: content.childMarkdownRemark.html }} />
          </Section> }
        { file &&
          <Section sectionTag="div" inline>
            <SectionButton>
              <Button as="a" href={ file.file.url } title={ title } target="_blank">ダウンロード<ButtonNotes>{ file.file.fileName }</ButtonNotes></Button>
            </SectionButton>
          </Section>
        }

        <Section sectionTag="div" inline>
          { image01 && <SectionImage src={ image01.fixed.src } alt="" /> }
          { image02 && <SectionImage src={ image02.fixed.src } alt="" /> }
          { image03 && <SectionImage src={ image03.fixed.src } alt="" /> }

          { file &&
            <Section sectionTag="div" inline>
              <SectionButton>
                <Button as="a" href={ file.file.url } title={ title } target="_blank">ダウンロード<ButtonNotes>{ file.file.fileName }</ButtonNotes></Button>
              </SectionButton>
            </Section>
          }

          <Section sectionTag="aside" inline>
            <InfoList>
              <InfoTerm>Date</InfoTerm>
              <InfoItem>{ date || createdAt }</InfoItem>
              { client && <><InfoTerm>Client</InfoTerm><InfoItem>{ client } 様</InfoItem></> }
              { url &&
                <>
                  <InfoTerm>URL</InfoTerm>
                  <InfoItem><InfoItemLink href={ url } title={ title } target="_blank" rel="noopener noreferrer">{ url }</InfoItemLink></InfoItem>
                </> }
              <InfoTerm>Topics</InfoTerm>
              <InfoItem>
                <InfoTag>
                  {topics && topics.map(( topic ) => (
                    <InfoTagItem><InfoTagLink
                      to={ `/work/${topic.slug}` }
                      title={  topic.title }>{ topic.title }</InfoTagLink></InfoTagItem>
                  ))}
                </InfoTag>
              </InfoItem>
              { twitter &&
                <>
                  <InfoTerm>SNS</InfoTerm>
                  <InfoItem>
                    <InfoTag>
                      { twitter &&
                        <InfoTagItem>
                          <InfoSocialLink
                            href={ `https://twitter.com/${twitter}` }
                            title=""
                            target="_blank">
                            <InfoSocialIcon viewBox="0 0 100 100">
                              <title></title>
                              <use xlinkHref="#twitter" />
                            </InfoSocialIcon>
                          </InfoSocialLink>
                        </InfoTagItem>
                      }
                      { facebook &&
                        <InfoTagItem>
                          <InfoSocialLink
                            href={ `https://www.facebook.com/${facebook}` }
                            title=""
                            target="_blank">
                            <InfoSocialIcon viewBox="0 0 100 100">
                              <title></title>
                              <use xlinkHref="#facebook" />
                            </InfoSocialIcon>
                          </InfoSocialLink>
                        </InfoTagItem>
                      }
                      { instagram &&
                        <InfoTagItem>
                          <InfoSocialLink
                            href={ `https://instagram.com/${instagram}` }
                            title=""
                            target="_blank">
                            <InfoSocialIcon viewBox="0 0 100 100">
                              <title></title>
                              <use xlinkHref="#instagram" />
                            </InfoSocialIcon>
                          </InfoSocialLink>
                        </InfoTagItem>
                      }
                      { line &&
                        <InfoTagItem>
                          <InfoSocialLink
                            href={ `https://line.me/ti/p/%40${line}` }
                            title=""
                            target="_blank">
                            <InfoSocialIcon viewBox="0 0 100 100">
                              <title></title>
                              <use xlinkHref="#line" />
                            </InfoSocialIcon>
                          </InfoSocialLink>
                        </InfoTagItem>
                      }
                    </InfoTag>
                  </InfoItem>
                </> }
            </InfoList>
          </Section>
        </Section>
      </Section>
    </Layout>
  )
}

export default Work

export const query = graphql`
  query($slug: String!) {
    contentfulWorks(slug: { eq: $slug }) {
      id
      date(formatString: "YYYY.MM.DD")
      createdAt(formatString: "YYYY.MM.DD")
      updatedAt(formatString: "YYYY.MM.DD")
      title
      slug
      description
      content {
        childMarkdownRemark {
          html
        }
      }
      color
      bgColor
      featuredImage {
        fixed(width: 1460) {
          src
        }
      }
      ogpImage {
        fixed(width: 1460) {
          src
        }
      }
      image01 {
        fixed(width: 1460) {
          src
        }
      }
      image02 {
        fixed(width: 1460) {
          src
        }
      }
      image03 {
        fixed(width: 1460) {
          src
        }
      }
      file {
        file {
          url
          fileName
        }
      }
      facebook
      twitter
      instagram
      client
      url,
      facebook,
      twitter,
      instagram,
      line,
      topics {
        id
        slug
        title
      }
      types {
        id
        slug
        title
      }
    }
  }
`