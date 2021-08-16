// import TitleMy from './Title'

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">{Object.keys(stats)[0]}: </span>
          <span className="quantity">{Object.values(stats)[0]}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[1]}: </span>
          <span className="quantity">{Object.values(stats)[1]}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[2]}: </span>
          <span className="quantity">{Object.values(stats)[2]}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

// import TitleMy from './Title'

// function Title(props) {
//     return (
//         <div>
//             <TitleMy title={props.title}/>
//             <p>{props.content}</p>
//             <h2>{props.title}</h2>
//             <ul>
//                 {props.shops.map(shop => (
//                     <li key={shop.id}>{shop.value}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

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
