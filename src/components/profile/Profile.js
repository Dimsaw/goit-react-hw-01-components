// import ReactDOM from 'react-dom';

// const data = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
// ReactDOM.render(user, document.querySelector('#root'));

// import ReactDOM from 'react-dom';
// import man from './data/user.json';

// const data = man;

// const user = (
//   <div class="profile">
//     <div class="description">
//       <img src={data.avatar} alt={data.username} class="avatar" width="320" />
//       <p class="name">{data.username}</p>
//       <p class="tag">{data.tag}</p>
//       <p class="location">{data.location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">Followers</span>
//         <span class="quantity">{data.stats.followers}</span>
//       </li>
//       <li>
//         <span class="label">Views</span>
//         <span class="quantity">{data.stats.views}</span>
//       </li>
//       <li>
//         <span class="label">Likes</span>
//         <span class="quantity">{data.stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );

// ReactDOM.render(user, document.querySelector('#root'));
