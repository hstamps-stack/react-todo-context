import React from "react";

const ListItem = () => {
    return (
        <div className="row">
        <div className="w-50 mx-auto">
            <ul class="list-group">
                    <li className="list-group-item text-left">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        First checkbox
                    </li>
                    <li className="list-group-item text-left">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Second checkbox
                    </li>
                    <li className="list-group-item text-left">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Third checkbox
                    </li>
                </ul> 
            </div>
        </div>
    )
}

export default ListItem;