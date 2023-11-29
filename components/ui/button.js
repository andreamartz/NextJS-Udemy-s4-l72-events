import Link from 'next/link';
import classes from './button.module.css';

function Button(props) {
  // if there's a link prop, return a Link, otherwise return a button with onClick set to the value of the onClick prop on the custom Button component
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;