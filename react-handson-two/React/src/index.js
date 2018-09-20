import React from 'react';
import ReactDOM from 'react-dom';

const state1 = 'Idaho';
const population1 = '1.683 mil';
const capital1 = 'Boise';

const state2 = 'Tennessee';
const population2 = '6.651 mil';
const capital2 = 'Nashville';

const state3 = 'Maine';
const population3 = '1.331 mil';
const capital3 = 'Agusta';

const state4 = 'Wisconsin';
const population4 = '5.779 mil';
const capital4 = 'Madison';


const tblData = (state, population, capital) => {
    return (
        <table>
            <tr>
                <th>{state}</th>
                <th>{population}</th>
                <th>{capital}</th>
            </tr>
            <tr>
                <td>{state1}</td>
                <td>{population1}</td>
                <td>{capital1}</td>
            </tr>
            <tr>
                <td>{state2}</td>
                <td>{population2}</td>
                <td>{capital2}</td>
            </tr><tr>
                <td>{state3}</td>
                <td>{population3}</td>
                <td>{capital3}</td>
            </tr>
            <tr>
                <td>{state4}</td>
                <td>{population4}</td>
                <td>{capital4}</td>
            </tr>
        </table>
    );
};

ReactDOM.render(
    tblData('State','Population','Capital'),
document.getElementById('root')
);

// Given the below table, write it in JSX. Meet the below requirements:

// You must use a function
// The function must have the same amount of parameters as the table has headers
// Use curly braces

