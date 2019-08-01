import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import Settings from '../../styles/settings'
import { Media } from '../../styles/mixins'

const Container = styled.div`
  margin-bottom: 1rem;

  ${Media.desktop`
    margin-bottom: 0;
  `}
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 1rem;
`;

const ItemLink = styled.a`
  color: ${Settings.colors.textWhiteColor};
  text-decoration: none;

  &:hover {
    color: ${Settings.colors.greenColor};

    & svg {
      fill: ${Settings.colors.textClearColor};
    }
  }
`;

const ItemIcon = styled.svg`
  width: 1.4rem;
  height: 1.4rem;
  fill: ${Settings.colors.textWhiteColor};
  transition: fill ${Settings.sizes.sec} ease-in-out;
`;

const FooterSocial = ({ settings }) => (
  <Container>
    <List>
      { settings.twitter &&
        <Item>
          <ItemLink
            target="_blank"
            rel="noopener noreferrer"
            href={ `https://twitter.com/${settings.twitter}` }
            title="Twitter">
              <ItemIcon viewBox="0 0 100 100">
                <title>Twitter</title>
                <use xlinkHref="#twitter" />
              </ItemIcon>
            </ItemLink>
        </Item>
      }
      { settings.facebook &&
        <Item>
          <ItemLink
            target="_blank"
            rel="noopener noreferrer"
            href={ `https://www.facebook.com/${settings.facebook}` }
            title="Facebook">
              <ItemIcon viewBox="0 0 100 100">
                <title>Facebook</title>
                <use xlinkHref="#facebook" />
              </ItemIcon>
            </ItemLink>
        </Item>
      }
      { settings.instagram &&
        <Item>
          <ItemLink
            target="_blank"
            rel="noopener noreferrer"
            href={ `https://www.instagram.com/${settings.instagram}` }
            title="Instagram">
              <ItemIcon viewBox="0 0 100 100">
                <title>Instagram</title>
                <use xlinkHref="#instagram" />
              </ItemIcon>
            </ItemLink>
        </Item>
      }
    </List>
  </Container>
)

FooterSocial.propTypes = {
  settings: PropTypes.object,
}

export default FooterSocial
