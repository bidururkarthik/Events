// Write your code here
import './index.css'

const EventItem = props => {
  const {Item, registrationItem} = props
  const {imageUrl, name, location} = Item
  const getEventDetails = () => {
    registrationItem(Item)
  }
  return (
    <li className="col-6">
      <button type="button" onClick={getEventDetails}>
        <img src={imageUrl} className="image" alt="event" />
      </button>
      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
