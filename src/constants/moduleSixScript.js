export const moduleSixNavItems = [
  {
    id: "0",
    title: "Project Overview",
    url: "#project-overview"
  },
  {
    id: "1",
    title: "Get up to Speed",
    url: "#get-up-to-speed"
  },
  {
    id: "2",
    title: "Walkthrough",
    url: "#program-overview"
  }
];

export const ProjectOverview = [
  {
    title: 'Project Overview'
  },
  {
    text: 'In our last module we trained a machine learning model to detect low vision scenes in Minecraft. As you’ll recall, we evaluated the model by keeping track of how accurately the model predicted the classes of the data in the validation set. It looked something like this:'
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/accuracy_graph.png?alt=media&token=553f19d9-f1eb-4c70-9687-d3ccf5e57654", alt: ""}],
  },
  {
    text: "Here we encountered one of the biggest challenges in machine learning: the need for large amounts of high-quality data."
  },
  {
    text: 'You can see from the graph that the model performed much better on the training data than the validation data. This pattern makes it obvious that the model is overfitting, where the model learns the training data too well and includes irrelevant details in its predictions. Our problem is that we have too little data so the model doesn’t have enough diverse examples to distinguish between meaningful patterns and random noise.'
  },
  {
    text: 'So we need more data. Instead of manually building up a static dataset, a tedious, never-ending task, we’re going to build a system that lets the model learn on-the-fly as more data comes in. This way, the model will continue to improve naturally over time.'
  },
  {
    text: 'By the end of this module, the performance on the validation set will start to improve with the training accuracy, suggesting the model isn’t overfitting and is detecting meaningful patterns in our image. We will see it start to converge with the accuracy of the training data, a bit like so:'
  },
  {
    images: [{image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2023.01.52.png?alt=media&token=10b0ebb6-8527-43f4-bf2a-09e598af894c', alt: ''}, {image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2021.55.12.png?alt=media&token=ca3ce233-777f-419e-a4e5-679618d5ee85", alt: ""}]
  },
];

export const Disclaimer = [
  {
    title: "Disclaimer"
  },
  {
    text: "You will have to write this program on your PC as you will have to run in it the background whilst you play Minecraft."
  },
  {
    text: "Unfortunately, this means you will have to move your work from the mac to your PC. Don’t worry this shouldn’t be too much trouble. We just need to send the python file to your PC , and set up the environment."
  },
  {
    text: "In the terminal of the project in VS Code, activate your virtual environment:"
  },
  {
    text: "source NAME_OF_YOUR_VENV/bin/activate"
  },
  {
    text: "After this, run:"
  },
  {
    text: "pip freeze > requirements.txt"
  },
  {
    text: "This will list all of the dependencies you installed for the environment, we’ll use this to set up the new one on your PC."
  },
  {
    text: "Now, delete the virtual environment folders, so the project only contains:"
  },
  {
    list: [
      {bulletPoint: "The python file"},
      {bulletPoint: "The data folder"},
      {bulletPoint: "The model you trained in the last module"},
      {bulletPoint: "The requirements.txt file you just created"}
    ]
  },
  {
    text: "Find the project folder in the finder, right click and select “Compress”. This will generate a zip of your project."
  },
  {
    text: "Upload the zip here: "
  },
  {
    link: {link: "https://python-cv-course.netlify.app/file-upload", name: "https://python-cv-course.netlify.app/file-upload"}
  },
  {
    text: "This will give you a link. Open this link on your PC, and this will download the zip. "
  },
  {
    text: "Now, on your PC, simply unzip the project and open it on VS Code."
  },
  {
    text: "Firstly, make sure your python version is in the range 3.8 to 3.11. You can check by running: “python —version” in your terminal. If not, install a 3.10 version (64 bit) from: "
  },
  {link: {link: "https://www.python.org/downloads/windows/", name: "https://www.python.org/downloads/windows/"}},
  {
    text: "To recreate the environment, run:"
  },
  {
    text: "python3.10 -m venv name_of_your_choice"
  },
  {
    text: "To activate it, run:"
  },
  {
    text: "name_of_your_choice\\Scripts\\activate"
  },
  {
    text: "Nearly there! Now reinstall the dependencies downloaded on the previous environment by running:"
  },
  {
    text: "pip install -r requirements.txt"
  },
  {
    text: "Now, try re-running the program you wrote last week. If it works, you're all set to continue with this module!"
  }
];

export const GetUpToSpeed = [
  {
    title: 'Get Yourself Up to Speed'
  },
  {
    text: "Learn about classes:"
  },
  {
    text: "In software development, the Don’t Repeat Yourself (DRY) principle helps us build maintainable, robust systems. So far, we’ve used functions to reuse shared logic by passing inputs and getting outputs."
  },
  {
    text: "However, sometimes we need to reuse not only behaviour, but also state, which is data that persists across multiple function calls. This is the reason we use classes."
  },
  {
    text: "A class is a template for creating objects, which contain functions (called methods) and variables (called attributes). When we create an object from a class, we initialise it with some values, and then use its methods to interact with or modify those values. This solves the problem of manually having to pass round state through many parameters, which can quickly get messy and un-maintainable."
  },
  {
    text: "Learn about classes:"
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/yYALsys-P_w?si=saNzAGSwgCMRKJt9"
  },
  {
    text: "Learn about Incremental Learning:"
  },
  {
    text: "As I mentioned, the more data a model has, the better it can perform, as it will be able to learn patterns that accurately reflect real world data. As we grow our data set, there are two main strategies we can use to retrain our model:"
  },
  {
    text: "Offline learning (also called batch learning): This involves retraining the model from scratch on the entire dataset, old and new. It's like rebuilding the model every time new data becomes available."
  },
  {
    text: "Online learning (also called incremental learning): This involves updating the existing model using only the new data, allowing it to refine itself without starting over."
  },
  {
    text: "Incremental learning allows for continuous learning, where the model keeps getting better over time as more data comes in. It also reduces human involvement once the system is properly developed and monitored."
  },
  {
    text: "On the other hand, batch or offline learning is preferred in scenarios when accuracy, reliability, and control are better. This is because it is more predictable as the data is static and the process is repeatable, making it easier to debug issues and reproduce results. In high risk environments like health care, you’d want to retrain your model with thorough testing and validation before deploying, which is why you would use batch learning."
  },
  {
    text: "In our case, we want to build our dataset rapidly. We also want our model to improve with time as more users use it, so we will be implementing an incremental learning program."
  },
  {
    text: "Learn about incremental learning:"
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/FipRjQRaCz8?si=HOwPqniph1ha5F2M"
  },
  {
    quiz: {
      question: 'What method is called to initialise the attributes, upon the creation of a class?',
      options: [{option: '__init__()', correctAnswer: true}, {option: 'class()', correctAnswer: false}, {option: '__new__()', correctAnswer: false}, {option: 'call()', correctAnswer: false}],
      explanation: 'When a class object is created by calling new SomeClassName(), the __init__ method is called to initialise the object’s attributes and perform any set up.'
    }
  },
  {
    quiz: {
      question: 'What does the self keyword in Python represent?',
      options: [{option: 'A global variable that stores all class names', correctAnswer: false}, {option: 'A special keyword used to create static methods', correctAnswer: false}, {option: 'A reference to the current instance of the class', correctAnswer: true}, {option: 'A placeholder for method parameters in any function', correctAnswer: false}],
      explanation: 'The self is used within class methods to refer to the specific instance of the class that is calling the method. It allows access to instance attributes and other methods within the same object.'
    }
  },
  {
    quiz: {
      question: 'In high-risk applications like medical diagnosis, would you train a model using batch or incremental learning:',
      options: [{option: 'Batch', correctAnswer: true}, {option: 'Incremental', correctAnswer: false}],
      explanation: 'In high-risk domains, accuracy, stability, and thorough validation are critical. Batch learning involves training the model on the entire dataset at once. This allows for extensive testing, validation, and reproducibility before deployment. This makes the model suitable for high-risk applications.'
    }
  },
];

export const ProgramOverview = [
  {
    title: 'Program Overview'
  },
  {
    text: 'You may wonder how machine learning models get so good. Part of the reason is access to massive datasets, but an even bigger reason is their ability to learn from experience. The best models have the fastest feedback loops: they make a prediction, get feedback on whether they were right or wrong, and use that to improve.'
  },
  {
    text: 'Take Google for example, the most used search engine in the world. Their model isn’t better than Microsoft’s Bing just because they had more data. It’s because they started earlier and every search, click, and result has helped the model has helped the model learn. Think about how quick that feedback loop is: within just a few seconds, a user will click the most relevant link, out of a list the model has predicted. This gives the model immediate feedback on how accurate it was, allowing Google to frequently retrain their models on new, up-to-date user interactions.'
  },
  {
    text: 'Google has been doing this for decades, and that’s a big reason they lead the search engine industry.'
  },
  {
    text: 'In this module, we’ll build a fast feedback loop into our model, so it can learn from its mistakes.'
  }
];

export const SetUpYourEnvironment = [
  {
    title: "Set up your Environment"
  },
  {
    text: "We’re going to need two extra libraries, Multiple Screenshots (MSS) and OpenCV."
  },
  {
    text: "MSS allows us to capture screen shots at video-like speed, which will allow us to send snapshots of the screen in minecraft and pass it into our model so it can classify if the scene is low vision. "
  },
  {
    text: "With the virtual environment activated, install both libraries by running:"
  },
  {
    text: "pip install mss opencv-python"
  }
];

export const DefineConstants = [
  {
    title: "Define Constants"
  },
  {
    text: "When the model makes a prediction it outputs a number corresponding to a specific class, rather than the class name. This is just an index and is meaningless to the user."
  },
  {
    text: "To make the result interpretable, we will cross-reference that number with a constant mapping between the index and class name. "
  },
  {
    text: "Create a constants.py file and define the following dictionaries:"
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.29.04.png?alt=media&token=635f4def-5cc2-4d49-b4a8-7f27013e3af3", alt: ""}]
  },
  {
    text: "class_indexes is the same dictionary but the key value pairs are swapped. "
  },
  {
    text: "This is a maintainable solution. When building a system, there should always be one source of truth, one place that would need updating should something change. For example, if I wanted to change the class name from low_vision_dark to just dark, I would need to update this in a single place."
  }
];

export const WriteProgramToPredictLowVisionGameScenes = [
  {
    title: "Write a Program to Predict Low Vision Game Scenes"
  },
  {
    text: "Now, we’ll write a program that continually classifies scenes in a Minecraft game into one of our 4 classes. The program will be run in the background whilst you play the game on big screen."
  },
  {
    text: "Write the code, follow the comments for understanding. Hit the HELP ME button if you have any questions. Remember you can use the stack overflow website as your first point of call if you’re running into any errors."
  },
  {
    text: "Create a low_vision_classifier.py file and begin:"
  },
  {
    images:[{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.33.18.png?alt=media&token=e14a49e2-e62d-4ab7-b8bc-2028cc1fcc85", alt: ""}]
  },
  {
    images:[{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.33.56.png?alt=media&token=2dd0aab2-56db-420e-b7c2-88f32d67c910", alt: ""}]
  },
  {
    images:[{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.34.21.png?alt=media&token=fe6ae6e6-5f8d-4658-906d-540d21757e18", alt: ""}]
  },
  {
    images:[{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.35.24.png?alt=media&token=cdd73b33-82b5-46d0-8d40-81fc9aa8d24e", alt: ""}]
  },
  {
    text: "Nice, now run the program and open up Minecraft (make sure it fills the screen).\n" +
      "Screenshots will be taken of the entire screen every 5 seconds. These will be processed and passed into our ML model. \n"
  },
  {
    text: "After having the program run for a minute, look at the console to see what low vision scenes were detected. If you can see an output of predicted scenes, that’s great progress, let's keep it going!"
  },
];

export const WriteUserFeedbackClass = [
  {
    title: "Write a User Feedback Class to Gather Feedback"
  },
  {
    text: "We’re going to need a way of getting user feedback quickly to allow the model to learn quickly from experience."
  },
  {
    text: "In a production system, this would be done as part of the application, e.g. the user did not need help from our accessible assistant so this is probably not a low vision scene. For now, we’re going to create a pop up window, using the tkinter library to gather feedback when low vision scenes have been detected, and save them to the data set when the user confirms the class the screenshot belongs to."
  },
  {
    text: "We are also going to save the new data to a temporary folder, so we can fine tune our model on it later."
  },
  {
    text: "There is a lot of reused functionality and code here, as well as reused state, being the predicted class and screenshot in-question. Therefore, this would be the perfect scenario to create a LowVisionFeedback class. "
  },
  {
    text: "When a new class object is created with the predicted_class and screenshot values, the variables will be instantiated in the __init__ method, and therefore, methods we write can all operate on this shared state."
  },
  {
    text: "Without further ado.. create a user_feedback.py file, start writing the code, and shout up if you have any questions!"
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.40.51.png?alt=media&token=7b34346c-d586-47e0-9814-fc15153a0c9c", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.41.16.png?alt=media&token=42e3e986-24b7-4da9-a001-5a0bcd019492", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.41.33.png?alt=media&token=150cd76d-831a-4965-998d-415b0092bdf0", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.41.54.png?alt=media&token=e808d280-6491-4c01-a625-1626db7f0cda", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.43.41.png?alt=media&token=88d2bd75-8379-4b56-a21d-efdfe3d53a8b", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.44.04.png?alt=media&token=bd137f7f-79d4-4d8e-a618-25511b866d9e", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.44.37.png?alt=media&token=12f9ed05-3890-47a2-8eb1-43e97de61b05", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.44.53.png?alt=media&token=645c18d9-7d05-457f-97d1-cef5107cf006", alt:""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.45.08.png?alt=media&token=a2108f21-94d8-4103-b548-425d4c50d79d", alt: ""}]
  },
  {
    text: "There is a lot going on there, but by reusing code and state, we can lay out the solution ina clear and maintainable way."
  },
  {
    text: "Nice work! As always, if you have any questions, hit that big blue button and, when you’re ready, let's move on."
  }
];

export const CompleteFeedbackLoop = [
{
  title: "Complete Feedback Loop"
},
  {
    text: "A lot of the heavy work has already been lifted. Now we just need to integrate the LowVisionFeedback class into our low vision classifier program to bring it all together. "
  },
  {
    text: "This is going to build up our data set and our temporary dataset. The temporary dataset will always hold the data that the model hasn’t been trained on. Therefore, when this temporary dataset gets large enough (34 images as I’ve defined in the code), we will fine tune the model on the new data."
  },
  {
    text: "Back in the low_vision_classifier.py program, make the following adjustments:"
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.52.06.png?alt=media&token=17769460-80a4-432b-8a64-5a4ab8aa0cf9", alt: ""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.52.30.png?alt=media&token=b6320564-3305-4e8f-b337-ac65bfb59af3", alt: ""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.52.51.png?alt=media&token=c4ea420f-a38d-4a5a-ba2b-5fa1bf7d4b79", alt: ""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.53.07.png?alt=media&token=f81f008b-c8a5-4809-aea3-63650f452419", alt: ""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.53.23.png?alt=media&token=83ca57f1-0679-4db6-b01f-2268cc53a575", alt: ""}]
  },
];

export const ImproveAccuracy = [
  {
    title: "Improve Accuracy"
  },
  {
    text: "Keep this program running whilst you play the game until you have at least 34 more examples so that the model can be fine-tuned and learn the new data."
  },
  {
    text: "To evaluate the accuracy of the fine-tuned model, re-run the program from the last module to train a new model on the larger data set. Make sure to change the name of the model you’re saving so that you’ve still got reference to the older model."
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.57.11.png?alt=media&token=44e49177-7d78-4870-81b0-161e60333784", alt: ""}]
  },
  {
    text: "Running this program should output the graph of validation accuracy against training accuracy, for each epoch, as well as a graph of comparing the loss function. Did the evaluation improve as you expected it to with the validation accuracy following a similar L shape to the training data? I would be surprised if you did!"
  },
  {
    text: "Personally, I didn’t see an improvement. The model is still learning the training data very well (high training accuracy) but doesn’t make accurate predictions on unseen data  (low validation accuracy). Ideally, both training and validation accuracy should improve together. Therefore, while we still have a very small dataset, these early signs suggest that our model is overfitting and learning very specific, irrelevant patterns in the training data that doesn’t reflect the underlying patterns in the real world."
  },
  {
    text: "So what to do? This is where regularisation comes in. It helps models focus on meaningful patterns rather than fitting to noise or memorising the training set."
  },
  {
    text: "A good way to think about it is like a test at school. Overfitting is like memorising the answers to a practice test without understanding the content. Whereas, regularisation is like studying, it makes sure you actually learn."
  },
  {
    text: "We are using a neural network to learn our data. Neural networks are extremely complex and can fit the training data extremely well but fail to perform on test data. Regularisation keeps the model simpler and more flexible."
  },
  {
    text: "We are going to use L2 Regularisation, which adds a penalty to the model if it tries to use large weights. Without this the model will apply large weights to inputs it thinks are important in the training data. This can mean the model is memorising too much and doesn’t adapt to new data. Therefore, L2 regularisation tells the model to learn weights, but to keep them small. This makes the model less sensitive to tiny changes in input data and forces it to focus on the general patterns instead of noise or outliers."
  },
  {
    text: "We are also going to use dropouts. This means our model will randomly drop out some neurons during training, which makes the model less reliant on any one specific neuron. Without dropout, neurons can learn to rely on each other in a fixed way, meaning the model memorises specific patterns. However, with dropout, the model is forced to spread out what it learns because any neuron might disappear during training, so it learns more flexible and less overly-specific patterns."
  },
  {
    text: "To apply regularisation to our model, import Dropout and regularizers from keras. Then, when defining the customised layers in our model, we will specify the L2 regulariser method by passing it in as a parameter to our hidden layer. This will force the model to keep the weights of its neurons small. We will also apply a dropout of 0.5 to this layer, meaning 50% of neurons in this hidden layer will be randomly dropped during training."
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2022.59.50.png?alt=media&token=750fc552-570d-4d47-8e20-afd469422377", alt: ""}]
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2023.00.08.png?alt=media&token=6d582b44-6dd8-4b75-95db-6d2f5a73a6a7", alt: ""}]
  },
  {
    text: "With these changes in place, re-run the program to train a model from scratch on the entire dataset and notice accuracy and loss graphs. Any better? I certainly got better results:"
  },
  {
    images: [{image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2023.01.52.png?alt=media&token=10b0ebb6-8527-43f4-bf2a-09e598af894c", alt: ""}, {image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module6%2FScreenshot%202025-05-19%20at%2021.55.12.png?alt=media&token=ca3ce233-777f-419e-a4e5-679618d5ee85", alt: ""}]
  },
  {
    text: "By implementing regularisation, we force the model to learn more flexible, and less overly-specific patterns in data. This prevents overfitting our training set so that the model performs better on unseen data, as shown by the graphs above."
  },
  {
    text: "Great job! If you’ve made it this far and improved your model, that’s genuinely a notable achievement. You’ve gained knowledge of building effective feedback loops to help models learn on-the-fly and learned regularisation techniques to improve your model’s performance. These are really important skills in today’s technical world where building models that are not just accurate, but also reliable, is more important than ever!"
  },
];