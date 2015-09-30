import React, { PropTypes, Children, cloneElement } from 'react'
import { StaggeredMotion, spring } from 'react-motion'

const motionConf = [120, 50]

export default class FadeInOrder {

  static propTypes = {
    children: PropTypes.node
  }

  getStyles(prevStyles) {
    return prevStyles.map((style, i) => {
      return i === 0
	? {opacity: spring(1, motionConf)}
	: {opacity: spring(prevStyles[i - 1].opacity, motionConf)}
    })
  }

  render() {

    const childCount = Children.count(this.props.children)
    const defaultStyles = new Array(childCount).fill({opacity: 0})
    return (
      <StaggeredMotion defaultStyles={defaultStyles} styles={this.getStyles}>
	{(styles) => {
          return (
                  <div>
		    {styles.map((style, i) => cloneElement(this.props.children[i], {
                      key: i,
                      style: {
			opacity: style.opacity,
                      }
                    }))}
                  </div>
                  )
        }}
      </StaggeredMotion>
    )
  }
}

