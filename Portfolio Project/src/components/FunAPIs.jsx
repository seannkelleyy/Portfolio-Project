//import RiddleAndAnswer from "./API/Riddles";    
//import TriviaAndAnswer from "./API/Trivia";
import HistoricalEvents from "./API/HistoricalEvents";
import DailyFact from "./API/DailyFact";
//import DadJokes from "./API/DadJokes";

export function funAPIs() {
    return (
        <div className="apis"> 
            <DailyFact />
            <HistoricalEvents/>
        </div>
    )
}

export default funAPIs;