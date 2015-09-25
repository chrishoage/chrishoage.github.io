import React from 'react'
import Icon from 'react-fa'
import PillBox from 'components/PillBox'
import {DropIn, FadeInOrder} from 'components/Motion'

import './App.scss'

export default class App {
  render() {
    return (
      <div>
        <DropIn><PillBox><h1>Chris Hoage</h1></PillBox></DropIn>
        <FadeInOrder>
          <PillBox inline>
            <a href="https://facebook.com/chrishoage">
              <Icon size="4x" name="facebook" />
            </a>
          </PillBox>
          <PillBox inline>
            <a href="https://twitter.com/chrishoage">
              <Icon size="4x" name="twitter" />
            </a>
          </PillBox>
          <PillBox inline>
            <a href="https://github.com/chrishoage">
              <Icon size="4x" name="github" />
            </a>
          </PillBox>
          <PillBox inline>
            <a href="http://www.linkedin.com/pub/christopher-hoage/23/390/4a6">
              <Icon size="4x" name="linkedin" />
            </a>
          </PillBox>
          <PillBox inline>
            <a href="http://www.last.fm/user/ub3rgeek">
              <Icon size="4x" name="lastfm" />
            </a>
          </PillBox>
        </FadeInOrder>
      </div>
    )
  }
}
