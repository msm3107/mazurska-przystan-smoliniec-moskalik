import {useState} from "react";
export default function Form(){

    const [name, setName] = useState("");
    const [rentedObject, setRentedObject] = useState("Kajak");
    const [rentalTime, setRentalTime] = useState(1);
    const [instructorRented, setInstructorRented] = useState(false);
    const [jacketRented, setJacketRented] = useState(false);
    return (
        <>
            <div>
                <form method="POST" action="">
                    <label><input type="text" onChange={e=> setName(e.target.value)}/></label>
                    <label>Pojazdy</label>
                    <select name="sprzet" value={rentedObject} onChange={e=> setRentedObject(e.target.value)}>
                        <option>Kajak</option>
                        <option>Rower wodny</option>
                        <option>Omega</option>
                    </select>
                    <input type="range" min={1} max={8} onChange={e=> setRentalTime(parseInt(e.target.value))}/>
                    <label>Kapok<input type="checkbox"/></label>
                    <label>Instruktor<input type="checkbox"/></label>
                </form>
            </div>
        </>
    )
}
