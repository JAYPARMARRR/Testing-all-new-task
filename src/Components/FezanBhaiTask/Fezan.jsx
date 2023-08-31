import React, { useState } from 'react';
import "../FezanBhaiTask/Fezan.css"

const Fezan2 = () => {

    const [ids, setIds] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    console.log("ids>>>", ids);

    const data = [
        {
            id: 1,
            name: 'jay',
            age: 19
        },
        {
            id: 2,
            name: 'sohil',
            age: 20
        },
        {
            id: 3,
            name: 'vikas',
            age: 19
        },
        {
            id: 4,
            name: 'rohit',
            age: 19
        },
    ];

    const handleSelectAllChange = () => {
        if (selectAllChecked) {
            setIds([]);
        } else {
            const allIds = data.map(ele => ele.id);
            setIds(allIds);
        }
        setSelectAllChecked(prevState => !prevState);
    };





    
    const boxChange = (id) => {
        if (ids.includes(id)) {
            setIds(ids.filter(item => item !== id));
        } else {
            setIds([...ids, id]);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAllChange}
                />
                <label htmlFor="">Select All</label>
            </div>

            <div>
                {data.map((ele) => (
                    <div className='mainDiv' key={ele.id}>
                        <input
                            type="checkbox"
                            checked={ids.includes(ele.id)}
                            onChange={() => boxChange(ele.id)}
                        />
                        <p>{ele.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fezan2;
