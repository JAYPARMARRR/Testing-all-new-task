import  { useState } from 'react';
import "../FezanBhaiTask/Fezan.css"

const Fezan2 = () => {

    const [ids, setIds] = useState([])

    console.log("ids>>>",ids)


    const data = [
        {
            id:1,
            name:'jay',
            age:19
        },
        {
            id:2,
            name:'sohil',
            age:20
        },
        {
            id:3,
            name:'vikas',
            age:19
        },
        {
            id:4,
            name:'rohit',
            age:19
        },
    ]

    const boxChange = (e,id) => {
        
        if (ids.includes(id)) {

            setIds(ids.filter(item => item !== id));
        }
         else {
            setIds([...ids, id]);
        }
        console.log(">>>>>>>>>>>>>>>" ,id);

        if(e.target.checked){
            setIds([...ids, id])
        }else{
            setIds(ids?.filter((item)=>{
                if(item !== id){
                    return item
                }
            }))
        }
      };
    


    return (
        <div>

            <div>
                <input type="checkbox" />
                <label htmlFor="">selectAll</label>
            </div>


            <div>
                {
                    data?.map((ele)=>{
                        return(
                            <div className='mainDiv' key={ele.id}>
                                <input type="checkbox" onChange={(e) => boxChange(e,ele.id)} />
                                <p>{ele?.name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Fezan2