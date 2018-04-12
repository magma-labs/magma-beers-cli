import React from 'react'

const ObjectNames = (object) => Object.keys(object);

const List = ({ items }) => (
  <table>
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </table>
)

const ListItem =({item}) =>(
  <tr>
    {ObjectNames(item).map((key) => (
      <ListItemField value={item[key]} />
    ))}
  </tr>)

const ListItemField = ({value}) => (
  <td>
    {value}
  </td>
)

export default List
