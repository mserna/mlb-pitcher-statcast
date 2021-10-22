import {React, useState} from 'react';

import TopBar from '../../components/topnavbar';
import StickyHeadTable from '../table';
import questions from '../../questions.json';
import { Question } from '../question';
import { modelColumns } from '../../models/columns';
import { PitchingServices } from '../../services/pitchingServices';

const Questionaire = (props) => {

    const pitchingServices = new PitchingServices();

    const questionContent = questions.map((question) =>
        question.question
    );

    const headerContent = questions.map((question) =>
        question.headers
    );

    // Question 2 - Hardest Pitches thrown
    let question2Headers = headerContent[1].map((header) =>
        header
    );
    let columns2 = modelColumns(question2Headers);
    let rows2 = pitchingServices.top10HardestPitchesThrown(props.valueFromParent);

    // Question 3 - Avg 4-seam fastball for both teams
    let question3Headers = headerContent[2].map((header) =>
        header
    );
    let columns3 = modelColumns(question3Headers);
    let rows3 = pitchingServices.averageFourSeamFastball();

    return(
        <>
        <div>
        <TopBar />
        <br/>
        <br/>
        <br/>

        <div>
            <Question question={questionContent[0]}></Question>
            <StickyHeadTable 
            rows={rows1}
            columns={columns1}
            />
            <br/>
        </div>

        <div>
            <Question question={questionContent[1]}></Question>
            <StickyHeadTable 
            rows={rows2}
            columns={columns2}
            />
            <br/>
        </div>

        <div>
            <Question question={questionContent[2]}></Question>
            <StickyHeadTable 
            rows={rows3}
            columns={columns3}
            />
            <br/>
        </div>

        <div>
            <Question question={questionContent[3]}></Question>
            <StickyHeadTable 
            rows={rows4}
            columns={columns4}
            />
            <br/>
        </div>

        <div>
            <Question question={questionContent[4]}></Question>
            <StickyHeadTable 
            rows={rows5}
            columns={columns5}
            />
            <br/>
        </div>

        <div>
            <Question question={questionContent[5]}></Question>
            <StickyHeadTable 
            rows={rows6}
            columns={columns6}
            />
            <br/>
        </div>
        
        </div>
        </>
    )
}

export { Questionaire };