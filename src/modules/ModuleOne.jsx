import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import {InfoSection} from "../components/InfoSection.jsx";
import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import {
  conditionalStatementsContent, dataStructuresContent,
  dataTypesContent, functionsContent, loopsContent, memoryContent, module1NavItems,
  whatIsPythonContent
} from "../constants/moduleOneScript.constant.js";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebaseSingleton.js";
import {useEffect, useState} from "react";
import {SubmitMessage} from "../components/SubmitMessage.jsx";

export default function ModuleOne({ moduleNumber }) {
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
        <Header navigation={module1NavItems}/>
        <Hero 
          title={"Python Basics"}
          subHeading={"\"Fear not the man who has practiced 10,000 kicks once, fear the man who has practiced one kick 10,000 times.\""}
          video={'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/CourseIntro.mp4?alt=media&token=fae79143-daf3-4493-b72a-95846396103d'}
          videoThumbnail={'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/CourseIntroThumbnail.png?alt=media&token=6f74ebef-16de-4f38-b86a-18406df16b72'}
        />
        <InfoSection sectionId={'introduction'} content={whatIsPythonContent} isFirst/>
        <InfoSection sectionId={'data-types'} content={dataTypesContent}/>
        <InfoSection sectionId={'data-structures'} content={dataStructuresContent}/>
        <InfoSection sectionId={'conditionals'} content={conditionalStatementsContent}/>
        <InfoSection sectionId={'loops'} content={loopsContent}/>
        <InfoSection sectionId={'functions'} content={functionsContent}/>
        <InfoSection sectionId={'memory'} content={memoryContent}/>
        <SubmitMessage submittedWork={submittedWork} moduleNumber={moduleNumber} onUpdate={fetchSubmittedWork} />
      </div>

      <ButtonGradient/>
    </>
  );
}