import React, { useState, useEffect } from "react";

const RadioBox = ({ prices }) => {
    const [value, setValue] = useState(0);

    const handleChange = () => {
        //
    };

    return prices.map((p, i) => (
        <div key={i}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                type="radio"
                className="mr-2 ml-4"
            />
            <label className="form-check-label">{p.name}</label>
        </div>
    ));
};

export default RadioBox;
