export const module5NavItems = [
  {
    id: "0",
    title: "Project Overview",
    url: "#project-overview",
  },
  {
    id: "1",
    title: "Prerequisites",
    url: "#prerequisites",
  },
  {
    id: "2",
    title: "Walkthrough",
    url: "#walkthrough",
  }
];

export const ProjectOverview = [
  {
    title: 'Project Overview'
  },
  {
    text: 'In the 21st century, gaming has not only come on leaps and bounds, it has become a new way to socialise. It means you can hang out with mates more often, take on various thought-provoking challenges, and it is a great way to escape from school or work. There are a number of reasons why gaming is a great thing.'
  },
  {
    text: "But what if you couldn’t play?"
  },
  {
    text: 'What if you have low vision or you can’t use your hands very well? What if those experiences, that freedom, that fun with your mates, wasn’t available to you? Simply because the game just wasn’t built for you.'
  },
  {
    text: 'In recent years, there has been a big social shift in software towards accessibility. The general view is that it isn\'t a nice-to-have but it is a human right; companies building inaccessible software are excluding members from using their products.'
  },
  {
    text: 'As a result, large corporations are really increasing their funding towards accessibility. Specialised, custom controllers, screen readers, and scalable interfaces are all current features that have appeared to support this shift.'
  },
  {
    text: 'However, technology just got interesting. Advancements in machine learning and computer vision, in my opinion, have opened the doors in this field to a range of possibilities, new feats.'
  },
  {
    text: 'So, what are we going to do about it?'
  },
  {
    text: 'We are going to build an AI assistant that sits in the background of a game, and dynamically helps players with disabilities in real time by watching, understanding, and adapting to what the player is doing and what is happening in the game.'
  },
  {
    text: 'This is a really exciting challenge we are at the start of. In 6 weeks of progress, I believe we can build a great prototype. This week we are going to train our first ML model that detects scenes in Minecraft that a user with low vision may find difficult to see and understand what is going on. '
  },
  {
    text: 'Hope you’re excited! There is A LOT you will learn here so, as always, shout up if you have any questions!'
  },
];

export const GetYourselfFamiliar = [
  {
    title: 'Get yourself familiar with Machine Learning'
  },
  {
    text: 'Jumping into the world of machine learning is no easy feat. Computers that can think like humans, it’s a lot to get your head round right?'
  },
  {
    text: 'Watch this video to get yourself familiar with the topic, and make sure you can answer the multiple choice questions below, this is going to be really useful later on.'
  },
  {
    ytVideoUrl: "https://www.youtube.com/embed/KNAWp2S3w94?si=sk2HrF6yjk7ipFYl"
  },
  {
    quiz: {
      question: 'Why do we use machine learning?',
      options: [{option: 'Because there are certain solutions we can’t solve with regular programming', correctAnswer: true}, {option: 'To replace all human-decision making', correctAnswer: false}],
      explanation: 'Traditional programming works by writing explicit rules for every possible outcome. However, there are many complex, real-world problems (like image recognition, speech understanding etc) where it’s impractical to manually code every possible scenario. Machine learning allows models to learn from data and make decisions or predictions based on patterns in the data, without needing predefined rules.'
    }
  },
  {
    quiz: {
      question: 'How do we train a machine to identify data?',
      options: [{option: 'Provide data with answers and program a machine to learn the patterns in the data.', correctAnswer: true}, {option: 'By writing complex code to define every outcome', correctAnswer: false}],
      explanation: 'This is called supervised learning. In machine learning, we train models by providing them with data that includes both the input (features) and the expected output (labels). The model learns the patterns between the data and the answers so it can make predictions on new, unseen data.'
    }
  },
  {
    quiz: {
      question: 'What is a tensor?',
      options: [{option: 'A machine learning algorithm.', correctAnswer: false}, {option: 'A multi-dimensional array, used in machine learning to represent any numerical data such as images, numbers, audio, etc.', correctAnswer: true}, {option: 'A function used to speed up training', correctAnswer: false}, {option: 'A specific type of neural network layer', correctAnswer: false}],
      explanation: 'A tensor is a way to standardise data into machine learning models. It can represent ANY dimension, e.g. a number is one dimension, a data point on an x and y graph is two dimensional, and data on an x y z graph is three dimensional, but all are tensors. Therefore, tensors can represent images if the images are represented as their rgb (red, green, blue) values for each pixel.'
    }
  },
  {
    quiz: {
      question: 'What does a neural network do?',
      options: [{option: 'Tracks the progress of machine learning models.', correctAnswer: false}, {option: 'It rewards or punishes the model based on its actions to learn the best strategy over time.', correctAnswer: false}, {option: 'Analyses patterns in a tensor to make a prediction.', correctAnswer: true}, {option: 'It draws a straight line through the data points to make predictions.', correctAnswer: false}],
      explanation: 'Neural networks are designed to process data (represented as tensors) and learn patterns from it. They analyse the data to make predictions, such as classifying images or recognizing speech.'
    }
  },
  {
    quiz: {
      question: 'What is a loss function?',
      options: [{option: 'A function that adjusts the weights to a model to improve for next time', correctAnswer: false}, {option: 'A function that measures the error in a model’s prediction by comparing it with the actual answer.', correctAnswer: true}, {option: 'A function that tracks how much data is processed during training.', correctAnswer: false}, {option: 'A function that saves the model\'s progress after each step.', correctAnswer: false}],
      explanation: 'The loss function quantifies how well well or poorly the model’s prediction are compared to the true answer). During training, this helps the model know how much to adjust its weights to reduce eros.'
    }
  },
  {
    quiz: {
      question: 'What is an optimiser function?',
      options: [{option: 'A function that calculates the error in a model’s prediction.', correctAnswer: false}, {option: 'A function that adjusts the weights to a model to reduce the loss function and improve for next time', correctAnswer: true}, {option: 'A function that makes the model learn faster.', correctAnswer: false}, {option: 'A function that measures the model\'s performance in real-time.', correctAnswer: false}],
      explanation: 'The optimiser updates the model\'s weights during training to minimise the error (from the loss function) and improve predictions. This is what allows the model to learn and improve.'
    }
  },
  {
    quiz: {
      question: 'What is an epoch?',
      options: [{option: 'A measurement of time during training.', correctAnswer: false}, {option: 'One complete pass through the entire training dataset where the model learns and updates its weights.', correctAnswer: true}, {option: 'A single data point in the training set.', correctAnswer: false}, {option: 'A checkpoint for saving the model\'s progress.', correctAnswer: false}],
      explanation: 'An epoch refers to one full pass of the entire dataset through the model. The model updates its weights after seeing the whole dataset once, and multiple epochs are used to progressively improve the model.'
    }
  },
];

export const WalkThrough = [
  {
    title: 'Training a model to detect low vision scenes'
  },
  {
    text: 'In this module, we are going to train our first ML model that detects scenes in Minecraft that a user with low vision may find difficult to see and understand what is going on.'
  },
  {
    text: 'To tackle any machine learning problem, we first need to think how (and if) we can get data that represent the issue and how we can represent that data in a way that the model can analyse detect patterns.'
  },
  {
    text: 'As previously mentioned, we can represent images as numbers by organising the RGB (red, blue, green) values of each pixel in a three dimensional array (tensor). It would look something like this (but on a much larger scale):'
  },
  {
    images: [
      {image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/tensor-image.png?alt=media&token=6af63293-cc8d-40b2-874f-b8a85e30f000", alt: ""}
    ]
  },
  {
    text: 'Of course, we could use videos, but videos are much more data heavy and this would introduce latency into our model, something we definitely don’t want to introduce into the game.'
  },
  {
    text: 'The first step is to gather a training set by collecting screenshots of scenes of low visibility. Don’t worry, I’ve already saved you the trouble! I’ve collected a fairly set of screenshots split into 4 categories: non low vision, low vision bright, low vision dark, and low vision cluttered. The goal of this model is to predict which category a new scene belongs to.'
  },
  {
    text: 'Getting you set up:'
  },
  {
    text: 'As usual, we should set up a virtual environment to ensure we are only installing the dependencies/libraries we need for this specific project.'
  },
  {
    text: 'Open up a terminal in the project directory and run the following:'
  },
  {text: 'python3 -m venv name_of_your_choice'},
  {text: 'If you’re on Mac:'},
  {text: 'source name_of_your_choice/bin/activate'},
  {text: 'If you’re on Windows:'},
  {text: 'name_of_your_choice\\Scripts\\activate'},
  {text: 'Make sure your IDE is using this virtual environment by checking in the bottom right corner or by pressing Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows) and typing Python: Select Interpreter into the search bar, then select the version that references  the virtual environment you just created.\n'},
  {text: 'Back in the terminal, run the following to install Tensorflow (a machine learning framework for neural networks), Pillow (a python imaging library, PIL, used to open, manipulate, and save many different image file formats), and Matplotlib (a python library that helps you draw graphs to visualise data).'},
  {text: 'pip install matplotlib tensorflow pillow'},
  {text: 'Next, you’re going to need the dataset to train the model on. Click this link: '},
  {
    link: {link: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/data.zip?alt=media&token=75356214-2cc6-47ef-b0b5-8ebc35d60207", name: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/data.zip?alt=media&token=75356214-2cc6-47ef-b0b5-8ebc35d60207"}
  },
  {text: 'This will download the dataset on your system, unzip the file and copy the data folder into the vs code project, on the same level as the python file itself, like so:'},
  {
    images: [
      {image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/folder_structure.png?alt=media&token=c7a8ffc1-244e-4f07-8e57-aef5cf1fb93a", alt: ""}
    ]
  },
  {text: 'Import necessary dependencies. Each of these imported classes offer functions that perform specific tasks to help us train our model. I will explain what each of these do when we get to them.'},
  {
    images: [
      {image: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/keras_imports.png?alt=media&token=8d3638b9-a6ac-4043-8987-d936e358e87c", alt: ""}
    ]
  },
  {
    text: 'First, we’ll need to load in our images. Define what each image should be resized to (160x160px) and define the batch size (how many images are passed through to the model at once). These are known as hyperparameters, constraints you set prior to training that controls how the model learns. For example, larger batch sizes are faster to train but might *overfit to the training data. You can alter these values in training to improve your model’s evaluation.'
  },
  {
    text: '*overfitting is just where the model is fit too perfectly to the training data so that it doesn’t perform as well in real world data, which likely differs slightly from the training data.'
  },
  {
    text: 'Use the ImageDataGenerator, a data preprocessing class from Keras, to rescale image pixel values to a range between 0 and 1. This is to *normalise the data so that white, 255, does have a stronger influence on the model than black, 0, just because it is a bigger number.'
  },
  {
    text: '*normalisation is the process of scaling input data so it falls within a specific range, usually 0 to 1. It prevents the model from applying biases to inputs that have a large range of values.'
  },
  {
    text: 'Now, we want to split our data set into training data and validation data. The training data is what the model is trained on, and the validation data is what is used to see if the model performs well on data it hasn’t seen during training. The split is usually 80% training data and 20% validation.'
  },
  {
    text: 'Then, use the flow_from_directory function to load the images from our data set. Here, each folder name becomes the class label of those images automatically.'
  },
  {
    text: 'The print statements are just so you can see what is happening at each stage when you run the program.'
  },
  {
    images: [{image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/load_dataset.png?alt=media&token=9d26a87c-7aee-42c3-b485-18d067d5f306', alt: ''}]
  },
  {
    text: 'Following this, we are going to load the MobileNetV2 model from Keras. MobileNetV2 is a lightweight neural network that has been pretrained on ImageNet (a large dataset with millions of images). We aren’t going to train our own model from scratch because we don’t have millions of data at our disposal. However, we will train another layer on top of this model so it can learn to classify our data.'
  },
  {
    text: 'To do this, we set include_top to False to exclude the models final classification layers as we will add our own for our 4 categories. On the next line, we will freeze the early layers of the base model so we don’t accidentally modify the knowledge the model already has from its training on the ImageNet dataset.'
  },
  {
    text: 'On the next few lines, we will define our custom classifier layer.'
  },
  {
    text: 'When passed through the base MobileNetV2 model, our images are going to be analysed and transformed into a feature map (a 3 dimensional tensor). However, the hidden classification layers we are adding work with 1 dimensional vectors, so we use GlobalAveragePooling to flatten the feature map into a vector format.'
  },
  {
    text: 'As an FYI, hidden layers are called this because they are the layers of the neural network that perform many complex mathematical operations so they are not easily understood by humans, hence they are “hidden”, we don’t look at them too deeply.'
  },
  {
    text: 'Dense(64) adds a new hidden layer. The 64 refers to the number of neurons (nodes) in this layer. It is these neurons that each perform an operation on the data to transform it in some way to analyse a pattern. This is what the activation function applies weights to, so that more influential neurons are given a higher bias. I know this is a lot, don’t worry too much about the high-level inner workings!'
  },
  {
    text: 'Dense(4) adds our output layer. It gives us 4 output neurons (one per class like low_vision_dark, etc). It uses softmax to produce probabilities instead of raw numbers. For example, instead of outputting [2.1, 1.3, 0.5, 3.2], it may output [0.21, 0.11, 0.05, 0.63], so the model can be 63% confident the image belongs to class 4.'
  },

  {images: [{image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/load_cnn.png?alt=media&token=690ca6f3-5dd3-4863-9885-f28251da5b6d', alt: ''}]},
  {
    text: 'And with that, we are ready to train our model! '
  },
  {
    text: 'First build the model using the Model function, and then configure the model, using the compile function. Here we specify the loss function we want to use to calculate the error in our model and the optimiser function that will adjust the weights of the neurons in our neural network.'
  },
  {
    text: 'Now, the interesting part. We train the model using the fit function. This will train the model on the dataset 5 times (as specified by the epoch). At the end of each epoch, it runs the model on the validation data and calculates its error using the loss function, then goes back through the model adjusting the weights of each neuron to reduce the error. '
  },
  {
    images: [{image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/train_model.png?alt=media&token=d6e4b995-ee18-4b4d-8bfe-160b8f5b7044', alt: ''}]
  },
  {
    text: 'To get an idea of how good the model is. Use matplot to generate a graph of how the accuracy of the model improved on the training data and the validation data during its training. We can do this to get an idea of the amount of error as well.'
  },
  {
    text: 'Also, we will save the model to a file so you can use it later.'
  },
  {
    images: [{image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/evaluate_model.png?alt=media&token=0d78041c-24ed-404b-8ac0-069868b5b4d1', alt: ''}]
  },
  {
    text: 'After running your program, you should see logs of the model training per epoch, and afterwards it should generate graphs similar to the ones below:'
  },
  {
    images : [
      {image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/accuracy_graph.png?alt=media&token=553f19d9-f1eb-4c70-9687-d3ccf5e57654', alt: ''},
      {image: 'https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/loss_graph.png?alt=media&token=9df1fb16-c6ee-4af6-97f5-39d32973b13a', alt: ''},
]
  },
  {
    text: 'A good model should not look like this. For a good model, the validation accuracy/loss should follow a similar path to the training accuracy/loss. Typically, this would mean the model has been overfitted to the training data, meaning it has fit too perfectly to the training data that it does not reflect real world data.'
  },
  {
    text: 'However, in our case, we know the dataset is too small. Machine learning models need A LOT of data to generalise well.'
  },
  {
    text: 'So, how do we get this data?'
  },
  {
    text: 'Don’t worry we will answer that exact question in the next module, where we’ll learn about incremental learning. In the meantime, well done! That is the first machine learning model you’ve ever trained, great stuff!'
  }
]