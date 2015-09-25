import React, { PropTypes } from 'react'
import cx from 'classnames'

import './PillBox.scss'

export default class PillBox {

  static propTypes = {
    inline: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    inline: false,
    style: {}
  }

  render() {
    const {
      inline,
      style,
      children
    } = this.props

    const classNames = cx({
      PillBox: true,
      PillBoxInline: inline
    })

    return (
      <div className={classNames} style={style}>
        {children}
      </div>
    )
  }
}
