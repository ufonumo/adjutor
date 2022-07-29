import { useFormikContext } from "formik";
import Input from "../../../components/Input/input";
import UploadInput from "../../../components/UploadInput/UploadInput";

const Documents = () => {
    const { setFieldValue } = useFormikContext();

    return (
        <div>
            <div className="header">
                <h1>You’re almost there.</h1>
                <p>Provide your business documents.</p>
            </div>
            <Input
                type="text"
                name="addressOne"
                onChange={(e) => {
                    setFieldValue("addressOne", e.target.value);
                }}
                placeholder="RC Number"
                label="RC Number "
            />
            <UploadInput
                type="file"
                name="COC"
                onChange={(e) => {
                    setFieldValue("COC", e.target.files);
                }}
                text="Upload document"
                label="Certificate of Incorporation "
            />{" "}
            <UploadInput
                type="file"
                name="memart"
                onChange={(e) => {
                    setFieldValue("memart", e.target.files);
                }}
                text="Upload document (png,jpeg, Less than 5mb)"
                label="MEMART"
            />
            <UploadInput
                type="file"
                name="COC"
                onChange={(e) => {
                    setFieldValue("companyLogo", e.target.files);
                }}
                text="Upload document"
                label="Company Logo "
            />
            <UploadInput
                type="file"
                name="COC"
                onChange={(e) => {
                    setFieldValue("companyIcon", e.target.files);
                }}
                text="Upload document"
                label="Company Logo Icon"
            />
        </div>
    );
};

export default Documents;
