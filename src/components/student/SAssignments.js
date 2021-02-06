import React from 'react';
import "./SAssignments.css"
function SAssignments()
{
    return (
        <form>
            <div className="form-inner">
                 <h2>Assignment Submission</h2>
                 <div className="form-group">
                     <label htmlFor="assignment_id">Student id</label>
                     <input type="number" name="assignement_id" id="assignement_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="assignment_name">Assignment id</label>
                 <input type= "text" name="assignment_name" id="assignement_name"/>
                 </div>
                 <div className="form-group">
                 <label htmlFor="session_id">Link</label>
                 <input type= "text" name="session_id" id="session_id"/>
                 </div>
               

                <input type="submit" value="submit" />
            </div>




        </form>

    )
}
export default SAssignments;