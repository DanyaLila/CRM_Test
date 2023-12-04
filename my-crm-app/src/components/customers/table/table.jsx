import React, {useState, useEffect} from 'react';
import t from "./table.module.css";
import Tbody from "./tbody/tbody";
import DataName from "./Data/DataName/dataName";
import Company from "./Data/DataCompany/company";
import Phone from "./Data/DataPhone/phone";
import Email from "./Data/DataEmail/email";
import Country from "./Data/DataContry/country";
import Status from "./Data/DataStatus/status";

const CRMTable = (props) => {
    const [data, setData] = useState([]);


    return (
        <section className={t.wrapperTable}>
                <table>
                    <tr className={t.mainTitle}>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Phone number</td>
                        <td>Email</td>
                        <td>Country</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <DataName name="Jane Cooper"/>
                        <Company company="Microsoft"/>
                        <Phone phone="(225) 555-0118"/>
                        <Email email="jane@microsoft.com"/>
                        <Country country="United States"/>
                        <Status status="Active"/>
                    </tr>
                    <tr>
                        <DataName name="Floyd Miles"/>
                        <Company company="Yahoo"/>
                        <Phone phone="(205) 555-0100"/>
                        <Email email="floyd@yahoo.com"/>
                        <Country country="Kiribati"/>
                        <Status status="Inactive" clasName={t.inactive}/>


                    </tr>
                    <tr>
                        <DataName name="Ronald Richards"/>
                        <Company company="Adobe"/>
                        <Phone phone="(302) 555-0107"/>
                        <Email email="ronald@adobe.com"/>
                        <Country country="Israel"/>
                        <Status status="Inactive"/>
                    </tr>
                    <tr>
                        <DataName name="Marvin McKinney"/>
                        <Company company="Tesla"/>
                        <Phone phone="(252) 555-0126"/>
                        <Email email="marvin@tesla.com"/>
                        <Country country="Iran"/>
                        <Status status="Active"/>
                    </tr>
                    <tr>
                        <DataName name="Jerome Bell"/>
                        <Company company="Google"/>
                        <Phone phone="(629) 555-0129"/>
                        <Email email="jerome@google.com"/>
                        <Country country="Réunion"/>
                        <Status status="Active"/>
                    </tr>
                    <tr>
                        <DataName name="Kathryn Murphy"/>
                        <Company company="Microsoft"/>
                        <Phone phone="(406) 555-0120"/>
                        <Email email="kathryn@microsoft.com"/>
                        <Country country="Curaçao"/>
                        <Status status="Active"/>
                    </tr>
                    <tr>
                        <DataName name="Jacob Jones"/>
                        <Company company="Yahoo"/>
                        <Phone phone="(208) 555-0112"/>
                        <Email email="jacob@yahoo.com"/>
                        <Country country="Brazil"/>
                        <Status status="Active"/>
                    </tr>
                    <tr>
                        <DataName name="Kristin Watson"/>
                        <Company company="Facebook"/>
                        <Phone phone="(704) 555-0127"/>
                        <Email email="kristin@facebook.com"/>
                        <Country country="Åland Islands"/>
                        <Status status="Inactive"/>
                    </tr>
                </table>
                {/*<Tbody name='Danya' company='Microsoft' phone='0968314419'*/}
                {/*       email="jane@microsoft.com" country="United States" status="Active"/>*/}
                {/*<Tbody name='Danya' company='Microsoft' phone='0968314419'*/}
                {/*       email="jane@microsoft.com" country="United States" status="Active"/>*/}
                {/*<Tbody name='Danya' company='Microsoft' phone='0968314419'*/}
                {/*       email="jane@microsoft.com" country="United States" status="Active"/>*/}
                {/*<Tbody name='Danya' company='Microsoft' phone='0968314419'*/}
                {/*       email="jane@microsoft.com" country="United States" status="Active"/>*/}
                {/*<Tbody name='Danya' company='Microsoft' phone='0968314419'*/}
                {/*       email="jane@microsoft.com" country="United States" status="Active"/>*/}
        </section>
    );
};

export default CRMTable;