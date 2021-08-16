// import user from './user.json'

function Title(props) {
  return <h2>{props.title}</h2>;
}

// or

// function Title({ content = 'default title', title, shops }) {
//     return (
//         <div>
//         <p>{content}</p>
//             <p>{title}</p>
//             <ul>
//                 {shops.map((shop => (
//                     <li>{shop}</li>
//                 )))}
//             </ul>
//           </div>
//     );
// }

export default Title;
