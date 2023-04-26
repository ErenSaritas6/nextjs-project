//our-domain/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React from "react";
import Head from "next/head";

function NewMeetupPage() {

    function addMeetupHandler(enteredMeetupData) {
        
    }

    return(
        <React.Fragment>
            <Head>
              <title>Add a New Meetup</title>
              <meta name="description" content="Add your own meetups."/>  
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </React.Fragment>
    );
}

export default NewMeetupPage;