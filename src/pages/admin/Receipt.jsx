import { useEffect, useState } from 'react';
import axios from 'axios';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import ReceiptPop from './ReceiptPop';


export default function Receipt() {
    const [receipts, setReceipts] = useState([]);
    try {
        useEffect(() => {
            axios.get("http://localhost:4000/apis/v1/receipts")
                .then(res => {
                    console.log("res", res.data.data)
                    setReceipts(res.data.data)
                })
                .catch(err => {
                    console.log("err", err)
                })

        }, [])
    } catch (err) {
        // console.log("err", err);
    }
    useEffect(() => {
        console.log("receipts", receipts.receipt_details)
    }, [receipts])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Receipt Code</th>
                        <th scope="col">Pay Mode</th>
                        <th scope="col">Paid</th>
                        <th scope="col">Total</th>
                        <th scope="col">Create At</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts?.map((item, index) => (
                        <tr key={randomId()}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.receipt_code}</td>
                            <td>{item.pay_mode}</td>
                            <td>{item.paid ? "PAID" : "UNPAID"}</td>
                            <td>{convertToUSD(item.total)}</td>
                            <td>{item.create_at}</td>
                            <td>{item.users.user_name}</td>
                            <td><ReceiptPop receiptDetails={item.receipt_details} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
