import React, { PropTypes, Children, cloneElement } from 'react'
import { Motion, spring } from 'react-motion'

export default class DropIn {

  static propTypes = {
    children: PropTypes.node
  }

  render() {

    const child = Children.only(this.props.children)

    return (
      <Motion defaultStyle={{y: -1000}} style={{y: spring(0)}}>
	{(style) => cloneElement(child, {
          style: {
	    transform: `translate3d(0, ${style.y}%, 0)`,
          }
        })}
      </Motion>
    )
  }
}
