import React, { useState, useEffect } from 'react';
import { getClassifications } from '../Services/Classification';

function Classification({ onChange }) {
    const [classifications, setClassifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchClassifications() {
            try {
                const response = await getClassifications();
                setClassifications(response);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching classifications:", error);
                setLoading(false);
            }
        }

        fetchClassifications();
    }, []);

    const handleSelectChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div>
            {loading ? (
                <p>در حال بارگذاری...</p>
            ) : (
                <select className="select" name="classificationId" onChange={handleSelectChange}>
                    <option value="">انتخاب کنید</option>
                    {classifications.map((classification, index) => (
                        <option key={index} value={classification.id}>{classification.title}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default Classification;
