import Button from "./components/Button/button";
import "./assets/stylesheets/base.scss";
import "antd/dist/antd.css";
import Input from "./components/Input/input";
import Card from "./components/Card/card";
import MultiSelect from "./components/Multiselect/multiselect";
import Select from "./components/Select/select";
import DropArea from "./components/DropArea/dropArea";
import ToolTips from "./components/ToolTip/toolTip";
import Tables from "./components/Table/tables";

function App() {
    const handleChange = (value: any) => {};
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    return (
        <div className="App" style={{ width: "300px", marginTop: "100px", margin: "auto" }}>
            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Input label="Email *" type="email" name="email" placeholder="email" />

            <Card variant="yellow" image="https://via.placeholder.com/50x50" subtitle="Total">
                <h1>Card</h1>
            </Card>

            <MultiSelect placeholder="Connect" handleChange={handleChange} icon={<img alt="" />}>
                {new Array(5).fill(0).map((_, index) => (
                    <option key={index}>China</option>
                ))}
            </MultiSelect>
            <Select
                placeholder="Select"
                options={[
                    { title: "Today", value: "present" },
                    { title: "Tomorrow", value: "future" },
                    { title: "Yesterday", value: "past" },
                ]}
                onChange={handleChange}
            />

            <DropArea name="drop" />

            <ToolTips
                title="Press hold to select and drag each tab
up and down to set your sequence"
                icon={<img src="https://via.placeholder.com/50x50" alt="" />}
            />

            <Tables columns={columns} dataSource={dataSource} header="Users" />
        </div>
    );
}

export default App;
