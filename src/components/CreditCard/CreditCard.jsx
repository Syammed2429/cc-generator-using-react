

let CreditCard = ({ data }) => {
    return (
        <>
            <div
            >
                {data.map((e) => (

                    <div className="cdata"
                        style={{

                            border: "1px solid red"
                        }
                        }>
                        <span className="cTitle">Visa</span>
                        <div>
                            {e.cNumber}
                        </div>
                        <div className="rowData">

                            Card Holder {e.cName}
                            <div>
                                Expires {e.month}/{e.year}
                            </div>
                            <div>
                                CVC {e.cvv}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export { CreditCard }