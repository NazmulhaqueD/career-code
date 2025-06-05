import React, { Suspense, useContext } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationsList from './ApplicationsList';
import { myApplicationsPromise } from '../../API/myApplicationsApi';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const MyApplications = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={'Your applications loading......'}>
                <ApplicationsList
                    myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationsList>
            </Suspense>
        </div>
    );
};

export default MyApplications;