import React from "react";
import { v4 as id } from "uuid";

function Grudge({ grudge: { person, reason, forgiven }, onForgive }) {
    const forgive = () => onForgive(id);
    return (
        <div>
            <h3>{person}</h3>
            <p>{reason}</p>
            <label htmlFor="forgiven">Forgiven</label>
            <input
                type="checkbox"
                id="forgiven"
                checked={forgiven}
                onChange={forgive}
            />
        </div>
    );
}

export default Grudge;
