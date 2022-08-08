import Card from "../../../../components/Card/card";
import Tables from "../../../../components/Table/tables";
import useWindowSize from "../../../../hooks/useWindowSize";
import { pricingColData, pricingDataSource } from "../../models/tabData";

const Pricing = () => {
    const { width } = useWindowSize();

    return (
        <div>
            {width < 768 ? (
                <div>
                    <h3 className="heading3">Endpoint URL Pricing</h3>

                    {pricingDataSource.map((list, index) => (
                        <Card variant="default" key={index}>
                            <div key={index}>
                                <h3>Endpoint: </h3>
                                <span>{list.endpoint}</span>
                                <h3>Amount :</h3>
                                <span> {list.price}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <Tables
                    header="Endpoint URL Pricing"
                    dataSource={pricingDataSource}
                    columns={pricingColData}
                />
            )}
        </div>
    );
};

export default Pricing;
