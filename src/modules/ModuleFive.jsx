import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {InfoSection} from "../components/InfoSection.jsx";
import {
  computerVisionContent,
  fixingBugsContent,
  librariesContent, module2NavItems, results,
  walkThrough,
} from "../constants/moduleTwoScript.constants.js";
import {SubmitWork} from "../components/SubmitWork.jsx";
import {module2Thumb, module3Thumb} from "../assets/index.js";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseSingleton.js";
import {
  advancedMotionDetectionAlgorithm,
  GaussianMotionDetection,
  module3NavItems, objectDetection, theResults
} from "../constants/moduleThreeScript.constant.js";
import {
  BuildingTheProgram,
  ConnectingToWeaviate, InsertImages,
  Introduction,
  module4NavItems,
  NeuralNetworks, PythonSetUp, Reflect, TaskAtHand,
  VectorDatabases, vectoriseImages
} from "../constants/moduleFourScript.constant.js";
import {
  GetYourselfFamiliar,
  module5NavItems,
  ProjectOverview,
  WalkThrough
} from "../constants/moduleFiveScript.constant.js";

export default function ModuleFive({ moduleNumber }) {
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
        <Header navigation={module5NavItems} />
        <Hero image={"https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/ai-assitant.png?alt=media&token=4aa89e97-ae68-4ead-ae9e-9aa8ada7bf88"} title={"Gaming Accessibility Assistant - Week 1"} subHeading={"Training our First Machine Learning Model!"} />
        <InfoSection sectionId={'project-overview'} content={ProjectOverview} isFirst />
        <InfoSection sectionId={'prerequisites'} content={GetYourselfFamiliar} />
        <InfoSection sectionId={'walkthrough'} content={WalkThrough} />
        <SubmitWork moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} submittedWork={submittedWork} text={'For this submission, submit screenshots of the graphs that your program generates. This is just so I can ensure you’ve got it working and we can move on to the next phase.'} />
      </div>

      <ButtonGradient/>
    </>
  )
}