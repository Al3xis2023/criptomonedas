import React from "react";
import CoinRow from "./CoinsRows";

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume', 'Last 7 Days']      /*valores que deseo visualizar */

const TableCoins = ({coins}) => {
    return (                                                            /* Algunos estilos y efectos*/
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {
                        titles.map(title => (
                            <td>{title}</td>
                        ))
                    }
                </tr>
                <tr>
                   
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (                   /*quiero que haga el recorrido moneda por moneda.visualización por nombre o lo que se desee */
                    <CoinRow coin={coin} key={index} index={index + 1 } />
                ))}
            </tbody>
        </table>
    );
};

export default TableCoins;