import React, { PropTypes, Children, cloneElement } from 'react'
import { Spring } from 'react-motion'

export default class DropIn {

  render() {

    const child = Children.only(this.props.children)

    return (
      <Spring defaultValue={{val: -200}} endValue={{val: 0, config: [120, 14]}}>
        {(interpolated) => cloneElement(child, {
          style: {
            transform: `translate3d(0, ${interpolated.val}%, 0)`,
          }
        })}
      </Spring>
    )
  }
}
