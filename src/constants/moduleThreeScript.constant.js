import {
  module3One,
  module3Three,
  module3Two,
  normalDistribution,
  normalDistribution2, objectTracking1, objectTracking2, objectTracking3, objectTracking4, objectTracking5,
} from "../assets/index.js";

export const module3NavItems = [
  {
    id: "0",
    title: "Gaussian Algorithm",
    url: "#gaussian",
  },
  {
    id: "1",
    title: "Advanced Motion Detection",
    url: "#advanced",
  },
  {
    id: "5",
    title: "Object Detection",
    url: "#object"
  }
];

export const GaussianMotionDetection = [
  {
    title: "Gaussian Motion Detection"
  },
  {
    text: "In the last module, we built our first motion detection algorithm. It was a very simplistic model but gave us a good insight into how motion detection works by subtracting the foreground from the background. It’s now time to leverage a much more powerful algorithm for background segmentation - OpenCV’s Gaussian Mixture-based algorithm."
  },
  {
    text: "Our last model used the first frame of the video as its background model, making the program vulnerable to false positives such as lighting changing. The model we’ll be using today constantly recalculates the background model."
  },
  {
    text: "It calculates the mean brightness intensity for each pixel over time and how much this pixel tends to deviate away from the mean. It is calculating each pixel's normal distribution - remember me when you learn about this in Maths! Here’s what a pixel’s normal distribution on a graph would look like:"
  },
  {
    images: [
      {image: normalDistribution, alt: ""}
    ]
  },
  {
    text: "The highest point in the curve is the mean brightness intensity for a specific pixel and the width of the curve represents how much the actual brightness intensity tends to deviate away from this mean. "
  },
  {
    text: "By continually recalculating this normal distribution for every pixel in the video, we get a background model. This allows the program to know what “normal” looks like for the background so it is less likely to falsely identify motion due to slight lighting changes or trees swaying in the wind for example. Therefore, when there is motion in the foreground, the algorithm will quickly realise the pixel intensities of that area have deviated far enough away from the normal that motion has been detected."
  },
  {
    images: [
      {image: normalDistribution2, alt: ""}
    ]
  }
];

export const advancedMotionDetectionAlgorithm = [
  {
    title: "Building an Advanced Motion Detector"
  },
  {
    images: [
      {image: module3One, alt: ""}
    ]
  },
  {text: "Just like our last program, we will import our necessary libraries and construct our command line arguments. "},
  {text: "If our arguments don't provide a video, we will start a video stream and store this in our variable, videoStream. Otherwise, we will assign videoStream to the video source provided in the command line. "},
  {text: "cv2.createBackgroundSubtractorMOG2() provides the methods needed for the Gaussian mixture-based algorithm we spoke about earlier. Here, we are instantiating an object that allows us to use these methods and assigning it to the variable fgbgSubtractor."},
  {images: [{image:module3Two, alt: ""}]},
  {text: "Just like in our last program, we will define a while loop that loops over each frame in the video until the video ends or a condition is met. We store the current frame in the frame variable and initialise the text variable to Unoccupied. If the frame is None this means the video has ended and we break the loop."},
  {text: "After this, we prepare the frame for the gaussian algorithm. We’ll resize the frame because we don’t need to be working with large video frames, and we’ll convert the frame to grayscale as colour isn’t needed for our motion detection algorithm. "},
  {text: "fgbgSubtract.apply(gray) applies the Gaussian background subtraction algorithm on the grayscale frame. This creates a foreground mask that highlights moving objects in white and the background in black. This mask is then blurred on the next line to smooth the mask to reduce noise and make more distinct contours. "},
  {text: "Contours are the boundaries of objects detected in the foreground mask. cv2.findContours() locates the boundaries in the mask. It takes in 3 arguments here: a copy of the foreground mask, cv2.RETR_EXTERNAL which tells the method to only retrieve external contours and cv2.CHAIN_APPROX_SIMPLE which tells the method to compress the contour points to save memory by approximating the shape."},
  {text: "cv2.findContours() returns two values, contours and hierarchy. Contours is a list of detected contours, we store this in contours. We don’t need hierarchy so we use _ to discard it."},
  {images:[{image:module3Three, alt: ""}]},
  {text: "We loop over each detected contour using a for loop. If the area of the contour is smaller than the specified min_area, we ignore it, so that we aren’t detecting irrelevant movements. If the contour is big enough, we compute a bounding box around the contour using cv2.bouningRect. This returns a tuple that contains the coordinates, width and height, which we store in x, y, w, and h. Therefore, we can use these values to draw a rectangle around the detected motion using cv2.rectangle. We also update the text value to Occupied."},
  {text: "Exactly as in the last program, we display the room status and time stamp in the bottom left corner and show the relevant video feeds. To display the timestamp, we use the built-in python method, strftime (stands for string format time), which converts a datetime object (we pass the current datetime in through daytime.now()) into a formatted string. This function takes a string containing format codes like %Y (for year) and %d (for day) - don’t worry too much about this. If q key is pressed, we exit the while loop, which is where we will stop any video streams and destroy the windows the program spun up."},
];

export const theResults = [
  {
    title: "The Results"
  },
  {text: "If you can run this program successfully, you will notice this program is much more powerful than the one we built in the last module. This is because this algorithm simply uses more accurate maths (maths you may learn if you take A-Level Maths!). Very nice. If you haven’t got that working or have any questions feel free to reach out. Otherwise, it’s time to move on to the second section of this course, object detection..."}
];

export const objectDetection = [
  {title: "Object Detection and Tracking"},
  {text: "In order to track the detected motion, we will be using yet another powerful OpenCV algorithm to track objects. The CSRT (Distinctive Correlation Filter with Channel and Spatial Reliability) tracker works by continuously adapting its model of the object being tracked and is particularly robust to changes in scale, rotation and partial occlusion."},
  {
    list: [
      {bulletPoint: "At the start of tracking, the algorithm is provided with an area of the video and uses a correlation filter to track it. This works by finding the position in the new frame where the appearance is most similar to the original object. There are a couple of modern features that make this pretty effective:"},
      {bulletPoint: "Firstly, it uses correlation equations to evaluate which colours give the strongest visual cues for tacking the object and it will focus heavily on these colours to give more accurate results. "},
      {bulletPoint: "Also, it uses spatial reliability to account for how the object’s shape, position, and orientation may change over time. Pixels closer to the center of the tracked object are given a greater spatial weight and will be relied on more heavily so the algorithm won’t be thrown off when it is partially blocked. When the object is partially deformed, the tracker will adapt by adjusting the spatial weight to account for the change in shape of the object, allowing the algorithm to react to changes like rotation."},
      {bulletPoint: "Our current program is detecting motion and drawing bounding boxes around the areas of motion. However, we now want to detect the first object in motion, draw a bounding box around that and track it in the video stream."},
      {bulletPoint: "First, we need to install the opencv-contrib-python package, which includes additional modules like cv2.legacy, which includes the CSRT tracking algorithm we want to use. Run the following command to install it:"},
      {bulletPoint: "pyhton3 -m pip install opencv-contrib-python"},
      {bulletPoint: "Now we need to modify our current program. "},
      {images: [{image:objectTracking1, alt:""}]},
      {bulletPoint: "Firstly, we need to create an instance of our tracking algorithm before we enter the while loop. Also, we need to create a variable for the initial bounding box around the first detected object."},
      {images: [{image:objectTracking2, alt:""}]},
      {bulletPoint: "When an object is detected, we want our tracking algorithm to start tracking the object within the area of motion."},
      {bulletPoint: "Therefore, when motion is detected, and we start looping other the detected areas of motion (contours), we want to start the object tracker and pass in the frame and area of motion as arguments."},
      {bulletPoint: "Firstly, remove the code for drawing a bounding box around each contour (cv2.rectangle()) as we only want to draw one around the tracked object."},
      {bulletPoint: "Secondly, we only want to start the object tracker once, so add the if statement on line 61 to say only execute the code if the initialBoudningBox doesn’t have a value. Inside this block, assign initBoundingBox with the coordinates of the detected object and use this to start our tracker."},
      {bulletPoint: "Outside of this for loop, as long as the object tracker has been started (i.e. intiBoundingBox is not None) we want to continuously update the tracker with the new frame and it will do the hard work of tracking the object for us. If the algorithm is still tracking the object, the success property returned will be true. In this case, we will draw a bounding box around the object in the new frame. Otherwise, we will set initBoundingBox to None and the program will track the next detected object."},
      {bulletPoint: "If you give this program a run (and it’s working!), you will notice two key problems: motion is detected as soon as the video starts as the program hasn’t had time to build a background model, and even if motion was detected, the object will barely be in frame by the time the tracker starts tracking it."},
      {bulletPoint: "To resolve this, we need to give the program a warm up period before it starts detecting motion, and we also need to give the object chance to get in the frame before we start tracking it."},
      {images: [{image:objectTracking3, alt:""}, {image: objectTracking4, alt: ""}]},
      {images: [{image:objectTracking5, alt: ""}]},
      {bulletPoint: "Outside the while loop, let's define variables for frameCount, warmUpFrames and objectVisibleFrameCount (frames object has been visible for before we track it)."},
      {bulletPoint: "Inside the loop, before we start detecting motion, let’s do a check if the frameCount is less than the warmUpFrames (in this case 30), if it’s not, increase the frameCount by one (frameCount += 1 means frameCount = frameCount + 1) and jump to the next loop. This way we won’t detect any motion until 30 frames have passed (and the algorithm has built up a suitable background model)."},
      {bulletPoint: "That’s problem one solved, to solve problem two, we need to wait 5 frames before tracking the object. When the object is detected, increase the objectVisibleFrameCount by 1. Also, add an additional check that the objectVisibleFrameCount is greater than five before tracking the object."},
      {bulletPoint: "Sweet! Now it is time to check out what you’ve built. Run the program by typing python3 <PATH_TO_YOUR_PYTHON_FILE> or clicking the play icon in the top right of VisualStudioCode."},
      {bulletPoint: "As always, if it doesn't work, have a look at the error message and see if it gives you enough info to solve it, otherwise don’t hesitate to reach out!"}
    ]
  }
]