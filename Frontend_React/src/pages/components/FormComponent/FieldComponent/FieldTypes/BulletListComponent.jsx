import React from "react";

function BulletListComponent(props) {
    let bulletList = props.bulletList;

    return (<>
        <ul>
            {
                bulletList.map(entry => {
                    return <li key={entry}>{entry}</li>
                })
            }
        </ul>
    </>
    )
}

export default BulletListComponent;