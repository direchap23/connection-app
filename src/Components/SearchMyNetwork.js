import React from 'react';

function SearchMyNetwork(props) {
    return (
    <div>
        <h1 className="font-sans text-lg text-gray-800 font-bold p-3">My Connections</h1>
        <div className="pt-2 pl-3">
        <p>Search my network</p>
        <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-1/4" type="email" placeholder="Enter name, company, email, phone"></input>
        </div>
    </div>
    );
}

export default SearchMyNetwork;