import React from 'react'
import {
  Link,
  StaticQuery,
  graphql
} from 'gatsby'

import Layout from '../components/layout'

const ordered = [
  {
    text: 'This should be number 1',
    img: 'image1',
  },
  {
    text: 'This should be number 2',
    img: 'image2',
  },
  {
    text: 'This should be number 3',
    img: 'image3',
  },
  {
    text: 'This should be number 4',
    img: 'image4',
  },
  {
    text: 'This should be number 5',
    img: 'image5',
  },
]

const getRandomOrder = (arr) => {
  const clone = arr.slice()
  const ret = []
  while (clone.length > 0) {
    const obj = clone.splice(Math.floor(Math.random() * clone.length), 1)[0]
    ret.push(Object.assign({}, obj))
  }
  return ret
}

const Numbers = (props) => {
  const { numbers } = props
  const flexRow = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  const numberStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 8px'
  }
  const imgStyle = {
    width: 200,
    height: 200
  }
  return (
    <div
      style={flexRow}
    >
      {numbers.map(({ text, img }, ix) => {
        const image = props[img]
        return (
          <div
            key={ix}
            style={numberStyle}
          >
            <img
              src={image.src}
              style={imgStyle}
            />
            <p>
              {text}
            </p>
          </div>
        )
      })}
    </div>
  )
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file (
          relativePath: {eq: "1.jpg"}
        ) {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
        image2: file (
          relativePath: {eq: "2.jpg"}
        ) {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
        image3: file (
          relativePath: {eq: "3.jpg"}
        ) {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
        image4: file (
          relativePath: {eq: "4.jpg"}
        ) {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
        image5: file (
          relativePath: {eq: "5.jpg"}
        ) {
          childImageSharp {
            fluid {
              src
              srcSet
            }
          }
        }
      }
    `}
    render={(data) => {
      const image1 = data.image1.childImageSharp.fluid
      const image2 = data.image2.childImageSharp.fluid
      const image3 = data.image3.childImageSharp.fluid
      const image4 = data.image4.childImageSharp.fluid
      const image5 = data.image5.childImageSharp.fluid
      const randomized = getRandomOrder(ordered)
      return (
        <Layout>
          <Numbers
            numbers={randomized}
            image1={image1}
            image2={image2}
            image3={image3}
            image4={image4}
            image5={image5}
          />
        </Layout>
      )
    }}
  />
)

export default IndexPage
