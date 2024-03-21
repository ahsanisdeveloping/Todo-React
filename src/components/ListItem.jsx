import '../App.css'
const ListItem = (props) => {
    return ( 
        <div>
            <li className="listItem">
            {props.value.id}
          </li>
          <li
            key={props.index}
            onClick={() => {
              props.handleCheckedItems(props.index);
            }}
            className={
              props.value.checked ? "checked listItem" : "notChecked listItem"
            }
          >
            {props.value.item}
          </li>
        </div>
     );
}
 
export default ListItem;