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

export default function ModuleThree({ moduleNumber }) {
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
        <Header navigation={module3NavItems} />
        <Hero video={'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module3_VID.mp4?alt=media&token=5c90c25d-8153-4c90-801d-e05811363a15'} videoThumbnail={module3Thumb} title={"Advanced Motion and Object Detection"} subHeading={"Build on your existing computer vision knowledge to build a optimised program"} />
        <InfoSection sectionId={'gaussian'} content={GaussianMotionDetection} isFirst />
        <InfoSection sectionId={'advanced'} content={advancedMotionDetectionAlgorithm} />
        <InfoSection sectionId={"results"} content={theResults} />
        <InfoSection sectionId={"object"} content={objectDetection} />
        <SubmitWork moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} submittedWork={submittedWork} />
      </div>

      <ButtonGradient/>
    </>
  )
}