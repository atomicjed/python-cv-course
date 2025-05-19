import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {InfoSection} from "../components/InfoSection.jsx";
import {SubmitWork} from "../components/SubmitWork.jsx";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseSingleton.js";
import {
  CompleteFeedbackLoop,
  DefineConstants,
  Disclaimer,
  GetUpToSpeed, ImproveAccuracy, moduleSixNavItems,
  ProgramOverview,
  ProjectOverview,
  SetUpYourEnvironment, WriteProgramToPredictLowVisionGameScenes, WriteUserFeedbackClass
} from "../constants/moduleSixScript.js";

export default function ModuleSix({ moduleNumber }) {
  const [submittedWork, setSubmittedWork] = useState([]);

  useEffect(() => {
    void fetchSubmittedWork();
  }, []);

  async function fetchSubmittedWork() {
    try {
      const submittedWorkCollectionRef = collection(db, `Module${moduleNumber}`);
      const submittedWorkDocs = await getDocs(submittedWorkCollectionRef);

      const data = submittedWorkDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSubmittedWork(data);
    } catch(e) {
      console.error('Error fetching work:', e);
    }
  }
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header navigation={moduleSixNavItems} />
        <Hero image={"https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/ai-assitant.png?alt=media&token=4aa89e97-ae68-4ead-ae9e-9aa8ada7bf88"} title={"Gaming Accessibility Assistant - Weeks 3 & 4"} subHeading={"Improving the Accuracy of our Low Vision Gaming Classifier"} />
        <InfoSection sectionId={'project-overview'} content={ProjectOverview} isFirst />
        <InfoSection sectionId={'prerequisites'} content={Disclaimer} />
        <InfoSection sectionId={'get-up-to-speed'} content={GetUpToSpeed} />
        <InfoSection sectionId={'program-overview'} content={ProgramOverview} />
        <InfoSection sectionId={'set-up-environment'} content={SetUpYourEnvironment} />
        <InfoSection sectionId={'define-constants'} content={DefineConstants} />
        <InfoSection sectionId={'predict-low-vision'} content={WriteProgramToPredictLowVisionGameScenes} />
        <InfoSection sectionId={'user-feedback-class'} content={WriteUserFeedbackClass} />
        <InfoSection sectionId={'complete-feedback-loop'} content={CompleteFeedbackLoop} />
        <InfoSection sectionId={'improve-accuracy'} content={ImproveAccuracy} />
        <SubmitWork moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} submittedWork={submittedWork} text={'For this submission, submit screenshots of the improved evaluation graphs that you generated from a result of the regularisation. This is just so I can ensure you’ve got it working and we can move on to the next phase.'} />
      </div>

      <ButtonGradient/>
    </>
  )
}