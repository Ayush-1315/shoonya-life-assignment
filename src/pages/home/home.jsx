import { useNavigate } from "react-router-dom";

import { Filter } from "../../components/filter/filter";
import { PageButtons } from "../../components/pageButtons/pageButtons";
import { RetreatCard } from "../../components/retreatCard/retreatCard";
import { useRetreats } from "../../context/retreatContext";

import HomepageCSS from "./homePage.module.css"
export const Home = () => {
    const { retreatState, retreatDispatch, retreatsByType,searchRetreat,searchByDate } = useRetreats();
    const navigate=useNavigate()
  return (
    <>
      <div className="heroContainer">
        <div className="heroImage"></div>
        <h2>Discover Your Inner Peace</h2>
        <p>
          Join us for a series of wellness retreats designed to help you find
          tranquility and rejuvenation.
        </p>
      </div>
      <Filter
        typeOptions={retreatState.types}
        dateOptions={retreatState.allYears}
        onTypeChange={(type) => retreatsByType(type)}
        onSearch={(text) => searchRetreat(text)}
        onDateChange={(date) => searchByDate(date)}
      />
      <div className={HomepageCSS.cardContainer}>
        {retreatState.data.length > 0 &&
          retreatState.data.map((data) => (
            <RetreatCard key={data.id} {...data}  handleClick={()=>navigate(`/retreats/${data.id}`)}/>
          ))}
      </div>
      <PageButtons
        currentPage={retreatState.page}
        onNext={() => {
          if (retreatState.data.length === 3) {
            retreatDispatch({ type: "PAGE", value: retreatState.page + 1 });
          }
        }}
        onPrevious={() =>
          retreatDispatch({ type: "PAGE", value: retreatState.page - 1 })
        }
        disableNext={retreatState.data.length < 3}
      />
    </>
  );
};
