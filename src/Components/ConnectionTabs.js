import React from 'react';

function ConnectionTabs() {
    let url = "#";
    return (
        <div className="p-3">
            <ul className="flex bg-gray-100 p-3">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href={url}>All Connections</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href={url}>Active</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href={url}>Inactive</a>
                </li>
                {/* <li className="mr-6">
                    <a className="text-gray-400 cursor-not-allowed" href={url}>Disabled</a>
                </li> */}
            </ul>
        </div>
    );
}

export default ConnectionTabs;