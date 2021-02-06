import React from 'react';
import "./Session.css";
function Group()
{
    return (
        <form>
            <div className="form-inner">
                 <h2>Create Group</h2>
                 <div className="form-group">
                     <label htmlFor="group_id">Group id</label>
                     <input type="number" name="group_id" id="group_id"/>
                 </div>

                 <div className="form-group">
                 <label htmlFor="assignment_name">Group Name</label>
                 <input type= "text" name="assignment_name" id="assignement_name"/>
                 </div>
                 

                <input type="submit" value="Add Group" />
            </div>




        </form>

    )
}
export default Group;