import {React, useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';

// Internal imports
import TopBar from '../../components/topnavbar';
import StickyHeadTable from '../../components/table';
import SearchBar from '../../components/searchbar';
import tables from '../../tables.json';
import { TableTitle } from '../title';
import { modelColumns } from '../../models/columns';
import { PitchingServices } from '../../services/pitchingServices';
import APIClient from '../../services/apiHandler';

const Dashboard = () => {

    const pitchingServices = new PitchingServices();
    const client = new APIClient();
    const [pitch, setPitch] = useState('four_seam');
    const [data, setData] = useState(null);
    const [row1, setRow1] = useState(null);
    const [row2, setRow2] = useState(null);
    const [row3, setRow3] = useState(null);

    const getData = () => {
        client.getPitchers()
        .then((resp) => {
            setData(resp);
            loadTableData(resp);
        })
        .catch((error) => {
            console.log("Something strange happened: ", error);
        });
    };

    // Fetch data
    useEffect(() => {
        getData();
    }, []);

    const loadTableData = (data) => {
        let rows1 = pitchingServices.fastest4SeamPitchers(data);
        let rows2 = pitchingServices.highestSpinRate(data, pitch);
        let rows3 = pitchingServices.mostPitchesThrown(data);
        setRow1(rows1);
        setRow2(rows2);
        setRow3(rows3)
    };

    const handleChange = (event) => {
        setPitch(event.target.value);
        let rows2 = pitchingServices.highestSpinRate(data, event.target.value);
        setRow2(rows2);
    };

    const tableContent = tables.map((table) =>
        table.table
    );

    const headerContent = tables.map((table) =>
        table.headers
    );

    // Table - Hardest Pitches thrown
    let table1headers = headerContent[0].map((header) =>
        header
    );
    let col1 = modelColumns(table1headers);

    // Table - Avg 4-seam fastball for both teams
    let table2headers = headerContent[1].map((header) =>
        header
    );
    let col2 = modelColumns(table2headers);

    // Table - Highest number of pitches
    let table3headers = headerContent[2].map((header) =>
        header
    );
    let col3 = modelColumns(table3headers);

    return(
        <div>
        <TopBar />
        <br/>
        <br/>
        <br/>
        <h4>Search</h4>
        <SearchBar data={data ? data : null}></SearchBar>
        <br/>
        {/* Fastest pitchers */}
        <div>
            <TableTitle title={tableContent[0]}></TableTitle>
            <StickyHeadTable 
            rows={row1}
            columns={col1}
            />
            <br/>
        </div>

        {/* Highest spin rates */}
        <div>
            <br/>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pitch Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pitch}
                label="Pitch Type"
                onChange={handleChange}
                >
                <MenuItem value={"four_seam"}>4-seam</MenuItem>
                <MenuItem value={"change_up"}>Change-up</MenuItem>
                <MenuItem value={"curve"}>Curve</MenuItem>
                <MenuItem value={"cutter"}>Cutter</MenuItem>
                <MenuItem value={"sinker"}>Sinker</MenuItem>
                <MenuItem value={"slider"}>Slider</MenuItem>
                <MenuItem value={"splitter"}>Splitter</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <TableTitle title={tableContent[1]}></TableTitle>
            <StickyHeadTable 
            rows={row2}
            columns={col2}
            />
            <br/>
        </div>

        {/* Most number of pitches */}
        <div>
            <TableTitle title={tableContent[2]}></TableTitle>
            <StickyHeadTable 
            rows={row3}
            columns={col3}
            />
            <br/>
        </div>
        
        </div>
    )
}

export { Dashboard };