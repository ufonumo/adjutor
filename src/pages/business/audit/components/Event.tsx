import Card from "../../../../components/Card/card";
import Tables from "../../../../components/Table/tables";
import useWindowSize from "../../../../hooks/useWindowSize";
import { eventColumnData, eventDataSource } from "./models/auditData";

const EventAudit = () => {
    const { width } = useWindowSize();

    return (
        <div>
            {width < 768 ? (
                <div className="mobile_card_container">
                    {eventDataSource.map((list, index) => (
                        <Card variant="default" key={index}>
                            <div key={index}>
                                <h3>When: {list.when}</h3>
                                <p>Member : {list.member}</p>
                                <p>Event: {list.event}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <Tables header="Events" dataSource={eventDataSource} columns={eventColumnData} />
            )}
        </div>
    );
};

export default EventAudit;
