import React, { useEffect, useState } from 'react';
import { fetchCollegeStats } from '../services/api';

const CollegeStats = () => {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStats = async () => {
            try {
                const data = await fetchCollegeStats();
                setStats(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getStats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>College Statistics</h1>
            <ul>
                {stats.map((stat, index) => (
                    <li key={index}>{stat.abbreviation}: {stat.mascot}</li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeStats;