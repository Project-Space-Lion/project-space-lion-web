import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return (
        <div className="content content-margined">
        <div className="Fulfillment-header">
        <h3>Fulfillments</h3>
        </div>
        <div className="fulfillment-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>USER</th>
                        <th>PAID</th>
                        <th>PAID AT</th>
                        <th>Address</th>
                        <th>DELIVERED</th>
                        <th>DELIVERED AT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.fulfillment.map(fulfillment => (<tr key={fulfillment._id}>
                        <td>{fulfillment._id}</td>
                        <td>{fulfillment.createdAt}</td>
                        <td>{fulfillment.totalPrice}</td>
                        <td>{fulfillment.user.name}</td>
                        <td>{fulfillment.isPaid.toString()}</td>
                        <td>{fulfillment.paidAt}</td>
                        <td>{fulfillment.address}</td>
                        <td>{fulfillment.isDelivered.toString()}</td>
                        <td>{fulfillment.deliveredDate}</td>
                        <td>
                            <Link to={"/fulfillment/" + fulfillment._id} className="button secondary" >Details</Link>
                        </td>
                 </tr>))}
                </tbody>

            </table>
        </div>
        </div>);

};

export default Fulfillment;