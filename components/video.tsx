export default function Video(): JSX.Element {
  return (
    <div className="video bg-img1 ttm-bg py-10 container" id="video">
      <h5 className="sec-subtitle">VIDEO PROPOSAL</h5>
      <h2 className="sec-title">Resumen mágico</h2>
      <div className="aspect-w-16 aspect-h-9 container">
        <iframe
          id="player"
          src="https://www.youtube.com/embed/A0ssDST2l0w"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen={false}
        ></iframe>
      </div>
    </div>
  )
}
