import {
  closeVid,
  collectionScript,
  connect2Weaviate, createCollection, displayOnVid,
  foldStruct, imageDataJSON,
  imageTensor, importInsert, importProgram, insertImagesToDB, insertUtil,
  m4Flow, m4Terminal,
  normalDistribution,
  normalDistribution2, queryDB, queryUtil,
  rockPaperScissors, startVid, vectoriseFrame, vectoriseFunction, weaviatDash, weaviateCollection, weaviateDash2
} from "../assets/index.js";

export const module4NavItems = [
  {
    id: "0",
    title: "Task At Hand",
    url: "#task",
  },
  {
    id: "1",
    title: "Connecting to Weaviate",
    url: "#connect",
  },
  {
    id: "2",
    title: "Insert images",
    url: "#insert"
  },
  {
    id: "3",
    title: "Build the program",
    url: "#build"
  }
];

export const Introduction = [
  {
    title: 'Intro'
  },
  {
    text: 'So, images speak a thousand words right? Well they also speak a thousand data points in something we call a rank-3 tensor in data science. An image can be represented like the diagram below. The data model has 3 axes: the width, height and colour channels (red, green, blue) where each number represents a particular colour intensity in the given colour channel.'
  },
  {
    images: [
      {
        image: imageTensor, alt: ''
      }
    ]
  },
  {
    text: 'Because we can represent images, effectively, as a bunch of numbers, we can build some amazing projects in the computer vision and AI space. Bearing in mind the recent advancements in technology, this is an extremely exciting industry and building your own innovative ideas in this space is absolutely the way to start! Are you ready to jump into the deep end? We’ll be using some of the very latest, state-of-the-art technologies to build a real time image similarity search program. We’ll be utilising neural networks and vector databases… two very hot topics in the space of AI and machine learning.'
  },
  {
    text: 'As I’ve always said, don’t worry about understanding the nitty gritty details. Focus on getting the program working, you can add print() statements along the way to understand what each function is outputting. The main thing I’d like you to get out of this is to open your mind as to the possibilities of what you can build when you stay on top of the latest, emerging technologies.'
  },
  {
    text: 'We’ll do a quick overview of what we mean by neural networks and vector databases to give you some context then we’ll head into the program. Good luck!'
  }
];

export const NeuralNetworks = [
  {
    title: 'Neural Network'
  },
  {
    video: {source: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module4%2FUntitled%20design%20(2).mp4?alt=media&token=3c3d3cb2-c90c-4a5d-96af-1f2f4860c473"}
  },
];

export const VectorDatabases = [
  {
    title: 'Vector Databases'
  },
  {
    video: {source: "https://firebasestorage.googleapis.com/v0/b/python-cv-course-a91b0.firebasestorage.app/o/Module4%2Fvector-db-intro.mp4?alt=media&token=960a2093-0d5e-45a7-b070-fdd7d57bf842"}
  },
];

export const TaskAtHand = [
  {
    title: "The Task At Hand"
  },
  {
    images: [
      {image: m4Flow, alt: ""},
    ]
  },
  {
    images: [
      {image: rockPaperScissors, alt: ""},
    ]
  },
  {
    text: 'This pipeline consists of 2 high-level steps: '
  },
  {
    list: [
      {bulletPoint: 'Building up the Weaviate vector database containing numerous vectors representing images of different hand gestures.'},
      {bulletPoint: 'Performing a similarity search by vectorising a current video frame and finding its nearest vector in the database. We’ll then check this vector’s metadata and display its specified hand gesture on the video feed.'}
    ]
  },
  {
    text: 'When vectorising the images, I had two options: use Weaviate’s built-in embedding model, or use an open source model. As this is such an upcoming niche, open source models are constantly being optimised and can often outperform well established models. Also, by separating the embedding model from your vector database, I decoupled the program, allowing me to swap out embedding models, should my needs change. '
  },
  {
    text: 'For this program, I used Hugging Face’s Swin Transformer model due to its ability to generate highly representative embeddings for images.'
  },
  {
    text: 'Once I ran these images through this embedding model, I’d need to store these vectors (embeddings) in a vector database. For this, I leveraged the easy-to-use, high performing vector database provider, Weaviate. Weaviate’s support for HNSW indexing ensures fast and efficient similarity searches, a necessity in my case. Also, it has the ability to store metadata alongside vectors. This allowed me to store extra information about images like what hand gesture is shown in the image.'
  },
  {
    text: 'With this database full of meaningful vectors representing images containing different gestures, I could write a real-time image similarity search program. It would vectorise a frame in a video feed and perform a similarity search to find the nearest vector, which would contain the type of hand gesture as part of its data object.'
  },
  {
    text: 'With the tech stack decided, it was time to put thought into action!'
  }
];

export const PythonSetUp = [
  {
    title: 'Python Setup'
  },
  {
    text: 'I started by creating 3 Python scripts: one to create a Weaviate collection, one to insert images into the vector database, and one to run the real-time image similarity search program. Also, I created image processing and Weaviate utility files, which contain reusable functions for our scripts.'
  },
  {
    images: [
      {image: foldStruct, alt: ''}
    ]
  },
  {
    text: 'Up until now, we’ve been installing libraries into our global python version for simplicity. However, this is problematic when you want to work on different projects with different dependency requirements. To solve this, we’ll create a virtual environment that will contain the libraries specifically for this module. In the project directory, run python3 -m venv <YOUR_ENV_NAME> to create the virtual environment and run source <YOUR_ENV_NAME>/bin/activate to activate it. Now inside the environment run: pip install weaviate-client torch transformers PIllow imutils opencv-python requests to the install the libraries we’ll be using in this module.'
  },
  {images: [
      {image: m4Terminal, alt: ''}
    ]
  },
  {
    images: [
      {image: weaviatDash, alt: ''},
      {image: weaviateDash2, alt: ''}
    ]
  },
  {
    images: [
      {image: connect2Weaviate, alt: ''}
    ]
  },
];

export const vectoriseImages = [
  {
    title: 'Vectorise Images Utility Function'
  },
  {
    images: [
      {image: vectoriseFunction, alt:''}
    ]
  },
  {text: 'Instead of relying on Weaviate’s built in embedding (vectorise) model, I used Hugging Face’s open-source Swin Transformer model due to its optimisations for generating highly representative embeddings for images.'},
  {text: 'The transformers library is developed by HugginFace and provides easy access to pretrained models, as well as tools for working with them. The AutoImageProcessor I’ve imported here handles preprocessing for the image data. It resizes the image, normalises pixel values so the model isn’t biassed to certain, high intensity colours and finally converts the image into the format expected by the model - a three dimensional tensor.'},
  {text: 'In my code, this processor extracts the image\'s tensor and passes it into the embedding model. '},
  {text: 'This embedding model in particular is a neural network designed around generating vectors that hold semantic meaning about an image from their inputted tensor. In fascinating fashion, it takes a number of steps to do this:'},
  {list: [
      {bulletPoint: 'The image tensor is first split into small patches (e.g. 4x4 pixel blocks).'},
      {bulletPoint: 'Each patch is projected into a high-dimensional vector using a learned linear regression transformation. This vector holds feature representations of the content within the patch. This includes patterns within the patch and relationships between pixels. Patches containing specific objects will contain features that represent these distinctive patterns.'},
      {bulletPoint: 'Finally, the model then combines information across the patches, modelling different relationships between different parts of the image.'}
    ]},
  {text: 'This last step is the last “hidden state” of the neural network and we can access it in our program.'},
  {text: 'This is as complicated as it will get - I promise! As I say, don’t get bogged down in the details.'},
];

export const InsertImages = [
  {
    title: "Insert Data To Weaviate"
  },
  {
    text: 'At this stage, I could officially start the real-time image similarity search pipeline! If you can remember, this consists of 2 stages, inserting our image embeddings into the database and querying the database based on real-time video frames.'
  },
  {images: [
      {image: insertUtil, alt: ''}
    ]},
  {
    images: [{image: importInsert, alt: ''}]
  },
  {
    images: [{image: imageDataJSON, alt: ''}]
  },
  {
    text: 'In the insert images script, I defined an array of different images showing different hand signals, each item should contain the image url and the type of hand gesture shown.'
  },
  {
    images: [{image: insertImagesToDB, alt: ''}]
  },
  {
    text: 'For each image, the script vectorises it and appends the image object to a list. Once all images have been embedded, it inserts the vector objects into the Weaviate collection. '
  },
  {
    text: 'This is good progress! At this point, I had numerous embeddings stored in my database, and I could move onto the fun part - building the hand gesture recognition video stream based on similarity search…'
  }
];


export const ConnectingToWeaviate = [
  {
    title: 'Connecting to Weaviate'
  },
  {
    text: 'The first step was to connect to my Weaviate cluster. First we need to store the endpoint and admin API Key as environment variables, as it’s not secure to hard code these sensitive values. To do this, before running the program, in the same terminal run export WEAVIATE_URL=(your_rest_endpoint) export WEAVIATE_API_KEY=(your_admin_api_key). This function will return a client, which we can use to interact with the Weaviate cluster, like creating a new collection:'
  },
  {images:[{image: createCollection, alt:''}]},
  {images: [{image: collectionScript, alt: ''}]},
  {text: 'With these utility functions, I could create a simple script to create the new collection.'},
  {text: 'Remember to set the environment variables. Upon successful execution of the program, I could see the new collection in my Weaviate cluster:'},
  {
    images: [
      {image: weaviateCollection, alt: ''}
    ]
  },
  {text: 'Success!'}
];

export const BuildingTheProgram = [
  {
    title: 'Building the Program'
  },
  {
    images: [
      {image: importProgram, alt: ''}
    ],
  },
  {
    images: [
      {image: startVid, alt: ''}
    ],
  },
  {
    images: [
      {image: vectoriseFrame, alt: ''}
    ],
  },
  {
    images: [
      {image: queryUtil, alt: ''}
    ],
  },
  {
    images: [
      {image: queryDB, alt: ''}
    ],
  },
  {
    images: [
      {image: displayOnVid, alt: ''}
    ],
  },
  {
    images: [
      {image: closeVid, alt: ''}
    ],
  },
  {text: 'This program loops through each frame of a live video feed, vectorises the current frame and performs a similarity search against vectors in the Weaviate collection. This will return the data object of the closest vector, which will contain the type of hand gesture which we will display on the video feed. Sounds good right? There were some challenges I faced..'},
  {text: 'As I’m sure you’re aware, this is very computationally expensive and will blow up your machine - or just result in a laggy video feed. To hit that blend of performance and functionality, I performed a similarity search every 5 frames, which is still remarkably quick when you consider all the logic going on in the background.'},
  {text: 'Also, when the hand gesture in the video isn’t clear, the similarity search was random to say the least. To fix this, I set the certainty property in the near vector query to 0.8 so that a vector isn’t returned if its similarity to the query vector is below 80%.'},
  {text: 'With these optimisations in place, the program ran much smoother. It was also surprisingly accurate bearing in mind I only stored a handful of images in the database. As a result, this program gives me the confidence I need to develop this further and apply it to real world use cases.'}
];

export const Reflect = [
  {
    title: 'Lets Reflect'
  },
  {text: 'We are in a period of astonishing technology advancements and innovations and this article barely scratches the surface. The AI and augmented reality space is growing, how can you take these concepts and apply them towards your domain? Towards your ideas? If there was something I’d want you to take away from this, it would be to question what that exciting next step; next idea; next challenge might be for you.'},
  {text: 'Before you finish this module, I’m going to challenge you to answer this question:'},
  {quote: "How could you apply real time similarity search to enhance real-world solutions?"},
  {text: 'Put your answer in the submission! How are you finding it so far, are you thinking “Relax mate, I haven’t even done my GCSE’s yet and your throwing machine learning at me?!” I wouldn’t be surprised, this is a lot, but these are amazing skills you’re building and it is a great time to learn them. I would love to hear some feedback!'}
];

