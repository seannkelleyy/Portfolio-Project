import { GoalsData } from '../Assets/Data/GoalsData';

const Goals = () => {
    return (
        <div className="goals-section">
            <h2>Goals</h2>
            {GoalsData.map((goal, index) => {
                    return (
                        <p key={index}>{goal.goal}</p>
                    )
                }
            )}
        </div>
    );
}

export default Goals;