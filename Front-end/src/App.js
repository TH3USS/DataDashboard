import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5258/weatherforecast')
            .then(response => {
                const formattedData = response.data.map(item => ({
                    date: new Date(item.date).toLocaleDateString(),
                    temperatureC: item.temperatureC,
                    temperatureF: item.temperatureF,
                    summary: item.summary
                }));
                setData(formattedData);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <div style={{ width: '80%', height: '400px', margin: '50px auto' }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temperatureC" stroke="#8884d8" name="Temp (°C)" />
                    <Line type="monotone" dataKey="temperatureF" stroke="#82ca9d" name="Temp (°F)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default App;
