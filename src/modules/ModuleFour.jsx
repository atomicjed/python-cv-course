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

export default function ModuleFour({ moduleNumber }) {
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
        <Header navigation={module4NavItems} />
        <Hero video={'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module4%2FIMG_2380_1.mp4?alt=media&token=677e8f4a-ed50-4e71-92cb-645f46a16f9b'} videoThumbnail={"https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module4%2FThumb.png?alt=media&token=51d35202-4fa9-40be-95da-6b13f01f589e"} title={"Building a Real-Time Image Similarity Search Pipeline"} subHeading={"Dive into the realms of AI and Machine Learning!"} />
        <InfoSection sectionId={'intro'} content={Introduction} isFirst />
        <InfoSection sectionId={'neural'} content={NeuralNetworks} />
        <InfoSection sectionId={'vector'} content={VectorDatabases} />
        <InfoSection sectionId={"task"} content={TaskAtHand} />
        <InfoSection sectionId={"python"} content={PythonSetUp} />
        <InfoSection sectionId={"connect"} content={ConnectingToWeaviate} />
        <InfoSection sectionId={"vectorise"} content={vectoriseImages} />
        <InfoSection sectionId={"insert"} content={InsertImages} />
        <InfoSection sectionId={"build"} content={BuildingTheProgram} />
        <InfoSection sectionId={"reflect"} content={Reflect} />
        <SubmitWork moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} submittedWork={submittedWork} />
      </div>

      <ButtonGradient/>
    </>
  )
}