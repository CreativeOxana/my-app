import { useState } from 'react';
import './App.css';
import { Activity } from './components/activity';
import { Form } from './components/form';
import { FormData } from './components/form';

interface ActivityDataStructure {
  accessibility: number;
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}

function App() {
  const [activityData, setActivityData] = useState<ActivityDataStructure>();
  const fetchData = async (type: string): Promise<ActivityDataStructure> => {
    const res = await fetch(
      `http://www.bored-api.appbrewery.com/filter?type=${type}`,
    );
    const data = await res.json();
    setActivityData(data);
    return data;
  };

  const handleSubmitForm = (data: FormData) => {
    fetchData(data.type);
  };

  return (
    <>
      <Form onSubmitForm={handleSubmitForm} />
      {activityData && (
        <Activity
          nameOfActivity={activityData?.activity}
          type={activityData?.type}
          participants={activityData?.participants}
        />
      )}
      ;
    </>
  );
}

export default App;
