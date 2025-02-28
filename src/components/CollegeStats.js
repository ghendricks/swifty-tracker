import React, { useState, useEffect } from 'react';
import { fetchCollegeStats } from '../services/api';
import '../styles/CollegeStats.css';

const CollegeStats = () => {
    const [year, setYear] = useState('2024');
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStats = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchCollegeStats(year);
                setStats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getStats();
    }, [year]);

    const handleButtonClick = () => {
        alert("Should have had more faith!");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>BYU College Stats</h1>
            <label>
                Year:
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    {/* Add more years as needed */}
                </select>
            </label>
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h3>Play {index + 1}</h3>
                        <div className="stat-item"><strong>Away:</strong> <span>{stat.away}</span></div>
                        <div className="stat-item"><strong>Clock:</strong> <span>{stat.clock.minutes}:{stat.clock.seconds}</span></div>
                        <div className="stat-item"><strong>Defense:</strong> <span>{stat.defense}</span></div>
                        <div className="stat-item"><strong>Defense Conference:</strong> <span>{stat.defenseConference}</span></div>
                        <div className="stat-item"><strong>Defense Score:</strong> <span>{stat.defenseScore}</span></div>
                        <div className="stat-item"><strong>Defense Timeouts:</strong> <span>{stat.defenseTimeouts}</span></div>
                        <div className="stat-item"><strong>Distance:</strong> <span>{stat.distance}</span></div>
                        <div className="stat-item"><strong>Down:</strong> <span>{stat.down}</span></div>
                        <div className="stat-item"><strong>Drive ID:</strong> <span>{stat.driveId}</span></div>
                        <div className="stat-item"><strong>Drive Number:</strong> <span>{stat.driveNumber}</span></div>
                        <div className="stat-item"><strong>Game ID:</strong> <span>{stat.gameId}</span></div>
                        <div className="stat-item"><strong>Home:</strong> <span>{stat.home}</span></div>
                        <div className="stat-item"><strong>ID:</strong> <span>{stat.id}</span></div>
                        <div className="stat-item"><strong>Offense:</strong> <span>{stat.offense}</span></div>
                        <div className="stat-item"><strong>Offense Conference:</strong> <span>{stat.offenseConference}</span></div>
                        <div className="stat-item"><strong>Offense Score:</strong> <span>{stat.offenseScore}</span></div>
                        <div className="stat-item"><strong>Offense Timeouts:</strong> <span>{stat.offenseTimeouts}</span></div>
                        <div className="stat-item"><strong>Period:</strong> <span>{stat.period}</span></div>
                        <div className="stat-item"><strong>Play Number:</strong> <span>{stat.playNumber}</span></div>
                        <div className="stat-item"><strong>Play Text:</strong> <span>{stat.playText}</span></div>
                        <div className="stat-item"><strong>Play Type:</strong> <span>{stat.playType}</span></div>
                        <div className="stat-item"><strong>PPA:</strong> <span>{stat.ppa}</span></div>
                        <div className="stat-item"><strong>Scoring:</strong> <span>{stat.scoring ? 'Yes' : 'No'}</span></div>
                        <div className="stat-item"><strong>Wallclock:</strong> <span>{new Date(stat.wallclock).toLocaleString()}</span></div>
                        <div className="stat-item"><strong>Yardline:</strong> <span>{stat.yardline}</span></div>
                        <div className="stat-item"><strong>Yards Gained:</strong> <span>{stat.yardsGained}</span></div>
                        <div className="stat-item"><strong>Yards to Goal:</strong> <span>{stat.yardsToGoal}</span></div>
                        {stat.yardsGained === 0 && stat.offense == 'BYU' && (
                            <button className="whats-wrong-button" onClick={handleButtonClick}>What went wrong for BYU?</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeStats;