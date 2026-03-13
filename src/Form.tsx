export default function Form(){
    return (
        <>
            <div>
                <form method="POST" action="">
                    <label><input type="text" id="imie"/></label>
                    <label>pojazdy</label>
                    <select id="sprzet" name="sprzet">
                        <option value="nic">wybierz pojazd</option>
                        <option value="Kajak">Kajak</option>
                        <option value="Rower wodny">Rower wodny</option>
                        <option value="Omega">Omega</option>
                    </select>
                    <input type="range"/>

                    <label>kapok<input type="checkbox"/></label>
                    <label>instruktor<input type="checkbox"/></label>
                </form>
            </div>
        </>
    )
}
