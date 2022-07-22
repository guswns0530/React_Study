import { createBrowserHistory } from "history";
import React from "react";
import { useParams, useLocation } from 'react-router-dom'

const WithRouterSample = () => {
    const history = createBrowserHistory({ window })

    const param = useParams()
    const locatoin = useLocation()

    return (
        <div>
            <h4>locatoin</h4>
            <textarea
                value={JSON.stringify(locatoin, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(param, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button
                onClick={() => {
                    history.push('/')
                    history.go('/')
                }}
            >
                홈으로
            </button>
        </div>
    )
}

export default WithRouterSample