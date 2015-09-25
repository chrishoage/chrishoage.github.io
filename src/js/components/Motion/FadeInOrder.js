import React, { PropTypes, Children, cloneElement } from 'react'
import { Spring } from 'react-motion'

const motionConf = [120, 50]

export default class FadeInOrder {

  getEndValue(prevValue) {
    const endValue = prevValue.map((_, i) => {
      return i === 0
        ? {val: 1, config: motionConf}
        : {val: prevValue[i - 1].val, config: motionConf}
    })
    return endValue
  }

  render() {

    const childCount = Children.count(this.props.children)
    const defaultValue = new Array(childCount).fill({val: 0})
    return (
      <Spring defaultValue={defaultValue} endValue={this.getEndValue}>
        {(childs) => {
          return (
                  <div>
                    {childs.map((child, i) => cloneElement(this.props.children[i], {
                      key: i,
                      style: {
                        opacity: child.val,
                      }
                    }))}
                  </div>
                  )
        }}
      </Spring>
    )
  }
}

