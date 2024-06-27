import React from 'react'

const Filter = (props) => {
  const { element } = props

  return (

    element.map((elemento, index) => (
      <div key={index}>
        {elemento}
      </div>
    ))

  )
}

export default Filter
