
const WithStyles = ({description, headline, image}) => {
  return (
    <div className="with-styles">
      <img src={image} alt={headline} />
      <h2>{headline}</h2>
      <p>{description}</p>
    </div>
  )
}

export default WithStyles