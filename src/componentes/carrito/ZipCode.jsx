
import React from 'react'
import {  Form } from 'react-bootstrap'
import swal from 'sweetalert';

export const ZipCode = ({ setEnvio }) => {

    const changeCode = (e) => {
        const { value, name } = e.target;
        const codPostal = { [name]: value }
        const send = codPostal

        if (send.zip === "28040" || send.zip === "28003" || send.zip === "28004" || send.zip === "28005" || send.zip === "28008"
            || send.zip === "28010" || send.zip === "28011" || send.zip === "28012" || send.zip === "28013" || send.zip === "28014"
            || send.zip === "28015") {
            setEnvio(8.40);
        } else if (send.zip === "28001" || send.zip === "28002" || send.zip === "28006" || send.zip === "28007" || send.zip === "28009"
            || send.zip === "28019" || send.zip === "28020" || send.zip === "28027" || send.zip === "28028" || send.zip === "28039"
            || send.zip === "28045") {
            setEnvio(11.00);
        } else if (send.zip === "28016" || send.zip === "28017" || send.zip === "28018" || send.zip === "28023" || send.zip === "28025"
            || send.zip === "28026" || send.zip === "28030" || send.zip === "28031" || send.zip === "28036" || send.zip === "28038"
            || send.zip === "28041" || send.zip === "28043" || send.zip === "28047" || send.zip === "28053") {
            setEnvio(13.00);
        } else if (send.zip === "28021" || send.zip === "28022" || send.zip === "28024" || send.zip === "28029" || send.zip === "28032"
            || send.zip === "28033" || send.zip === "280304" || send.zip === "28035" || send.zip === "28037" || send.zip === "28044"
            || send.zip === "28046" || send.zip === "28050" || send.zip === "28054" || send.zip === "28055") {
            setEnvio(14.00);
        } else if (send.zip === "28052" || send.zip === "28051" || send.zip === "28048" || send.zip === "28049" || send.zip === "28042") {
            setEnvio(15.20);
        } else {
            setEnvio(0)
            swal('Porfavor selecciona un Codigo') 
        }
    }


    return (
        <div className='m-1 d-flex flex-column justify-content-center'>
            <p className='m-1 text-center'>Calcula tu envío</p>
            <div className="mb-3 d-flex align-items-center justify-content-center" >
                <Form.Select
                    className="codigo-postal text-center"
                    type="text"
                    name="zip"
                    onChange={(e) => changeCode(e)}
                    defaultValue={'default'}
                >
                    <option value="default" disabled >Pon tu codigo postal</option>
                    <option value="28001">28001</option>
                    <option value="28002">28002</option>
                    <option value="28003">28003</option>
                    <option value="28004">28004</option>
                    <option value="28005">28005</option>
                    <option value="28006">28006</option>
                    <option value="28007">28007</option>
                    <option value="28008">28008</option>
                    <option value="28009">28009</option>
                    <option value="28010">28010</option>
                    <option value="28011">28011</option>
                    <option value="28012">28012</option>
                    <option value="28013">28013</option>
                    <option value="28014">28014</option>
                    <option value="28015">28015</option>
                    <option value="28016">28016</option>
                    <option value="28017">28017</option>
                    <option value="28018">28018</option>
                    <option value="28019">28019</option>
                    <option value="28020">28020</option>
                    <option value="28021">28021</option>
                    <option value="28022">28022</option>
                    <option value="28023">28023</option>
                    <option value="28024">28024</option>
                    <option value="28025">28025</option>
                    <option value="28026">28026</option>
                    <option value="28027">28027</option>
                    <option value="28028">28028</option>
                    <option value="28029">28029</option>
                    <option value="28030">28030</option>
                    <option value="28031">28031</option>
                    <option value="28032">28032</option>
                    <option value="28033">28033</option>
                    <option value="28034">28034</option>
                    <option value="28035">28035</option>
                    <option value="28036">28036</option>
                    <option value="28037">28037</option>
                    <option value="28038">28038</option>
                    <option value="28039">28039</option>
                    <option value="28040">28040</option>
                    <option value="28041">28041</option>
                    <option value="28042">28042</option>
                    <option value="28043">28043</option>
                    <option value="28044">28044</option>
                    <option value="28045">28045</option>
                    <option value="28046">28046</option>
                    <option value="28047">28047</option>
                    <option value="28048">28048</option>
                    <option value="28049">28049</option>
                    <option value="28050">28050</option>
                    <option value="28051">28051</option>
                    <option value="28052">28052</option>
                    <option value="28053">28053</option>
                    <option value="28054">28054</option>
                    <option value="28055">28055</option>
                </Form.Select>
            </div>

        </div>
    )
}