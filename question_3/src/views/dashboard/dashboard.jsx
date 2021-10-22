import {React} from 'react';

import TopBar from '../../components/topnavbar';
import StickyHeadTable from '../table';
import tables from '../../tables.json';
import { TableTitle } from '../title';
import { modelColumns } from '../../models/columns';
import { PitchingServices } from '../../services/pitchingServices';

const Dashboard = (props) => {

    const pitchingServices = new PitchingServices();

    const tableContent = tables.map((table) =>
        table.table
    );

    const headerContent = tables.map((table) =>
        table.headers
    );

    // Question 2 - Hardest Pitches thrown
    let table1headers = headerContent[1].map((header) =>
        header
    );
    let columns2 = modelColumns(table1headers);
    let rows2 = pitchingServices.top10HardestPitchesThrown(props.valueFromParent);

    // Question 3 - Avg 4-seam fastball for both teams
    let table2headers = headerContent[2].map((header) =>
        header
    );
    let columns3 = modelColumns(table2headers);
    let rows3 = pitchingServices.averageFourSeamFastball();

    return(
        <div>
        <TopBar />
        <br/>
        <br/>
        <br/>

        <div>
            <TableTitle title={tableContent[1]}></TableTitle>
            <StickyHeadTable 
            rows={rows2}
            columns={columns2}
            />
            <br/>
        </div>

        <div>
            <TableTitle title={tableContent[2]}></TableTitle>
            <StickyHeadTable 
            rows={rows3}
            columns={columns3}
            />
            <br/>
        </div>
        
        </div>
    )
}

export { Dashboard };