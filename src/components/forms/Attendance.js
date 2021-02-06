import React from 'react';

function Attendance()
{
    return (
        <div className="nio">
            <h1>Attendance</h1>
            <br/>
            <form>
            <div className="form-group">
                     <label htmlFor="batch_id">Batch_number</label>
                     <input type="number" name="batch_id" id="batch_id"/>
                 </div>
                 <input type="submit" value="get details" />
                 </form>
        </div>
    )
}
export default Attendance;