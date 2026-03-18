import {useState} from "react";
export default function Form(){

    const [name, setName] = useState("");
    const [rented, setRented] = useState("Kajak");
    const [rentalTime, setRentalTime] = useState(1);
    const [safetyJacket, setSafetyJacket] = useState(false);
    const [instructorHired, setInstructorHired] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("Karta");
    const [rules, setRules] = useState(false);
    const [summary, setSummary] = useState("");
    function calculatePrice(){
        let basePrice = 0;
        switch(rented){
            case "Kajak":
                basePrice = 20; break;
            case "Rower wodny":
                basePrice = 35; break;
            case "Omega":
                basePrice = 150; break;
        }
        basePrice*=rentalTime;

        if(safetyJacket) basePrice += 5;
        if(instructorHired) basePrice += (50*rentalTime);
        return basePrice;
    }

    function handleSubmit(){
        if(name == ""){
            setSummary("Uzupełnij imie!")
        }
        if(rules){
            setSummary(`Złożono rezerwacje dla ${name}, wypożyczony sprzęt: ${rented}, na czas ${rentalTime} godzin, ${instructorHired ? "z instruktorem" : "bez instruktora"} \n Metoda płatności: ${paymentMethod}`);
        }
        else{
            setSummary("Nie zaakceptowano regulaminu!*")
        }
    }

    return (
        <>
            <div className="formBody">
                <p>Imie:</p>
                <input
                    type="text"
                    onChange={e=> setName(e.target.value)}/>
                <p>Wybierz sprzęt:</p>
                <select onChange={e=> setRented(e.target.value)}>
                    <option>Kajak</option>
                    <option>Rower wodny</option>
                    <option>Omega</option>
                </select>
                <p>Czas wypożyczenia (h)</p>
                <input
                    type="range"
                    onChange={e=> setRentalTime(parseInt(e.target.value))}
                    min="1"
                    max="8"
                    defaultValue="1"/>
                <p>{rentalTime}</p>
                {rented=="Omega" && <h3>UWAGA: Wymagany patent!</h3>}
                Kapok (+5zł) <input type="checkbox" onChange={e=> setSafetyJacket(e.target.checked)}/>
                Instruktor (50zl/h): <input type="checkbox" onChange={e=> setInstructorHired(e.target.checked)}/>
                Metoda płatności:
                <select
                    onChange={e=> setPaymentMethod(e.target.value)}
                    defaultValue="Karta">
                    <option>Karta</option>
                    <option>BLIK</option>
                </select>
                Akceptuje regulamin: <input type="checkbox" onChange={e=> setRules(e.target.checked)}/>
                <h4>Podgląd ceny: {calculatePrice()}</h4>
                <button onClick={handleSubmit}>Rezerwacja</button>
                <h2>{summary}</h2>
            </div>
        </>
    )
}
