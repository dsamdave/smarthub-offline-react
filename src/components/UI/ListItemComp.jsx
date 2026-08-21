

const ListItemComp = ({ item, href }) => {
  return (
    <li>
      <a href={href}>{item}</a>
    </li>
  )
}

export default ListItemComp