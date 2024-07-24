import retreatCardCSS from "./retreatCard.module.css"

export const RetreatCard = ({
  id,
  image,
  title,
  description,
  date,
  location,
  price,
  duration,
  handleClick
}) => {
const showDate=new Date(date*1000);
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
  return (
    <div onClick={()=>handleClick(id)} className={retreatCardCSS.card}>
      <div className={retreatCardCSS.img} style={{backgroundImage:`url(${image})`}}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Date:{` ${months[showDate.getUTCMonth()]} ${showDate.getUTCDate()}-${showDate.getUTCDate()+duration}, ${showDate.getUTCFullYear()}   `}</span>
      <span>Location: {location},India</span>
      <span className={retreatCardCSS.price}>Price: ${price}</span>
    </div>
  );
};
