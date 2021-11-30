import Image from 'next/image'

function importAll(r) {
  return r.keys().map(r)
}

const i = importAll(
  require.context('../public/images/proposal/', false, /\.(png|jpe?g|svg)$/)
)
const perChunk = Math.floor(i.length / 4) // items per chunk

const imagesChunks = i.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk)

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

export default function Gallery(): JSX.Element {
  return (
    <div className="ttm-row">
      <div className="container">
        <div className="image-row">
          {imagesChunks.map((chunk, index) => (
            <div key={index} className="image-column">
              {chunk.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Main Image"
                  placeholder="blur"
                  quality="90"
                  className="image-zoom"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .image-row {
          display: -ms-flexbox; /* IE10 */
          display: flex;
          -ms-flex-wrap: wrap; /* IE10 */
          flex-wrap: wrap;
          padding: 0 4px;
        }

        /* Create four equal columns that sits next to each other */
        .image-column {
          -ms-flex: 25%; /* IE10 */
          flex: 25%;
          max-width: 25%;
          padding: 0 4px;
        }

        .image-column > span {
          margin-top: 8px;
          vertical-align: middle;
          width: 100%;
        }

        /* Responsive layout - makes a two column-layout instead of four columns */
        @media screen and (max-width: 800px) {
          .image-column {
            -ms-flex: 50%;
            flex: 50%;
            max-width: 50%;
          }
        }

        /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
          .image-column {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
