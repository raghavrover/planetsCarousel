import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} className="planet-img" alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-item-description">{description}</p>
    </div>
  )
}

export default PlanetItem
