export const fetchCollegeStats = async (year) => {
    const team = 'BYU';
    const endpoint = `https://apinext.collegefootballdata.com/plays?year=${year}&team=${team}&week=${1}`; 
    
    const apiKey = 'Au48GGdqhFxWDkneDI15fngXEBJ0W0+Bnu0VfDL4L0OlqQX6nnfXI1MElj83ud8H';
    
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching college statistics:', error);
        throw error;
    }
};