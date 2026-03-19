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
            <div id="tlo">
                    <h1>Mazurska przystań</h1>
            <div className="formBody">

                <p>Imie:</p>
                <input
                    type="text"
                    onChange={e=> setName(e.target.value)}
                    className="form"/>
                <p>Wybierz sprzęt:</p>
                <select className="form" onChange={e=> setRented(e.target.value)}>
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
                    defaultValue="1"
                    id="suwak"/>
                <a id="godziny">{rentalTime}</a>
                {rented=="Omega" && <h4 className="pop">UWAGA: Wymagany patent!</h4>}
                <p><label>Kapok (+5zł): <input type="checkbox" onChange={e=> setSafetyJacket(e.target.checked)}/></label></p>
                <label>Instruktor (50zl/h): <input type="checkbox" onChange={e=> setInstructorHired(e.target.checked)}/></label>
                <p>Metoda płatności:</p>
                <select
                    onChange={e=> setPaymentMethod(e.target.value)}
                    defaultValue="Karta"
                    className="form">
                    <option>Karta</option>
                    <option>BLIK</option>
                </select><br></br>
                <label>Akceptuje regulamin: <input type="checkbox" onChange={e=> setRules(e.target.checked)}/></label>
                <div id="cena">
                <h4>Podgląd ceny: {calculatePrice()}</h4>
                </div>
                <button id="klikacz" onClick={handleSubmit}>Rezerwacja</button>
                <h2 className="pop">{summary}</h2>
            </div>



            </div>
        </>
    )
}
