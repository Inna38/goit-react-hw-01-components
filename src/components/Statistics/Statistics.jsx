export const Statistics = ({ stat, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
      {stat.map(({id, label, percentage }) => (
        
          <li className="item" key={id}>
            <span className="label">{label}: </span>
            <span className="percentage">{percentage}</span>
          </li>
       
      ))}
     </ul>    
    </section>
  );
};

// export const Statistics = ({ stat, title }) => {
//   return stat.map(({id,label,percentage}) => {
//     return (

//       <section className="statistics" key={id}>
//        <h2 className="title">{title ?? " " }</h2>

//   <ul className="stat-list">
//     <li className="item">
//       <span className="label">{label}: </span>
//       <span className="percentage">{percentage}</span>
//     </li>
//      <li className="item">
//       <span className="label">{label}: </span>
//       <span className="percentage">{percentage}</span>
//     </li>
//     <li className="item">
//       <span className="label">{label}: </span>
//       <span className="percentage">{percentage}</span>
//     </li>
//     <li className="item">
//       <span className="label">{label}: </span>
//       <span className="percentage">{percentage}</span>
//     </li>
//   </ul>
//         </section>

//    )
//   })
//     }
