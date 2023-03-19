import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h3> <u> Info Page </u> </h3>
      <h2>
        The place where managing crews, contracts and another 'C' word that
        would make a complete and catchy statement, are all managed with ease.
      </h2>

      <h2>
        An application designed with effective communication of crews in mind. Making
        ManageMint an easy on-stop-shop. As we're growing into the world's leading providers
        of staffing services, we're always striving to improve our products and how our clients and
        customers are able to interact with them.

        While keeping track of all things business can be difficult, we've created a one-of-a-kind
        application that is set to change the way ManageMint is viewed throughout the world. We currently
        have a full-stack program that allows management to create and maintain better
        job and staff organization. Giving managers access to CRUD new jobs, providing necessary job
        details essential for crews to do their best work.


        Also giving access to project staff, who have created accounts, access to more detailed
        information about job scopes that will prove to better prepare them for the workload ahead
        and allowing them to also keep track of their hard earned labor hours for pension credits
        and proper payouts on checkstubs.
      </h2>
    </div>
  );
}

export default InfoPage;
